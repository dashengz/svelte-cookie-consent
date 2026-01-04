# Svelte Cookie Consent

[![docs](https://img.shields.io/badge/DOCS-8A2BE)](https://svelte-cookie-consent.js.org/)
[![demo](https://img.shields.io/badge/DEMO-8A2BE2)](https://svelte-cookie-consent.js.org/demo/)
[![actions](https://github.com/SebaOfficial/svelte-cookie-consent/actions/workflows/publish.yml/badge.svg)](https://github.com/SebaOfficial/svelte-cookie-consent/actions/workflows/publish.yml) [![SvelteKit](https://img.shields.io/badge/svelte-kit-orange.svg)](https://kit.svelte.dev) [![Svelte v5](https://img.shields.io/badge/svelte-v5-blueviolet.svg)](https://svelte.dev)

A production-ready GDPR compliant cookie consent that allows developers to customize selections.

## Features

- Small, discrete, and non-intrusive;
- GDPR Compliant;
- Support for predefined choices (`necessary`, `marketing`, etc.)
- Multiple consents (box, banner, ...)
- Responsive;
- Runs any function on opting-in or opting-out (_even on each visit_)
- Svelte Ready
- Fully customizable

## Installation

### Via npm

```shell
npm install -D svelte-cookie-consent
```

### Via CDN

```html
<script
   type="module"
   src="https://unpkg.com/svelte-cookie-consent@latest/dist/cookie-consent.js"
></script>
```

## Usage

Check out the [documentation](https://svelte-cookie-consent.js.org) for a list of the available props.

### Svelte / SvelteKit

```svelte
<script lang="ts">
   import { CookieBox } from '$lib/index.js';

   // Optional: define cookie name as a constant for reuse
   const COOKIE_NAME = 'gdpr-cookie';

   const choices = $state({
      necessary: {
         label: 'Necessary cookies',
         description: "Used for cookie control. Can't be turned off.",
         value: true,
         mandatory: true,
      },
      tracking: {
         label: 'Tracking cookies',
         description: 'Used for advertising purposes.',
         value: true,
      },
      analytics: {
         label: 'Analytics cookies',
         description: 'Used to control Analytics.',
         value: true,
      },
      marketing: {
         label: 'Marketing cookies',
         description: 'Used for marketing data.',
         value: true,
      },
   });
</script>

<CookieBox
   cookie={{
      name: COOKIE_NAME,
      path: '/',
      secure: true,
      sameSite: 'strict',
   }}
   heading="GDPR Notice"
   description="We use cookies to offer a better browsing experience, analyze site traffic, personalize content, and serve targeted advertisements. By clicking accept, you consent to our privacy policy & use of cookies."
   acceptAllLabel="Accept All"
   rejectAllLabel="Reject All"
   customize={{
      label: 'Customize',
      chooseLabel: 'Choose Which Cookies To Enable',
      confirmLabel: 'Confirm My Choices',
      showAcceptRejectAllButtons: true,
   }}
   {choices}
/>
```

### HTML / Web Components

```html
<cookie-banner
   heading="GDPR Notice"
   description="We use cookies to offer a better browsing experience, analyze site traffic, personalize content, and serve targeted advertisements. By clicking accept, you consent to our privacy policy & use of cookies."
   acceptAllLabel="Accept All"
   rejectAllLabel="Reject All"
   cookie='{
    "name": "gdpr-cookie",
    "path": "/",
    "secure": true,
    "sameSite": "strict"
   }'
   customize='{
    "label": "Customize",
    "chooseLabel": "Choose Which Cookies To Enable",
    "confirmLabel": "Confirm My Choices"
   }'
></cookie-banner>
```

## Programmatic Control

You can programmatically open the cookie settings modal from anywhere in your application using the `openCookieSettings()` function. This is useful for adding cookie settings links in footers, settings pages, or custom UI elements.

### Basic Example

```svelte
<script lang="ts">
   import { openCookieSettings } from 'svelte-cookie-consent';
</script>

<button onclick={() => openCookieSettings()}> Cookie Settings </button>
```

### Hiding the Default Edit Button

If you want to use only custom triggers, you can hide the default floating edit button:

```svelte
<CookieBox
   editable={true}
   showEditButton={false}
   {/* ...other props */}
/>

<!-- Then trigger from your custom UI -->
<footer>
   <button onclick={() => openCookieSettings()}>
      Manage Cookie Preferences
   </button>
</footer>
```

**Note:** The `editable` prop must be set to `true` (which is the default) for programmatic control to work.

## Understanding the Cookie

The consent cookie stores two types of data:

```json
{
  // User Choices (Booleans)
  "necessary": true,
  "analytics": true,
  "marketing": false,
  ...
  // Fingerprint
  "fingerprint": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
}
```

## Fingerprinting

Generate a unique UUID for server-side analytics (such as CAPI) when users accept specific cookie types. By default, fingerprinting activates when users accept `tracking` or `analytics` cookies.

### Basic Usage

```svelte
<CookieBox fingerprinting={true} />
```

### Custom Configuration

```svelte
<CookieBox
   fingerprinting={{
      enabledBy: ['analytics'], // Only activate for analytics
      uuid: 'custom-identifier', // Optional: provide your own UUID
      cookie: {
         // Optional: store in separate cookie
         name: 'fingerprint', // Consider storing this as a constant for reuse
         path: '/',
         secure: true,
         sameSite: 'strict',
      },
   }}
/>
```

### Retrieving the Fingerprint

Use the same `COOKIE_NAME` constant with `getFingerprint()` in both client and server contexts.

```typescript
import { getFingerprint } from 'svelte-cookie-consent';

const COOKIE_NAME = 'gdpr-cookie';

// Client-side
const userId = getFingerprint(COOKIE_NAME);

// Server-side
const userId = getFingerprint(COOKIE_NAME, { cookies });
```
