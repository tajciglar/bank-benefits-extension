# Card & Bank benefits / discounts

> A browser extension that quietly tells you when the store you're on offers a discount for the bank cards you actually have.

Built for Slovenian cardholders — covers **8 Slovenian banks** plus universal **Visa and Mastercard tier benefits**, **288 active discounts** in total. UI is in Slovenian. Open source.

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
![Manifest V3](https://img.shields.io/badge/manifest-v3-1d4ed8)
![Benefits](https://img.shields.io/badge/benefits-288-1d4ed8)
![Banks](https://img.shields.io/badge/banks-8-1d4ed8)

---

## Screenshots

<p align="center">
  <img src="screenshots/popup-light.png" alt="Popup in light mode" width="380">
  <img src="screenshots/popup-dark.png" alt="Popup in dark mode" width="380">
</p>

<p align="center">
  <img src="screenshots/notification.png" alt="In-page notification on a merchant site" width="720"><br>
  <em>Notification appears top-right when you land on a merchant with a matching benefit.</em>
</p>

<p align="center">
  <img src="screenshots/modal.png" alt="Full benefits list" width="380"><br>
  <em>"Preglej vse izbrane ugodnosti" — full list grouped by bank.</em>
</p>

---

## Why this exists

I shop online a lot, and I kept catching myself realizing — sometimes hours after checkout, sometimes never — that one of my cards would have given me a discount I'd already paid full price for. Banks publish these benefits, but never push them at the moment they actually matter. Bank statements aren't reminders. Newsletters aren't reminders. The discount only matters at checkout, on the merchant's page.

So I built a thing that fires there.

## What it does

Slovenian bank benefits are scattered across PDFs, microsites, and partner pages. Most cardholders forget which discounts they're entitled to. This extension closes that gap:

- You pick which banks/cards you hold once
- It quietly watches the URL bar
- When you land on a merchant that offers you a discount, a small notification appears in the corner with the code (if any), the conditions, and a one-click copy button

That's it. No accounts, no telemetry, no remote calls — the entire benefits database ships with the extension.

## Supported banks & card tiers

| Source                       | Active benefits |
| ---------------------------- | --------------: |
| OTP Banka                    | 29              |
| NLB                          | 24              |
| Delavska hranilnica          | 15              |
| BKS Bank *(tier-aware)*      | 11              |
| Intesa Sanpaolo              | 3               |
| Addiko Bank                  | 1               |
| Sparkasse / Diners D-TOREK   | 27              |
| Gorenjska banka              | 1               |
| Visa Classic                 | 9               |
| Visa Gold                    | 22              |
| Visa Platinum                | 24              |
| Visa Signature               | 25              |
| Visa Infinite                | 25              |
| Visa Business                | 11              |
| Mastercard World             | 30              |
| Mastercard World Elite       | 31              |
| **Total**                    | **288**         |

Most data is scraped directly from the issuing banks' public benefit pages. The scraping config lives in `scripts/` so anyone can re-run or extend it.

## Install

You need Python 3 once to run the build script.

```bash
python3 scripts/build_extension.py
```

This produces `dist/chrome/` and `dist/firefox/` — drop-in unpacked builds.

### Chrome / Edge / Brave / Opera

1. Open `chrome://extensions/`
2. Enable **Developer mode** (top right)
3. **Load unpacked** → pick `dist/chrome`
4. Pin the extension icon to your toolbar

### Firefox

1. Open `about:debugging#/runtime/this-firefox`
2. **Load Temporary Add-on…** → pick `dist/firefox/manifest.json`

For a persistent Firefox install you'd need to sign the package via [AMO](https://addons.mozilla.org).

### Safari (macOS)

```bash
xcrun safari-web-extension-converter dist/chrome
```

Builds an Xcode project — open it, build, and enable the extension in Safari's preferences.

## Usage

1. Click the toolbar icon → tick the banks/cards you hold
2. Browse normally. If you land on a merchant with a matching deal, a notification appears top-right with the discount, code, and conditions
3. Click **"Preglej vse izbrane ugodnosti"** in the popup to see the full list of deals available to you

## How it works

```
┌─────────────────────────┐         ┌─────────────────────────┐
│ benefits.js             │         │ popup.html / popup.css  │
│ ──────────              │         │ ────────────────        │
│ const BENEFITS_DATABASE │         │ Bank picker UI          │
│ = {                     │         │ Modal with full list    │
│   'OTP Banka': [ … ],   │         └──────────┬──────────────┘
│   'NLB': [ … ],         │                    │
│   …                     │                    ▼
│ }                       │         ┌─────────────────────────┐
└──────────┬──────────────┘         │ chrome.storage.sync     │
           │                        │ selectedBanks: [ … ]    │
           ▼                        └──────────┬──────────────┘
┌─────────────────────────┐                    │
│ background.js           │◀───── getBenefits ─┤
│ (SW on Chrome,          │                    │
│  bg page on Firefox)    │                    ▼
└──────────┬──────────────┘         ┌─────────────────────────┐
           │                        │ content.js              │
           └──── BENEFITS ─────────▶│ ────────────            │
                                    │ matches URL → injects   │
                                    │ notification top-right  │
                                    └─────────────────────────┘
```

Matching is purely client-side — domain string comparison against the `domains: []` array on each benefit, with subdomain support (`*.afrodita.eu`). Expired benefits are filtered out at runtime by ISO date comparison.

## Project structure

```
├── manifest.base.json        Shared MV3 fields
├── manifests/
│   ├── chrome.json           Chrome MV3 overrides (service_worker)
│   └── firefox.json          Firefox MV3 overrides (background.scripts)
├── background.js             Message bridge between popup and content script
├── benefits.js               The benefits database (single source of truth)
├── content.js                Runs on every page; matches URL → shows notification
├── notification.css          In-page notification styles
├── popup.{html,css,js}       Extension popup UI
├── scripts/
│   ├── build_extension.py    Merges base + per-browser manifest, copies files into dist/
│   ├── scrape_benefits.py    Scraper for new bank benefit pages
│   ├── merge_scraped_benefits.py  Merge scraper JSON output into benefits.js
│   ├── apply_to_benefits.py  Splice generated sections into benefits.js
│   └── test_matching.js      Node script — domain matcher regression check
├── icons/                    Extension icons (16, 48, 128 px)
└── dist/                     Generated browser bundles (gitignored)
```

The reason we split the manifest per browser: Chrome MV3 wants `background.service_worker`, Firefox MV3 wants `background.scripts`. The build script merges `manifest.base.json` with the per-browser override file.

## Adding a new benefit

Edit `benefits.js` and add an entry to the appropriate bank/tier array:

```js
{
  merchant: 'store name',
  domains: ['example.com', 'www.example.com'],
  discount: 'Discount description (Slovenian)',
  code: 'DISCOUNTCODE',   // or null
  conditions: 'Terms (Slovenian)',  // or null
  expires: '2026-12-31',   // ISO date, or null for no expiry
  link: 'https://issuing-bank.example/benefits-page'  // or null
}
```

For Visa tier benefits that apply across multiple tiers (e.g. Booking.com appears in Classic/Gold/Platinum/…), define a shared object at the top of `benefits.js` (e.g. `_booking`) and reference it from each tier array. Same for Mastercard tiers.

Then:

```bash
python3 scripts/build_extension.py
node scripts/test_matching.js     # regression check
```

Reload the unpacked extension in your browser to test.

## Scraping new banks

The repo includes a Python scraper for extracting benefits from bank websites:

```bash
python3 -m venv .venv && source .venv/bin/activate
pip install -r scripts/requirements.txt
python scripts/scrape_benefits.py --config scripts/sources.json --output scripts/benefits.json
```

See `scripts/sources.example.json` for the config format.

For SPA / JS-rendered pages (most modern bank sites), use Playwright. The agents that scraped the existing data used `mcp__plugin_playwright_playwright__browser_navigate` — any Playwright-equivalent will work.

## Privacy

- **No data is sent anywhere.** The matching happens entirely in your browser
- **No accounts, no telemetry, no analytics.** The extension has no remote dependencies
- **`storage.sync`** is the only thing the extension writes to — and it only stores which banks you ticked. Sync only happens to your own browser-account storage (Chrome/Firefox/Edge accounts) if you have it enabled
- **`<all_urls>`** is requested because the extension needs to read the current tab's URL to check for matches. The URL is never transmitted

## Roadmap

The data is the hardest part to keep accurate — Slovenian banks rotate codes and partners on no fixed schedule, so a manual database goes stale fast. Most of the roadmap is about reducing that gap.

- **Scheduled auto-scraping** — GitHub Actions workflow that re-runs the scrapers weekly, opens a PR with the diff, and a human reviews. Today the scrapers are run by hand.
- **Stale-benefit detection** — flag benefits whose `expires` date is approaching or has passed, and benefits the live bank page no longer mentions. Surfaces what needs human attention without scraping the whole world.
- **In-extension "report wrong benefit" link** — one click on a notification opens a pre-filled GitHub issue. Lowers the friction for non-technical users to help.
- **More banks** — anywhere a Slovenian bank publishes a public benefits page, it can be added. Open to PRs that bring in regional banks I missed (Sberbank reborn, hranilnice, n26-Slovenia, etc.).
- **European neobank coverage** — Revolut, N26, Wise, Bunq. Most of these hide their merchant offers behind the app, which makes scraping non-trivial; tracking it as a future direction rather than a near-term commitment.
- **Chrome Web Store / Firefox AMO listings** — currently install is "load unpacked." Store listings make this usable for non-technical Slovenians.
- **Notification UX** — show "you'd also save with [other card] if you had it" hints, gentle nudges for cards the user *doesn't* hold but where the discount is large.
- **Localization** — UI is Slovenian-only. English would open the extension to Slovenian-banking expats. Lower priority since the data is inherently Slovenia-bound.

If any of these resonate, open an issue — happy to discuss approach before someone sinks time into a PR.

## Contributing

PRs welcome — see [CONTRIBUTING.md](CONTRIBUTING.md). The easiest contribution: notice an out-of-date benefit (expired, code changed, new merchant), open a PR with the fix.

## License

[MIT](LICENSE)
