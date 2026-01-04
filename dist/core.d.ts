import type { CookieConfig, Choices, FingerprintingConfig } from './types.js';
/**
 * Register the editCookies callback for programmatic control.
 * Called automatically by BaseCookieConsent.
 */
export declare function registerEditCallback(callback: () => void): void;
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
export declare function openCookieSettings(): boolean;
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
export declare const cookieChoices: import("svelte/store").Writable<Record<string, boolean>>;
export default class CookieCore {
    private cookie;
    private fingerprinting;
    private choices;
    constructor(cookie: CookieConfig, choices: Choices, fingerprinting: boolean | FingerprintingConfig);
    /**
     * Enhance callbacks to update the store after user callbacks execute.
     */
    private enhanceChoiceCallbacks;
    save(): void;
    acceptAll(): void;
    rejectAll(): void;
    getSaved(): Record<string, boolean | string> | undefined;
    loadSelections(selectedCookies: Record<string, boolean | string>): void;
    private updateStore;
}
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
export declare function getFingerprint(cookieName: string, options?: {
    cookies?: {
        get: (name: string) => string | undefined;
    };
}): string | undefined;
