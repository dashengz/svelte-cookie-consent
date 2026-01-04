import cookies from 'js-cookie';
import { v4 as uuid } from 'uuid';
import { writable } from 'svelte/store';
// ============================================================================
// Programmatic Control
// ============================================================================
let editCallback;
/**
 * Register the editCookies callback for programmatic control.
 * Called automatically by BaseCookieConsent.
 */
export function registerEditCallback(callback) {
    editCallback = callback;
}
/**
 * Programmatically open the cookie settings modal.
 * Can be called from any component (e.g., footer links, settings pages).
 * Requires `editable={true}` on the cookie consent component.
 *
 * @returns true if the modal was opened, false if no instance is registered
 *
 * @example
 * ```svelte
 * <script>
 *   import { openCookieSettings } from 'svelte-cookie-consent';
 * </script>
 *
 * <button onclick={() => openCookieSettings()}>
 *   Cookie Settings
 * </button>
 * ```
 */
export function openCookieSettings() {
    if (editCallback) {
        editCallback();
        return true;
    }
    return false;
}
// ============================================================================
// Reactive Cookie Choices Store
// ============================================================================
/**
 * Reactive store for cookie consent choices.
 * Automatically updates when user accepts/rejects cookie choices.
 *
 * @example
 * ```svelte
 * <script>
 *   import { cookieChoices } from 'svelte-cookie-consent';
 * </script>
 *
 * {#if $cookieChoices.analytics}
 *   <p>Analytics enabled</p>
 * {/if}
 * ```
 */
export const cookieChoices = writable({});
// ============================================================================
// CookieCore
// ============================================================================
export default class CookieCore {
    cookie;
    fingerprinting;
    choices;
    constructor(cookie, choices, fingerprinting) {
        this.cookie = cookie;
        this.fingerprinting = fingerprinting;
        this.choices = this.enhanceChoiceCallbacks(choices);
    }
    /**
     * Enhance callbacks to update the store after user callbacks execute.
     */
    enhanceChoiceCallbacks(choices) {
        Object.entries(choices).forEach(([_key, choice]) => {
            const originalOnAccepted = choice.onAccepted;
            const originalOnRejected = choice.onRejected;
            choice.onAccepted = originalOnAccepted
                ? async () => {
                    await originalOnAccepted();
                    this.updateStore();
                }
                : () => {
                    this.updateStore();
                };
            choice.onRejected = originalOnRejected
                ? async () => {
                    await originalOnRejected();
                    this.updateStore();
                }
                : () => {
                    this.updateStore();
                };
        });
        return choices;
    }
    save() {
        const data = Object.fromEntries(Object.entries(this.choices).map(([key, choice]) => [key, Boolean(choice.value)]));
        const enabledByChoices = this.fingerprinting !== true &&
            typeof this.fingerprinting === 'object' &&
            this.fingerprinting.enabledBy
            ? this.fingerprinting.enabledBy
            : ['tracking', 'analytics'];
        const shouldEnableFingerprint = enabledByChoices.some((key) => data[key] === true);
        if (this.fingerprinting && shouldEnableFingerprint) {
            const fp = JSON.parse(cookies.get(this.cookie.name) ?? '{}').fingerprint ??
                (this.fingerprinting === true ? uuid() : (this.fingerprinting.uuid ?? uuid()));
            if (this.fingerprinting !== true && 'cookie' in this.fingerprinting) {
                const { name, ...config } = this.fingerprinting.cookie;
                cookies.set(name, fp, config);
            }
            else {
                data.fingerprint = fp;
            }
        }
        const { name, ...config } = this.cookie;
        cookies.set(name, JSON.stringify(data), config);
        Object.entries(this.choices).forEach(([key, choice]) => {
            if (key !== 'fingerprint') {
                void (choice.value ? choice?.onAccepted?.() : choice?.onRejected?.());
            }
        });
    }
    acceptAll() {
        Object.values(this.choices).forEach((choice) => {
            choice.value = true;
        });
        this.save();
    }
    rejectAll() {
        Object.values(this.choices).forEach((choice) => {
            choice.value = Boolean(choice.mandatory);
        });
        this.save();
    }
    getSaved() {
        const data = cookies.get(this.cookie.name);
        return data ? JSON.parse(data) : undefined;
    }
    loadSelections(selectedCookies) {
        Object.entries(selectedCookies).forEach(([key, value]) => {
            if (key !== 'fingerprint') {
                const choice = this.choices[key];
                choice.value = value;
                void (value ? choice?.onAccepted?.() : choice?.onRejected?.());
            }
        });
    }
    updateStore() {
        cookieChoices.set(Object.fromEntries(Object.entries(this.choices).map(([key, choice]) => [key, Boolean(choice.value)])));
    }
}
// ============================================================================
// Utilities
// ============================================================================
/**
 * Get the fingerprint UUID from cookie consent data.
 * Works in both client-side and server-side contexts.
 *
 * @param cookieName - The name of the consent cookie
 * @param options - Optional configuration for SSR contexts
 * @param options.cookies - Server-side cookies object with get() method (for SSR)
 * @returns The fingerprint UUID or undefined
 *
 * @example
 * ```typescript
 * // Define cookie name as a constant
 * const COOKIE_NAME = 'gdpr-cookie';
 *
 * // Client-side (browser)
 * const userId = getFingerprint(COOKIE_NAME);
 *
 * // Server-side (SvelteKit)
 * const userId = getFingerprint(COOKIE_NAME, { cookies });
 * ```
 */
export function getFingerprint(cookieName, options) {
    const cookieGetter = options?.cookies?.get.bind(options.cookies) ?? ((name) => cookies.get(name));
    const cookieValue = cookieGetter(cookieName);
    if (!cookieValue)
        return undefined;
    try {
        const parsed = JSON.parse(cookieValue);
        return parsed.fingerprint;
    }
    catch {
        return undefined;
    }
}
