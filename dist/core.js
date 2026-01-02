import cookies from 'js-cookie';
import { v4 as uuid } from 'uuid';
export default class CookieCore {
    cookie;
    choices;
    fingerprinting;
    constructor(cookie, choices, fingerprinting) {
        this.cookie = cookie;
        this.choices = choices;
        this.fingerprinting = fingerprinting;
    }
    save() {
        const data = Object.fromEntries(Object.entries(this.choices).map(([key, choice]) => [key, Boolean(choice.value)]));
        if (this.fingerprinting && (data.tracking || data.analytics)) {
            const fp = JSON.parse(cookies.get(this.cookie.name) ?? '{}').fingerprint ??
                (this.fingerprinting === true ? uuid() : this.fingerprinting.uuid);
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
}
