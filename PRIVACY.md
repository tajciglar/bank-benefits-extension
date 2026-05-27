# Privacy Policy

**Extension:** Ugodnosti kartic (Bank Card Benefits Notifier)
**Effective date:** 2026-05-27
**Maintainer:** Taj Ciglar
**Source code:** https://github.com/tajciglar/bank-benefits-extension

## Summary

The extension collects no personal data, transmits nothing to any server,
and contains no third-party trackers or analytics.

## What the extension stores

The only thing the extension persists is a list of which bank-card
groupings you have ticked in the popup (for example,
`["OTP Banka", "NLB", "Visa Gold"]`) and your chosen UI language
(`"sl"` or `"en"`).

This data is stored locally in your browser via the
[`chrome.storage.sync`](https://developer.chrome.com/docs/extensions/reference/api/storage)
API. If you are signed into Chrome / Firefox / Edge with sync enabled, your
browser will sync this small object to your own browser-account storage so
your selection follows you across devices. The extension itself does not
operate this sync — your browser does, between you and your browser vendor.

The extension does **not** store:

- Your name, email, phone number, or any account credentials
- Browsing history
- The URLs of pages you visit
- Form data, cookies, or any merchant-page content
- IP address or device identifiers

## What the extension reads

When you load a web page, the extension's content script reads the
**hostname** of the page (for example, `booking.com` or `www.terme-dobrna.si`)
and compares it against a bundled list of merchant domains that have a
matching benefit for the bank cards you ticked.

The hostname is processed entirely inside your browser. It is never
transmitted, logged, or sent to any server — not to a server we operate, not
to a third-party service, not anywhere.

## What the extension transmits

Nothing. The extension has no network code. There are no analytics, no
crash reporting, no telemetry, no remote configuration. The complete benefits
database ships inside the extension package and is updated only when you
install a new version through the official browser stores.

You can verify this by reading the source code at
https://github.com/tajciglar/bank-benefits-extension — the extension is
open source under the MIT license. Searching the codebase for `fetch`,
`XMLHttpRequest`, `WebSocket`, or external URLs will return no results.

## Permissions

The extension requests three permissions, each used only for the purpose
above:

- **`storage`** — to persist your selected banks and language across browser
  sessions.
- **`activeTab`** — to read the current tab's hostname for matching.
- **`<all_urls>` (host permission)** — required because matching can happen
  on any merchant domain. The current catalog spans roughly 150 unique
  domains across 8 banks and 6 Visa/Mastercard tiers, and new merchants are
  added as banks publish them.

## Third parties

The extension uses no third-party services, libraries, or SDKs at runtime.
No data is shared with any third party because no data is collected.

## Children's privacy

The extension is not directed at children and does not knowingly collect
information about anyone, including children under 13.

## Changes to this policy

If this policy changes, the new version will be committed to this file and
the effective date above will be updated. Because the extension collects no
data, material changes are unlikely.

## Contact

Open an issue on the GitHub repository at
https://github.com/tajciglar/bank-benefits-extension/issues
