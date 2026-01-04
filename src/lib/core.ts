import cookies from 'js-cookie';
import { v4 as uuid } from 'uuid';
import type { CookieConfig, Choices, FingerprintingConfig } from './types.js';

// ============================================================================
// Programmatic Control
// ============================================================================

let editCallback: (() => void) | undefined;

/**
 * Register the editCookies callback for programmatic control.
 * Called automatically by BaseCookieConsent.
 * @internal
 */
export function registerEditCallback(callback: () => void) {
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
export function openCookieSettings(): boolean {
	if (editCallback) {
		editCallback();
		return true;
	}
	// console.warn('[svelte-cookie-consent] No cookie consent instance registered');
	return false;
}

// ============================================================================
// CookieCore
// ============================================================================

export default class CookieCore {
	constructor(
		private cookie: CookieConfig,
		private choices: Choices,
		private fingerprinting: boolean | FingerprintingConfig,
	) {}

	public save() {
		const data: { [k: string]: boolean | string } = Object.fromEntries(
			Object.entries(this.choices).map(([key, choice]) => [key, Boolean(choice.value)]),
		);

		const enabledByChoices =
			this.fingerprinting !== true &&
			typeof this.fingerprinting === 'object' &&
			this.fingerprinting.enabledBy
				? this.fingerprinting.enabledBy
				: ['tracking', 'analytics'];

		const shouldEnableFingerprint = enabledByChoices.some((key) => data[key] === true);

		if (this.fingerprinting && shouldEnableFingerprint) {
			const fp =
				JSON.parse(cookies.get(this.cookie.name) ?? '{}').fingerprint ??
				(this.fingerprinting === true ? uuid() : (this.fingerprinting.uuid ?? uuid()));

			if (this.fingerprinting !== true && 'cookie' in this.fingerprinting) {
				const { name, ...config } = this.fingerprinting.cookie!;
				cookies.set(name, fp, config);
			} else {
				data.fingerprint = fp;
			}
		}

		const { name, ...config } = this.cookie;
		cookies.set(name, JSON.stringify(data), config);
	}

	public acceptAll() {
		Object.values(this.choices).forEach((choice) => {
			choice.value = true;
		});
		this.save();
	}

	public rejectAll() {
		Object.values(this.choices).forEach((choice) => {
			choice.value = Boolean(choice.mandatory);
		});
		this.save();
	}

	public getSaved(): Record<string, boolean | string> | undefined {
		const data = cookies.get(this.cookie.name);
		return data ? JSON.parse(data) : undefined;
	}

	public loadSelections(selectedCookies: Record<string, boolean | string>) {
		Object.entries(selectedCookies).forEach(([key, value]) => {
			if (key !== 'fingerprint') {
				const choice = this.choices[key];
				choice.value = value as boolean;
				void (value ? choice?.onAccepted?.() : choice?.onRejected?.());
			}
		});
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
export function getFingerprint(
	cookieName: string,
	options?: { cookies?: { get: (name: string) => string | undefined } },
): string | undefined {
	const cookieGetter =
		options?.cookies?.get.bind(options.cookies) ?? ((name: string) => cookies.get(name));
	const cookieValue = cookieGetter(cookieName);

	if (!cookieValue) return undefined;

	try {
		const parsed = JSON.parse(cookieValue);
		return parsed.fingerprint;
	} catch {
		return undefined;
	}
}
