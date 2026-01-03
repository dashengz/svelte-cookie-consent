import type { CookieConfig, Choices, FingerprintingConfig } from './types.js';
/**
 * Register the editCookies callback for programmatic control.
 * Called automatically by BaseCookieConsent.
 * @internal
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
export default class CookieCore {
    private cookie;
    private choices;
    private fingerprinting;
    constructor(cookie: CookieConfig, choices: Choices, fingerprinting: boolean | FingerprintingConfig);
    save(): void;
    acceptAll(): void;
    rejectAll(): void;
    getSaved(): Record<string, boolean | string> | undefined;
    loadSelections(selectedCookies: Record<string, boolean | string>): void;
}
