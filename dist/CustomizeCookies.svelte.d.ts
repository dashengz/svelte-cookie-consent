import type { BaseProps } from './types.js';
type Props = {
    heading: BaseProps['heading'];
    description: BaseProps['description'];
    customize: Exclude<BaseProps['customize'], false>;
    choices: BaseProps['choices'];
    acceptAllLabel: BaseProps['acceptAllLabel'];
    rejectAllLabel: BaseProps['rejectAllLabel'];
    close: () => void;
    save: (e: Event) => void;
    acceptAll: (e: Event) => void;
    rejectAll: (e: Event) => void;
};
declare const CustomizeCookies: import("svelte").Component<Props, {}, "">;
type CustomizeCookies = ReturnType<typeof CustomizeCookies>;
export default CustomizeCookies;
