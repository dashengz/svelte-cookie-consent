import type { CookieConfig, Choices, FingerprintingConfig } from './types.js';
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
