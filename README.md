<<<<<<< HEAD
# Bank Card Benefits Notifier Extension

Browser extension that automatically notifies you about available discounts when you visit supported websites. Users can select which banks they have cards from, and the extension will only show relevant benefits.

## Features

- 🔔 **Automatic Notifications**: Get notified when visiting websites with available discounts
- 💳 **Multi-Bank Support**: Select multiple banks and see all your available benefits
- 📋 **One-Click Code Copy**: Easily copy discount codes to clipboard
- 🎨 **Beautiful UI**: Clean, modern interface with smooth animations
- 🌐 **Slovenian Language**: Fully localized for Slovenian users

## Installation

### For Chrome/Edge/Brave

1. Download or clone this repository
2. Open your browser and navigate to:
   - **Chrome**: `chrome://extensions/`
   - **Edge**: `edge://extensions/`
   - **Brave**: `brave://extensions/`

3. Enable "Developer mode" (toggle in top-right corner)
4. Click "Load unpacked"
5. Select the `discount-notifier-extension` folder
6. The extension is now installed! 🎉

### For Firefox

1. Download or clone this repository
2. Navigate to `about:debugging#/runtime/this-firefox`
3. Click "Load Temporary Add-on"
4. Select any file from the `discount-notifier-extension` folder
5. The extension is now installed! 🎉

## Usage

### Initial Setup

1. Click the extension icon in your browser toolbar
2. Select the banks where you have cards from:
   - OTP Banka
   - NLB
   - SKB
   - UniCredit
   - (More banks can be added)

3. Click on any bank to select/deselect it
4. View total available benefits at the bottom

### Getting Notifications

1. Visit any supported website (e.g., bodifit.si, hervis.si, sportina.si)
2. A notification will automatically appear in the top-right corner
3. The notification shows:
   - Bank name
   - Discount details
   - Discount code (if applicable)
   - Conditions/requirements

4. Click "Kopiraj" (Copy) to copy the discount code
5. Use the code during checkout

### Viewing All Benefits

1. Click the extension icon
2. Click "Preglej vse ugodnosti" (View all benefits)
3. See a complete list of all benefits from your selected banks
4. Each benefit shows merchant, discount, code, and conditions

## Adding New Benefits

To add new benefits, edit the `benefits.js` file:

```javascript
const BENEFITS_DATABASE = {
  'OTP Banka': [
    {
      merchant: 'merchant-name',
      domains: ['example.com', 'www.example.com'],
      discount: 'Discount description',
      code: 'DISCOUNTCODE',
      conditions: 'Terms and conditions',
      link: 'https://bank-website.com/benefits'
    },
    // Add more benefits...
  ],
  'Another Bank': [
    // Add benefits for other banks...
  ]
};
```

### Benefit Object Structure

- `merchant`: Name of the merchant/store
- `domains`: Array of domain names where the benefit applies
- `discount`: Description of the discount
- `code`: Discount code (optional)
- `conditions`: Terms and conditions (optional)
- `link`: Link to bank's benefits page (optional)

## File Structure

```
discount-notifier-extension/
├── manifest.json          # Extension configuration
├── background.js          # Service worker
├── benefits.js            # Benefits database
├── content.js            # Content script (runs on web pages)
├── notification.css      # Notification styles
├── popup.html            # Extension popup HTML
├── popup.css             # Extension popup styles
├── popup.js              # Extension popup logic
├── icons/                # Extension icons
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── README.md             # This file
```

## Current Supported Banks

- **OTP Banka**: 3+ benefits (Bodifit, Hervis, Sportina, etc.)
- **NLB**: Ready for benefits to be added
- **SKB**: Ready for benefits to be added
- **UniCredit**: Ready for benefits to be added

## Privacy

- No data is sent to external servers
- All data is stored locally in your browser
- No tracking or analytics
- No personal information is collected

## Browser Compatibility

- ✅ Chrome 88+
- ✅ Edge 88+
- ✅ Brave
- ✅ Firefox 109+
- ✅ Opera

## Contributing

To add benefits for more banks or merchants:

1. Fork this repository
2. Edit `benefits.js` to add new benefits
3. Test the extension
4. Submit a pull request

## Future Enhancements

- [ ] Add more Slovenian banks
- [ ] Support for international banks
- [ ] Benefit expiration tracking
- [ ] Statistics on savings
- [ ] Browser notification support
- [ ] Import/export settings
- [ ] Cloud sync of selected banks

## License

This project is open source and available for personal and commercial use.

## Support

For issues or questions:
- Open an issue on GitHub
- Check existing benefits at bank websites
- Suggest new features

## Credits

Created for Slovenian bank card users to help them save money with available benefits.

---

**Note**: Always verify discount codes on the merchant's website and read the terms and conditions before making a purchase.
=======
# bank-benefits-extension
Browser extension that notifies users about bank card discounts
>>>>>>> 9c7b576f0f5fa3c75004a86c3e0030e5f1de6e23
