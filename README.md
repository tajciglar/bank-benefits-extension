# Bank Card Benefits Notifier

Browser extension that notifies you about available discounts when you visit supported websites. Select which bank cards you have, and the extension shows relevant benefits as you browse.

Built for Slovenian bank card users. All UI is in Slovenian.

## Features

- Automatic in-page notifications when visiting a merchant with a discount
- Multi-bank and multi-card-tier support (OTP Banka, NLB, Visa Classic through Infinite)
- One-click discount code copying
- Automatic expiration filtering — expired benefits are hidden without manual cleanup
- Once-per-session notifications (won't nag you on every page load)
- Works on Chrome, Firefox, Edge, Brave, and Opera

## Installation

### Build first

```bash
python3 scripts/build_extension.py
```

This creates `dist/chrome` and `dist/firefox`.

### Chrome / Edge / Brave / Opera

1. Open `chrome://extensions/` (or equivalent for your browser)
2. Enable "Developer mode"
3. Click "Load unpacked" and select the `dist/chrome` folder

### Firefox

1. Open `about:debugging#/runtime/this-firefox`
2. Click "Load Temporary Add-on"
3. Select `dist/firefox/manifest.json`

For a permanent Firefox install, package and sign the add-on via AMO.

### Safari (macOS)

```bash
xcrun safari-web-extension-converter .
```

Then build and run the generated Xcode project.

## Usage

1. Click the extension icon and select your banks/card tiers
2. Browse normally — when you visit a site with a matching benefit, a notification appears in the top-right corner
3. Copy discount codes with one click
4. Click "Preglej vse ugodnosti" in the popup to see all your active benefits

## Current data

| Source | Benefits |
|--------|----------|
| OTP Banka | 29 (scraped from otpbanka.si) |
| NLB | 3 |
| Visa Classic | 9 |
| Visa Gold | 22 |
| Visa Platinum | 24 |
| Visa Signature | 25 |
| Visa Infinite | 25 |
| Visa Business | 11 |

## Adding benefits

Edit `benefits.js`. Each benefit entry:

```javascript
{
  merchant: 'store name',
  domains: ['example.com', 'www.example.com'],
  discount: 'Discount description',
  code: 'DISCOUNTCODE',   // or null
  conditions: 'Terms',
  expires: '2026-12-31',   // ISO date string, or null for no expiry
  link: 'https://...'      // or null
}
```

Visa tier benefits that appear across multiple tiers are defined as shared objects at the top of the file (e.g., `_booking`, `_airalo`) and referenced by each tier array.

### Scraping benefits

The repo includes a Python scraper for extracting benefits from bank websites:

```bash
python3 -m venv .venv && . .venv/bin/activate
pip install -r scripts/requirements.txt
python scripts/scrape_benefits.py --config scripts/sources.json --output scripts/benefits.json
```

See `scripts/sources.example.json` for the config format.

## File structure

```
├── manifest.base.json     # Shared manifest fields
├── manifests/             # Browser-specific overrides (chrome.json, firefox.json)
├── manifest.json          # Stub — not used directly, run the build script
├── background.js          # Service worker / background script
├── benefits.js            # Benefits database
├── content.js             # Content script (notifications on web pages)
├── notification.css       # Notification styles
├── popup.html/css/js      # Extension popup UI
├── scripts/               # Build and scraper tools
├── icons/                 # Extension icons
└── dist/                  # Generated browser builds (gitignored)
```

## Privacy

- No data is sent to external servers
- All data is stored locally in your browser
- No tracking, analytics, or personal data collection

## Contributing

1. Fork the repo
2. Edit `benefits.js` to add/update benefits
3. Run `python3 scripts/build_extension.py` and test in your browser
4. Submit a pull request

## License

[MIT](LICENSE)
