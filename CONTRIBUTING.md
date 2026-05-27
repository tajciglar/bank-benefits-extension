# Contributing

Thanks for considering a contribution. This project is small and unopinionated about process — just keep PRs focused and the test script green.

## Three kinds of contribution

### 1. Fix or update a benefit

This is the most common and most useful contribution. Banks rotate their offers, codes change, merchants close. If you see something stale:

1. Open `benefits.js`
2. Find the entry under the relevant bank/tier
3. Update `discount`, `code`, `conditions`, `expires`, or `domains` as needed
4. If a benefit is gone, just delete the entry
5. Rebuild: `python3 scripts/build_extension.py`
6. Sanity check: `node scripts/test_matching.js`
7. Reload the unpacked extension in your browser and confirm
8. PR

If you have a screenshot from the bank's official page showing the current state, attach it to the PR — saves the reviewer from re-verifying.

### 2. Add a new merchant or new bank

#### New merchant for an existing bank

Add an object to the bank's array in `benefits.js`. Use the schema documented in the README. Keep `domains` conservative — only include domains you've actually verified. Empty array `[]` is fine for in-store-only merchants (they won't trigger notifications but will appear in the popup's "all benefits" list).

#### New bank

1. Add a new top-level key in `BENEFITS_DATABASE` (e.g. `'Nova banka': [ … ]`)
2. The popup auto-groups it under "Slovenske banke" by default. To put it under a different group, edit `GROUPS` in `popup.js`
3. If the bank issues both Visa and Mastercard with different benefit lists, consider splitting into multiple keys (e.g. `'Nova Mastercard World'` vs `'Nova Visa Premium'`)

### 3. Improve the extension itself

Bugs, UI improvements, new features, browser-compat fixes — all welcome. A few preferences:

- **No new dependencies** without strong justification. The extension currently has zero JS dependencies, only a Python stdlib build script. Keep it that way unless you have a good reason
- **No telemetry or analytics**, ever — the privacy story in the README is load-bearing
- **System fonts only** in the popup. We deliberately don't bundle webfonts (no FOUT, no bundle weight, no licensing surface)
- **Match the existing style** — the popup intentionally uses an inky-monochrome palette with a single cobalt accent. If you want to redesign, open an issue first to discuss

## Development setup

```bash
git clone https://github.com/<your-fork>/bank-benefits-extension
cd bank-benefits-extension
python3 scripts/build_extension.py
```

Then load `dist/chrome` or `dist/firefox` as an unpacked extension (see README).

For Python-side work (scraping):

```bash
python3 -m venv .venv && source .venv/bin/activate
pip install -r scripts/requirements.txt
```

## Testing

There's no traditional test suite. Two checks worth running:

```bash
node --check benefits.js popup.js content.js background.js
node scripts/test_matching.js
```

The matching test simulates content.js against ~20 real merchant URLs and verifies the expected number of hits. Add new URLs to that script when you add new merchants you want to lock in.

For UI changes, manual browser testing is required. The README covers install in Chrome, Firefox, Edge, Brave, Opera, and Safari.

## PR checklist

Before opening a PR:

- [ ] `python3 scripts/build_extension.py` succeeds
- [ ] `node scripts/test_matching.js` runs clean
- [ ] You've reloaded the extension in at least one browser and verified your change
- [ ] If you touched benefits, the source URL (the bank's official page) is mentioned in the PR description
- [ ] Commit messages are descriptive — squash if you have a lot of WIP commits

## Code style

JavaScript: no formatter enforced, but match the surrounding code. 2-space indent, single quotes, no semicolons-vs-no-semicolons argument — we use them.

CSS: BEM-ish class names, custom properties for color tokens, mobile-first media queries. No preprocessor.

Python: standard library where possible. `requests` and `beautifulsoup4` are the only external deps for the scraper.

## Reporting bugs

Use the issue templates. The most useful info to include:

- Browser + version (e.g. Firefox 122 ESR, Chrome 134)
- Steps to reproduce
- What you expected vs what happened
- Anything from the browser's developer console (F12)

## Reporting wrong/stale benefits

Open an issue using the "Stale benefit" template. Include:

- Which bank + which merchant
- What's wrong (expired? code changed? merchant moved?)
- A link to the bank's official page showing the current state

If you just want to file-and-forget, that's fine — but a PR with the fix gets it to users faster.
