// benefits.js - Database of bank benefits
const BENEFITS_DATABASE = {
  'OTP Banka': [
    {
      merchant: 'bodifit',
      domains: ['bodifit.si', 'www.bodifit.si'],
      discount: '10% popust pri sklenitvi letne naročnine na spletno vadbo BODIFIT Play',
      code: 'OTP10BODIFIT',
      conditions: 'Pri spletnem plačilu. Popust velja le za nove naročnike.',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'hervis',
      domains: ['hervis.si', 'www.hervis.si'],
      discount: '10% popusta',
      code: 'VISAHERVIS',
      conditions: 'Ob nakupu nad 50 EUR v spletni trgovini',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'sportina',
      domains: ['sportina.si', 'www.sportina.si'],
      discount: '15% popusta',
      code: 'VISASPORTINA',
      conditions: 'Pri nakupu v spletni trgovini',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    }
    // Add more OTP benefits here
  ],
  'NLB': [
    // Add NLB benefits here
    {
      merchant: 'example',
      domains: ['example.com'],
      discount: 'Sample discount',
      code: 'NLBCODE',
      conditions: 'Sample conditions',
      link: 'https://www.nlb.si/benefits'
    }
  ],
  'SKB': [
    // Add SKB benefits here
  ],
  'UniCredit': [
    // Add UniCredit benefits here
  ]
  // Add more banks as needed
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = BENEFITS_DATABASE;
}
