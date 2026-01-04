import type { BaseProps } from './types.js';
type $$ComponentProps = BaseProps & {
    customizeBtn: HTMLButtonElement | undefined;
    rejectAllBtn: HTMLButtonElement | undefined;
    acceptAllBtn: HTMLButtonElement | undefined;
    children?: import('svelte').Snippet;
};
declare const BaseCookieConsent: import("svelte").Component<$$ComponentProps, {}, "choices">;
type BaseCookieConsent = ReturnType<typeof BaseCookieConsent>;
export default BaseCookieConsent;
