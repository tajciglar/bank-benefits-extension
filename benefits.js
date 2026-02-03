// benefits.js - Database of bank benefits
const BENEFITS_DATABASE = {
  'OTP Banka': [
    {
      merchant: 'comma',
      domains: ['comma.si', 'www.comma.si'],
      discount: '10% popusta vsak torek na novo kolekcijo v trgovinah Comma',
      code: null,
      conditions: 'Popusti veljajo na redne cene, vsak torek; ne veljajo v spletni trgovini; do 28. 2. 2026.',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 's.oliver',
      domains: ['s-oliver.com', 'www.s-oliver.com'],
      discount: '10% popusta vsak torek na novo kolekcijo',
      code: null,
      conditions: 'Popusti veljajo na redne cene; ne veljajo v spletni trgovini; do 28. 2. 2026.',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'bodifit',
      domains: ['bodifit.net', 'www.bodifit.net'],
      discount: '10% popusta na vadbene karte, BODIFIT pakete in letno naročnino na BODIFIT Play',
      code: 'OTP10BODIFIT',
      conditions: 'Pri plačilu s kartico OTP banke; popust ne velja na letno članarino ali mesečne obroke; velja do 28. 2. 2026.',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'malinca',
      domains: ['malinca.si', 'www.malinca.si'],
      discount: '12% popusta na celoten nakup',
      code: 'OTP12',
      conditions: 'Plačilo s kartico OTP banke v spletni trgovini; koda v 2. koraku nakupa; ne velja na stroške dostave in bonov; do 2. 11. 2026.',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'nomago bikes',
      domains: ['nomago.si', 'www.nomago.si'],
      discount: '20 € popusta ob sklenitvi letne članarine',
      code: 'OTPBANKA',
      conditions: 'Plačilo s kartico OTP banke in uporaba kode; do 15. 10. 2026.',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'nomago shuttle',
      domains: ['nomago.si', 'www.nomago.si'],
      discount: '6% popusta na prevoz do letališča',
      code: 'OTPBANKA',
      conditions: 'Plačilo s kartico OTP banke in uporaba kode; do 15. 10. 2026.',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'festival ljubljana',
      domains: ['ljubljanafestival.si', 'www.ljubljanafestival.si'],
      discount: '10% popusta na vstopnice 9. Zimskega festivala',
      code: 'OTP10',
      conditions: 'Plačilo s katerokoli kartico OTP banke in kodo; do 1. 3. 2026; popusti se ne seštevajo.',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'festival lent',
      domains: ['nd-mb.si', 'www.nd-mb.si'],
      discount: '10% popusta na vstopnice Festival Lent',
      code: null,
      conditions: 'Pri spletnem nakupu in plačilu s kartico Visa OTP banke; do 30. 4. 2026.',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'peak sport',
      domains: ['peaksport.si', 'www.peaksport.si'],
      discount: '25% popusta na redne cene',
      code: 'OTPBANKA25',
      conditions: 'Plačilo s kartico OTP banke v spletni trgovini; do 10. 8. 2026.',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'primoz roglic web shop',
      domains: ['primozroglic.com', 'www.primozroglic.com'],
      discount: '20% popusta na izbrane izdelke',
      code: 'OTP20PR',
      conditions: 'Plačilo s kartico OTP banke v spletni trgovini; do 31. 12. 2026.',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'hajdi.si',
      domains: ['hajdi.si', 'www.hajdi.si'],
      discount: '15% popusta na redne cene',
      code: 'OTP15',
      conditions: 'Plačilo s kartico OTP banke; velja tudi v fizičnih trgovinah; do 31. 5. 2026; ne velja na določene izdelke in stroške dostave.',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'optika clarus',
      domains: ['clarus.si', 'www.clarus.si'],
      discount: '10% popusta vsak 1. in 3. sreda v mesecu',
      code: null,
      conditions: 'Plačilo s kartico OTP banke v poslovalnicah; do 28. 2. 2026; ne velja na darilne bone ali spletno trgovino.',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'urban boutique hotel',
      domains: ['secure-hotel-booking.com'],
      discount: '10% popusta na nočitve z zajtrkom',
      code: 'OTP10',
      conditions: 'Rezervacija preko spletne strani in plačilo s kartico OTP banke; do 31. 10. 2026.',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'zumma kids',
      domains: ['zummakids.si', 'www.zummakids.si'],
      discount: '20% popusta na vstopnice (pon–pet)',
      code: null,
      conditions: 'Plačilo s kartico OTP banke; do 1. 7. 2026; ne velja na rojstnodnevne zabave in nekatere storitve.',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'norma bio',
      domains: ['norma.si', 'www.norma.si'],
      discount: '10% vikend popust (pet–ned)',
      code: 'OTP10',
      conditions: 'Plačilo s kartico OTP banke in kodo; do 31. 5. 2026; ne velja za dostavo.',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'l’erboristica e-co',
      domains: ['e-co.si', 'www.e-co.si'],
      discount: '20% popusta na naravno kozmetiko + brezplačna poštnina',
      code: 'OTP20',
      conditions: 'Nakup nad 30 EUR; plačilo s kartico OTP banke; do 28. 2. 2026.',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'spleticna.si',
      domains: ['spleticna.si', 'www.spleticna.si'],
      discount: '10% popusta pri nakupu nad 99 EUR',
      code: 'SPL10-VISA',
      conditions: 'Plačilo s kartico Visa OTP banke; do 31. 12. 2026; ne velja na e-darilne bone in FOREO izdelke.',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'afrodita',
      domains: ['afrodita.eu', 'www.afrodita.eu'],
      discount: '10% popusta na izdelke Afrodita',
      code: 'VISA-AFRODITA10',
      conditions: 'Plačilo s katerokoli Visa OTP kartico; do 31. 12. 2026.',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'nomago young/ISIC',
      domains: ['nomago.si', 'www.nomago.si'],
      discount: '100 € popusta na programe poletnega dela + 2% popusta na Camp California',
      code: 'OTPBANKA',
      conditions: 'Plačilo s kartico OTP banke; do 15. 10. 2026; nekatere storitve se uveljavljajo preko poslovalnic Nomago Travel.',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'amadria park hotels & camps',
      domains: ['amadria-park.com', 'www.amadria-park.com'],
      discount: 'do 15% popusta na nočitve + do 10% popusta na redne cene',
      code: 'AMPVISA',
      conditions: 'Rezervacija preko uradnih strani z uporabo kode; do 31. 12. 2026.',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'airalo',
      domains: ['airalo.com', 'www.airalo.com'],
      discount: '15% popusta na vse eSIM pakete',
      code: 'VISA15-SLO',
      conditions: 'Plačilo s kartico Visa OTP banke; do 31. 12. 2026.',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'travelcentive',
      domains: ['travelcentive.com', 'www.travelcentive.com'],
      discount: '7% popusta na rezervacije potovanj',
      code: null,
      conditions: 'Plačilo s kartico Visa OTP banke; do 31. 12. 2026.',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'nomago travel',
      domains: ['nomago.si', 'www.nomago.si'],
      discount: '10% popusta na vodena potovanja + 100 € popusta za namestitve nad 1000 €',
      code: 'OTPBANKA',
      conditions: 'Plačilo s kartico OTP banke; do 15. 10. 2026; ne velja za Fly&Stay.',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'terme dobrna',
      domains: ['terme-dobrna.si', 'www.terme-dobrna.si'],
      discount: '10% popusta na storitve Masažno-lepotnega centra La Vita',
      code: null,
      conditions: 'Plačilo s kartico Visa OTP banke; do 29. 12. 2026; ne velja na paketne ponudbe.',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'ljubljanski grad',
      domains: ['ljubljanskigrad.si', 'www.ljubljanskigrad.si'],
      discount: '10% popusta na izbrana doživetja',
      code: null,
      conditions: 'Plačilo s kartico Visa OTP banke; do 31. 12. 2026.',
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
