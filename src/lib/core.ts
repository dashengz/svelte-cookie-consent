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

		if (this.fingerprinting && (data.tracking || data.analytics)) {
			const fp =
				JSON.parse(cookies.get(this.cookie.name) ?? '{}').fingerprint ??
				(this.fingerprinting === true ? uuid() : this.fingerprinting.uuid);

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
