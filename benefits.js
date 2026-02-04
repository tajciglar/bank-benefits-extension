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
      merchant: "l'erboristica e-co",
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
    {
      merchant: 'nordijski center planica',
      domains: ['nc-planica.si', 'www.nc-planica.si'],
      discount: '50% popusta za tek na smučeh v podzemnem tunelu (poleti) ali 10% popusta za tek zunaj (pozimi)',
      code: null,
      conditions: 'Samo za imetnike NLB Mastercard; samo za dnevne vstopnice; nakup na blagajni NC Planica; 20% popust za invalide in osebe s posebnimi potrebami na muzej in sedežnico.',
      link: 'https://www.nc-planica.si/'
    },
    {
      merchant: 'ljubljanski maraton',
      domains: ['registration.ljubljanskimaraton.si'],
      discount: '5 € popusta na štartnino',
      code: null,
      conditions: 'Plačilo z NLB plačilno kartico.',
      link: 'https://registration.ljubljanskimaraton.si/si/celotna-ponudba.html'
    },
    {
      merchant: 'cedevita olimpija',
      domains: ['vstopnice.olimpija.com'],
      discount: '20% popusta na vstopnice',
      code: 'OLI20',
      conditions: 'Ekskluzivno za NLB stranke; uporaba kode OLI20 pri nakupu.',
      link: 'https://vstopnice.olimpija.com/cedevitaolimpija/si/isci/?country=SVN&lang=si'
    },
    {
      merchant: 'sašo avsenik z ansamblom',
      domains: ['eventim.si', 'www.eventim.si'],
      discount: '10% popusta na vstopnice',
      code: null,
      conditions: 'Koncert 20. 12. 2025 v Areni Stožice; omejeno na 200 kart na sektor; ob nakupu izbrati "Imetniki kartic NLB".',
      link: 'https://www.eventim.si/event/ansambel-sasa-avsenika-dvorana-stozice-20209613/'
    }
  ],
  'SKB': [
    // Add SKB benefits here
  ],
  'UniCredit': [
    // Add UniCredit benefits here
  ],
    'Visa Classic': [
      {
        merchant: 'booking.com',
        domains: ['booking.com', 'www.booking.com'],
        discount: '4% povračilo kot dobroimetje v Booking.com denarnico',
        code: null,
        conditions: 'Rezervacija in plačilo med 01.02.2026 in 30.06.2026; bivanje med 01.02.2026 in 30.06.2026; uporaba posebne povezave: https://www.booking.com/gating/authkey?aid=8131429&key=Z6WIcn10Ll; dobroimetje se nakaže 64 dni po bivanju; maksimalno 200 EUR na rezervacijo; ne velja za predplačniške kartice za enkratno uporabo; ne velja za odpovedane rezervacije; izbrati "Plačaj zdaj" ali "Plačaj pozneje Booking.com".',
        link: 'https://www.booking.com/gating/authkey?aid=8131429&key=Z6WIcn10Ll'
      },
      {
        merchant: 'amadria park',
        domains: ['amadriapark.com', 'www.amadriapark.com'],
        discount: '15% popusta na Flexible cene za nočitev in zajtrk + do 10% na ostale redne cene',
        code: 'AMPVISA',
        conditions: 'Rezervacija preko uradnih spletnih strani; velja za hotele v Opatiji, Šibeniku in Zagrebu; velja med 01.05.2025 in 31.12.2026.',
        link: 'https://www.amadriapark.com/hotel_category/all/'
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
        merchant: 'spleticna.si',
        domains: ['spleticna.si', 'www.spleticna.si'],
        discount: '10% popusta pri nakupu nad 99 EUR',
        code: 'SPL10-VISA',
        conditions: 'Velja do 31.12.2026; več kot 400 blagovnih znamk kozmetike.',
        link: 'https://www.spleticna.si'
      },
      {
        merchant: 'travelcentive',
        domains: ['travelcentive.com', 'www.travelcentive.com'],
        discount: '7% popusta na rezervacije potovanj in letov',
        code: null,
        conditions: 'Popust se samodejno uporabi; velja od 01.12.2025 do 31.12.2026.',
        link: 'https://www.travelcentive.com'
      },
      {
        merchant: 'ljubljanski grad',
        domains: ['ljubljanskigrad.si', 'www.ljubljanskigrad.si'],
        discount: '10% popusta na izbrana doživetja (Časovni stroj)',
        code: null,
        conditions: 'Rezervacija najmanj 5 delovnih dni vnaprej na 01 232 99 94, 041 732 654 ali virtualni-grad@ljubljanskigrad.si; velja do 31.12.2026.',
        link: 'https://www.ljubljanskigrad.si/sl/izberi-dozivetje/casovni-stroj/'
      },
      {
        merchant: 'airalo',
        domains: ['airalo.com', 'www.airalo.com'],
        discount: '15% popusta na vse eSIM pakete',
        code: 'VISA15-SLO',
        conditions: 'Velja od 02.01.2025 do 31.12.2026; dostop do rešitev povezljivosti v več kot 200 državah in regijah.',
        link: 'https://www.airalo.com'
      },
      {
        merchant: 'terme dobrna',
        domains: ['terme-dobrna.si', 'www.terme-dobrna.si'],
        discount: '20% popusta na bivanje s polpenzionom',
        code: 'VISA20',
        conditions: 'Rezervacija preko tel. 080 22 10 ali 03 78 08 110 ali info@terme-dobrna.si ali www.terme-dobrna.si z kodo VISA20; minimalno bivanje 2 noči; plačilo z Visa kartico; popusti se ne seštevajo; velja do 30.12.2026.',
        link: 'https://www.terme-dobrna.si'
      },
     
    ],
    'Visa Gold': [
      {
        merchant: 'booking.com',
        domains: ['booking.com', 'www.booking.com'],
        discount: '4% povračilo kot dobroimetje v Booking.com denarnico',
        code: null,
        conditions: 'Rezervacija in plačilo med 01.02.2026 in 30.06.2026; bivanje med 01.02.2026 in 30.06.2026; uporaba posebne povezave: https://www.booking.com/gating/authkey?aid=8131429&key=Z6WIcn10Ll; dobroimetje se nakaže 64 dni po bivanju; maksimalno 200 EUR na rezervacijo; ne velja za predplačniške kartice za enkratno uporabo; ne velja za odpovedane rezervacije; izbrati "Plačaj zdaj" ali "Plačaj pozneje Booking.com".',
        link: 'https://www.booking.com/gating/authkey?aid=8131429&key=Z6WIcn10Ll'
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
        merchant: 'avis',
        domains: ['avisworld.com', 'www.avisworld.com'],
        discount: 'Do 20% popusta + brezplačna nadgradnja + Avis Preferred Plus membership (brezplačno)',
        code: null,
        conditions: 'Rezervacija neposredno na Visa (avisworld.com); velja od 01.01.2022 do 31.12.2026.',
        link: 'https://www.avisworld.com'
      },
      {
        merchant: 'airalo',
        domains: ['airalo.com', 'www.airalo.com'],
        discount: '15% popusta na vse eSIM pakete',
        code: 'VISA15-SLO',
        conditions: 'Velja od 02.01.2025 do 31.12.2026; dostop do rešitev povezljivosti v več kot 200 državah in regijah.',
        link: 'https://www.airalo.com'
      },
      {
        merchant: 'terme dobrna',
        domains: ['terme-dobrna.si', 'www.terme-dobrna.si'],
        discount: '20% popusta na bivanje s polpenzionom',
        code: 'VISA20',
        conditions: 'Rezervacija preko tel. 080 22 10 ali 03 78 08 110 ali info@terme-dobrna.si ali www.terme-dobrna.si z kodo VISA20; minimalno bivanje 2 noči; plačilo z Visa kartico; popusti se ne seštevajo; velja do 30.12.2026.',
        link: 'https://www.terme-dobrna.si'
      },
      {
        merchant: 'terme dobrna - spa storitve',
        domains: ['terme-dobrna.si', 'www.terme-dobrna.si'],
        discount: '10% popusta na storitve Masažno-lepotnega centra La Vita',
        code: null,
        conditions: 'Velja na masaže, lepotne tretmaje obraza, dlani in stopal, depilacije, maderoterapijo, nego telesa, tretmaje trepalnic in obrvi ter ličenje; ne velja na paketne in akcijske ponudbe; velja do 29.12.2026.',
        link: 'https://www.terme-dobrna.si'
      },
      {
        merchant: 'ljubljanski grad',
        domains: ['ljubljanskigrad.si', 'www.ljubljanskigrad.si'],
        discount: '10% popusta na izbrana doživetja (Časovni stroj)',
        code: null,
        conditions: 'Rezervacija najmanj 5 delovnih dni vnaprej na 01 232 99 94, 041 732 654 ali virtualni-grad@ljubljanskigrad.si; velja do 31.12.2026.',
        link: 'https://www.ljubljanskigrad.si/sl/izberi-dozivetje/casovni-stroj/'
      },
      {
        merchant: 'amadria park',
        domains: ['amadriapark.com', 'www.amadriapark.com'],
        discount: '15% popusta na Flexible cene za nočitev in zajtrk + do 10% na ostale redne cene',
        code: 'AMPVISA',
        conditions: 'Rezervacija preko uradnih spletnih strani; velja za hotele v Opatiji, Šibeniku in Zagrebu; velja med 01.05.2025 in 31.12.2026.',
        link: 'https://www.amadriapark.com/hotel_category/all/'
      },
      {
        merchant: 'cukrarna gallery',
        domains: ['cukrarna.org', 'www.cukrarna.org'],
        discount: '10% popusta na vse izdelke iz kolekcije Cukrarna',
        code: null,
        conditions: 'Velja v spletni in fizični trgovini na recepciji galerije; oblikovalski izdelki, umetniški katalogi in spominki; velja od 30.11.2025 do 03.05.2026.',
        link: 'https://www.cukrarna.org'
      },
      {
        merchant: 'spleticna.si',
        domains: ['spleticna.si', 'www.spleticna.si'],
        discount: '10% popusta pri nakupu nad 99 EUR',
        code: 'SPL10-VISA',
        conditions: 'Velja do 31.12.2026; več kot 400 blagovnih znamk kozmetike.',
        link: 'https://www.spleticna.si'
      },
      {
        merchant: 'travelcentive',
        domains: ['travelcentive.com', 'www.travelcentive.com'],
        discount: '7% popusta na rezervacije potovanj in letov',
        code: null,
        conditions: 'Popust se samodejno uporabi; velja od 01.12.2025 do 31.12.2026.',
        link: 'https://www.travelcentive.com'
      },
      {
        merchant: 'rimske terme',
        domains: ['rimske-terme.si', 'www.rimske-terme.si'],
        discount: '30% popusta na LUX PAKET',
        code: null,
        conditions: 'Rezervacija preko tel. 03 574 2000, 03 574 2011 ali booking@rimske-terme.si; luksuzna nastanitev z izbranimi storitvami; velja do 31.12.2026.',
        link: 'https://www.rimske-terme.si'
      },
      {
        merchant: 'visa concierge',
        domains: ['visa.com.ua', 'www.visa.com.ua', 'visa.com'],
        discount: '24/7 asistenčna služba',
        code: null,
        conditions: 'Rezervacije hotelov, restavracij, najem vozil, potovalno svetovanje.',
        link: null
      },
      {
        merchant: 'purchase protection',
        domains: [],
        discount: 'Zaščita nakupov',
        code: null,
        conditions: 'Kritje za poškodovano ali ukradeno blago.',
        link: null
      }
    ],
    'Visa Platinum': [
      {
        merchant: 'booking.com',
        domains: ['booking.com', 'www.booking.com'],
        discount: '4% povračilo kot dobroimetje v Booking.com denarnico',
        code: null,
        conditions: 'Rezervacija in plačilo med 01.02.2026 in 30.06.2026; bivanje med 01.02.2026 in 30.06.2026; uporaba posebne povezave: https://www.booking.com/gating/authkey?aid=8131429&key=Z6WIcn10Ll; dobroimetje se nakaže 64 dni po bivanju; maksimalno 200 EUR na rezervacijo; ne velja za predplačniške kartice za enkratno uporabo; ne velja za odpovedane rezervacije; izbrati "Plačaj zdaj" ali "Plačaj pozneje Booking.com".',
        link: 'https://www.booking.com/gating/authkey?aid=8131429&key=Z6WIcn10Ll'
      },
      {
        merchant: 'avis',
        domains: ['avisworld.com', 'www.avisworld.com'],
        discount: 'Do 20% popusta + brezplačna nadgradnja + Avis Preferred Plus membership (brezplačno)',
        code: null,
        conditions: 'Rezervacija neposredno na Visa (avisworld.com); velja od 01.01.2022 do 31.12.2026.',
        link: 'https://www.avisworld.com'
      },
      {
        merchant: 'airalo',
        domains: ['airalo.com', 'www.airalo.com'],
        discount: '15% popusta na vse eSIM pakete',
        code: 'VISA15-SLO',
        conditions: 'Velja od 02.01.2025 do 31.12.2026; dostop do rešitev povezljivosti v več kot 200 državah in regijah.',
        link: 'https://www.airalo.com'
      },
      {
        merchant: 'terme dobrna',
        domains: ['terme-dobrna.si', 'www.terme-dobrna.si'],
        discount: '20% popusta na bivanje s polpenzionom',
        code: 'VISA20',
        conditions: 'Rezervacija preko tel. 080 22 10 ali 03 78 08 110 ali info@terme-dobrna.si ali www.terme-dobrna.si z kodo VISA20; minimalno bivanje 2 noči; plačilo z Visa kartico; popusti se ne seštevajo; velja do 30.12.2026.',
        link: 'https://www.terme-dobrna.si'
      },
      {
        merchant: 'terme dobrna - spa storitve',
        domains: ['terme-dobrna.si', 'www.terme-dobrna.si'],
        discount: '10% popusta na storitve Masažno-lepotnega centra La Vita',
        code: null,
        conditions: 'Velja na masaže, lepotne tretmaje obraza, dlani in stopal, depilacije, maderoterapijo, nego telesa, tretmaje trepalnic in obrvi ter ličenje; ne velja na paketne in akcijske ponudbe; velja do 29.12.2026.',
        link: 'https://www.terme-dobrna.si'
      },
      {
        merchant: 'ljubljanski grad',
        domains: ['ljubljanskigrad.si', 'www.ljubljanskigrad.si'],
        discount: '10% popusta na izbrana doživetja (Časovni stroj)',
        code: null,
        conditions: 'Rezervacija najmanj 5 delovnih dni vnaprej na 01 232 99 94, 041 732 654 ali virtualni-grad@ljubljanskigrad.si; velja do 31.12.2026.',
        link: 'https://www.ljubljanskigrad.si/sl/izberi-dozivetje/casovni-stroj/'
      },
      {
        merchant: 'amadria park',
        domains: ['amadriapark.com', 'www.amadriapark.com'],
        discount: '15% popusta na Flexible cene za nočitev in zajtrk + do 10% na ostale redne cene',
        code: 'AMPVISA',
        conditions: 'Rezervacija preko uradnih spletnih strani; velja za hotele v Opatiji, Šibeniku in Zagrebu; velja med 01.05.2025 in 31.12.2026.',
        link: 'https://www.amadriapark.com/hotel_category/all/'
      },
      {
        merchant: 'cukrarna gallery',
        domains: ['cukrarna.org', 'www.cukrarna.org'],
        discount: '10% popusta na vse izdelke iz kolekcije Cukrarna',
        code: null,
        conditions: 'Velja v spletni in fizični trgovini na recepciji galerije; oblikovalski izdelki, umetniški katalogi in spominki; velja od 30.11.2025 do 03.05.2026.',
        link: 'https://www.cukrarna.org'
      },
      {
        merchant: 'spleticna.si',
        domains: ['spleticna.si', 'www.spleticna.si'],
        discount: '10% popusta pri nakupu nad 99 EUR',
        code: 'SPL10-VISA',
        conditions: 'Velja do 31.12.2026; več kot 400 blagovnih znamk kozmetike.',
        link: 'https://www.spleticna.si'
      },
      {
        merchant: 'travelcentive',
        domains: ['travelcentive.com', 'www.travelcentive.com'],
        discount: '7% popusta na rezervacije potovanj in letov',
        code: null,
        conditions: 'Popust se samodejno uporabi; velja od 01.12.2025 do 31.12.2026.',
        link: 'https://www.travelcentive.com'
      },
      {
        merchant: 'rimske terme',
        domains: ['rimske-terme.si', 'www.rimske-terme.si'],
        discount: '30% popusta na LUX PAKET',
        code: null,
        conditions: 'Rezervacija preko tel. 03 574 2000, 03 574 2011 ali booking@rimske-terme.si; luksuzna nastanitev z izbranimi storitvami; velja do 31.12.2026.',
        link: 'https://www.rimske-terme.si'
      },
      {
        merchant: 'airport lounges worldwide',
        domains: ['dragonpass.com', 'loungekey.com'],
        discount: 'Dostop do poslovnih salonov na letališčih - 2x letno',
        code: null,
        conditions: 'Velja do 30. 9. 2026.',
        link: 'https://www.visa.com.ua/en_UA/pay-with-visa/promotions/airport-lounge-access.html'
      },
      {
        merchant: 'visa concierge',
        domains: [],
        discount: '24/7 asistenčna služba',
        code: null,
        conditions: 'Rezervacije hotelov, restavracij, najem vozil, potovalno svetovanje.',
        link: null
      },
      {
        merchant: 'fast track services',
        domains: [],
        discount: 'Hitrejši prehod varnostnih kontrol na letališčih',
        code: null,
        conditions: 'Dostopno na izbranih mednarodnih letališčih.',
        link: null
      },
      {
        merchant: 'extended warranty',
        domains: [],
        discount: 'Podaljšano jamstvo na nakupe',
        code: null,
        conditions: 'Dodatno leto jamstva na izdelke.',
        link: null
      },
      {
        merchant: 'purchase protection',
        domains: [],
        discount: 'Zaščita nakupov',
        code: null,
        conditions: 'Kritje za poškodovano ali ukradeno blago.',
        link: null
      }
    ],
    'Visa Signature': [
      {
        merchant: 'booking.com',
        domains: ['booking.com', 'www.booking.com'],
        discount: '4% povračilo kot dobroimetje v Booking.com denarnico',
        code: null,
        conditions: 'Rezervacija in plačilo med 01.02.2026 in 30.06.2026; bivanje med 01.02.2026 in 30.06.2026; uporaba posebne povezave: https://www.booking.com/gating/authkey?aid=8131429&key=Z6WIcn10Ll; dobroimetje se nakaže 64 dni po bivanju; maksimalno 200 EUR na rezervacijo; ne velja za predplačniške kartice za enkratno uporabo; ne velja za odpovedane rezervacije; izbrati "Plačaj zdaj" ali "Plačaj pozneje Booking.com".',
        link: 'https://www.booking.com/gating/authkey?aid=8131429&key=Z6WIcn10Ll'
      },
      {
        merchant: 'avis',
        domains: ['avisworld.com', 'www.avisworld.com'],
        discount: 'Do 20% popusta + brezplačna nadgradnja + Avis Preferred Plus membership (brezplačno)',
        code: null,
        conditions: 'Rezervacija neposredno na Visa (avisworld.com); velja od 01.01.2022 do 31.12.2026.',
        link: 'https://www.avisworld.com'
      },
      {
        merchant: 'airalo',
        domains: ['airalo.com', 'www.airalo.com'],
        discount: '15% popusta na vse eSIM pakete',
        code: 'VISA15-SLO',
        conditions: 'Velja od 02.01.2025 do 31.12.2026; dostop do rešitev povezljivosti v več kot 200 državah in regijah.',
        link: 'https://www.airalo.com'
      },
      {
        merchant: 'terme dobrna',
        domains: ['terme-dobrna.si', 'www.terme-dobrna.si'],
        discount: '20% popusta na bivanje s polpenzionom',
        code: 'VISA20',
        conditions: 'Rezervacija preko tel. 080 22 10 ali 03 78 08 110 ali info@terme-dobrna.si ali www.terme-dobrna.si z kodo VISA20; minimalno bivanje 2 noči; plačilo z Visa kartico; popusti se ne seštevajo; velja do 30.12.2026.',
        link: 'https://www.terme-dobrna.si'
      },
      {
        merchant: 'terme dobrna - spa storitve',
        domains: ['terme-dobrna.si', 'www.terme-dobrna.si'],
        discount: '10% popusta na storitve Masažno-lepotnega centra La Vita',
        code: null,
        conditions: 'Velja na masaže, lepotne tretmaje obraza, dlani in stopal, depilacije, maderoterapijo, nego telesa, tretmaje trepalnic in obrvi ter ličenje; ne velja na paketne in akcijske ponudbe; velja do 29.12.2026.',
        link: 'https://www.terme-dobrna.si'
      },
      {
        merchant: 'ljubljanski grad',
        domains: ['ljubljanskigrad.si', 'www.ljubljanskigrad.si'],
        discount: '10% popusta na izbrana doživetja (Časovni stroj)',
        code: null,
        conditions: 'Rezervacija najmanj 5 delovnih dni vnaprej na 01 232 99 94, 041 732 654 ali virtualni-grad@ljubljanskigrad.si; velja do 31.12.2026.',
        link: 'https://www.ljubljanskigrad.si/sl/izberi-dozivetje/casovni-stroj/'
      },
      {
        merchant: 'amadria park',
        domains: ['amadriapark.com', 'www.amadriapark.com'],
        discount: '15% popusta na Flexible cene za nočitev in zajtrk + do 10% na ostale redne cene',
        code: 'AMPVISA',
        conditions: 'Rezervacija preko uradnih spletnih strani; velja za hotele v Opatiji, Šibeniku in Zagrebu; velja med 01.05.2025 in 31.12.2026.',
        link: 'https://www.amadriapark.com/hotel_category/all/'
      },
      {
        merchant: 'cukrarna gallery',
        domains: ['cukrarna.org', 'www.cukrarna.org'],
        discount: '10% popusta na vse izdelke iz kolekcije Cukrarna',
        code: null,
        conditions: 'Velja v spletni in fizični trgovini na recepciji galerije; oblikovalski izdelki, umetniški katalogi in spominki; velja od 30.11.2025 do 03.05.2026.',
        link: 'https://www.cukrarna.org'
      },
      {
        merchant: 'spleticna.si',
        domains: ['spleticna.si', 'www.spleticna.si'],
        discount: '10% popusta pri nakupu nad 99 EUR',
        code: 'SPL10-VISA',
        conditions: 'Velja do 31.12.2026; več kot 400 blagovnih znamk kozmetike.',
        link: 'https://www.spleticna.si'
      },
      {
        merchant: 'travelcentive',
        domains: ['travelcentive.com', 'www.travelcentive.com'],
        discount: '7% popusta na rezervacije potovanj in letov',
        code: null,
        conditions: 'Popust se samodejno uporabi; velja od 01.12.2025 do 31.12.2026.',
        link: 'https://www.travelcentive.com'
      },
      {
        merchant: 'rimske terme',
        domains: ['rimske-terme.si', 'www.rimske-terme.si'],
        discount: '30% popusta na LUX PAKET',
        code: null,
        conditions: 'Rezervacija preko tel. 03 574 2000, 03 574 2011 ali booking@rimske-terme.si; luksuzna nastanitev z izbranimi storitvami; velja do 31.12.2026.',
        link: 'https://www.rimske-terme.si'
      },
      {
        merchant: 'airport lounges worldwide',
        domains: ['dragonpass.com', 'loungekey.com'],
        discount: 'Dostop do poslovnih salonov na letališčih - 10x letno',
        code: null,
        conditions: 'Velja do 30. 9. 2026.',
        link: 'https://www.visa.com.ua/en_UA/pay-with-visa/promotions/airport-lounge-access.html'
      },
      {
        merchant: 'visa concierge',
        domains: [],
        discount: '24/7 asistenčna služba',
        code: null,
        conditions: 'Rezervacije hotelov, restavracij, najem vozil, potovalno svetovanje.',
        link: null
      },
      {
        merchant: 'travel insurance',
        domains: [],
        discount: 'Potovalno zavarovanje',
        code: null,
        conditions: 'Do 750.000 USD kritja; zavarovanje za zamude letov, izgubljeno prtljago.',
        link: null
      },
      {
        merchant: 'fast track services',
        domains: [],
        discount: 'Hitrejši prehod varnostnih kontrol na letališčih',
        code: null,
        conditions: 'Dostopno na izbranih mednarodnih letališčih.',
        link: null
      },
      {
        merchant: 'extended warranty',
        domains: [],
        discount: 'Podaljšano jamstvo na nakupe',
        code: null,
        conditions: 'Dodatno leto jamstva na izdelke.',
        link: null
      },
      {
        merchant: 'purchase protection',
        domains: [],
        discount: 'Zaščita nakupov',
        code: null,
        conditions: 'Kritje za poškodovano ali ukradeno blago.',
        link: null
      }
    ],
    'Visa Infinite': [
      {
        merchant: 'booking.com',
        domains: ['booking.com', 'www.booking.com'],
        discount: '4% povračilo kot dobroimetje v Booking.com denarnico',
        code: null,
        conditions: 'Rezervacija in plačilo med 01.02.2026 in 30.06.2026; bivanje med 01.02.2026 in 30.06.2026; uporaba posebne povezave: https://www.booking.com/gating/authkey?aid=8131429&key=Z6WIcn10Ll; dobroimetje se nakaže 64 dni po bivanju; maksimalno 200 EUR na rezervacijo; ne velja za predplačniške kartice za enkratno uporabo; ne velja za odpovedane rezervacije; izbrati "Plačaj zdaj" ali "Plačaj pozneje Booking.com".',
        link: 'https://www.booking.com/gating/authkey?aid=8131429&key=Z6WIcn10Ll'
      },
      {
        merchant: 'avis',
        domains: ['avisworld.com', 'www.avisworld.com'],
        discount: 'Do 20% popusta + brezplačna nadgradnja + Avis Preferred Plus membership (brezplačno)',
        code: null,
        conditions: 'Rezervacija neposredno na Visa (avisworld.com); velja od 01.01.2022 do 31.12.2026.',
        link: 'https://www.avisworld.com'
      },
      {
        merchant: 'airalo',
        domains: ['airalo.com', 'www.airalo.com'],
        discount: '15% popusta na vse eSIM pakete',
        code: 'VISA15-SLO',
        conditions: 'Velja od 02.01.2025 do 31.12.2026; dostop do rešitev povezljivosti v več kot 200 državah in regijah.',
        link: 'https://www.airalo.com'
      },
      {
        merchant: 'terme dobrna',
        domains: ['terme-dobrna.si', 'www.terme-dobrna.si'],
        discount: '20% popusta na bivanje s polpenzionom',
        code: 'VISA20',
        conditions: 'Rezervacija preko tel. 080 22 10 ali 03 78 08 110 ali info@terme-dobrna.si ali www.terme-dobrna.si z kodo VISA20; minimalno bivanje 2 noči; plačilo z Visa kartico; popusti se ne seštevajo; velja do 30.12.2026.',
        link: 'https://www.terme-dobrna.si'
      },
      {
        merchant: 'terme dobrna - spa storitve',
        domains: ['terme-dobrna.si', 'www.terme-dobrna.si'],
        discount: '10% popusta na storitve Masažno-lepotnega centra La Vita',
        code: null,
        conditions: 'Velja na masaže, lepotne tretmaje obraza, dlani in stopal, depilacije, maderoterapijo, nego telesa, tretmaje trepalnic in obrvi ter ličenje; ne velja na paketne in akcijske ponudbe; velja do 29.12.2026.',
        link: 'https://www.terme-dobrna.si'
      },
      {
        merchant: 'ljubljanski grad',
        domains: ['ljubljanskigrad.si', 'www.ljubljanskigrad.si'],
        discount: '10% popusta na izbrana doživetja (Časovni stroj)',
        code: null,
        conditions: 'Rezervacija najmanj 5 delovnih dni vnaprej na 01 232 99 94, 041 732 654 ali virtualni-grad@ljubljanskigrad.si; velja do 31.12.2026.',
        link: 'https://www.ljubljanskigrad.si/sl/izberi-dozivetje/casovni-stroj/'
      },
      {
        merchant: 'amadria park',
        domains: ['amadriapark.com', 'www.amadriapark.com'],
        discount: '15% popusta na Flexible cene za nočitev in zajtrk + do 10% na ostale redne cene',
        code: 'AMPVISA',
        conditions: 'Rezervacija preko uradnih spletnih strani; velja za hotele v Opatiji, Šibeniku in Zagrebu; velja med 01.05.2025 in 31.12.2026.',
        link: 'https://www.amadriapark.com/hotel_category/all/'
      },
      {
        merchant: 'cukrarna gallery',
        domains: ['cukrarna.org', 'www.cukrarna.org'],
        discount: '10% popusta na vse izdelke iz kolekcije Cukrarna',
        code: null,
        conditions: 'Velja v spletni in fizični trgovini na recepciji galerije; oblikovalski izdelki, umetniški katalogi in spominki; velja od 30.11.2025 do 03.05.2026.',
        link: 'https://www.cukrarna.org'
      },
      {
        merchant: 'spleticna.si',
        domains: ['spleticna.si', 'www.spleticna.si'],
        discount: '10% popusta pri nakupu nad 99 EUR',
        code: 'SPL10-VISA',
        conditions: 'Velja do 31.12.2026; več kot 400 blagovnih znamk kozmetike.',
        link: 'https://www.spleticna.si'
      },
      {
        merchant: 'travelcentive',
        domains: ['travelcentive.com', 'www.travelcentive.com'],
        discount: '7% popusta na rezervacije potovanj in letov',
        code: null,
        conditions: 'Popust se samodejno uporabi; velja od 01.12.2025 do 31.12.2026.',
        link: 'https://www.travelcentive.com'
      },
      {
        merchant: 'rimske terme',
        domains: ['rimske-terme.si', 'www.rimske-terme.si'],
        discount: '30% popusta na LUX PAKET',
        code: null,
        conditions: 'Rezervacija preko tel. 03 574 2000, 03 574 2011 ali booking@rimske-terme.si; luksuzna nastanitev z izbranimi storitvami; velja do 31.12.2026.',
        link: 'https://www.rimske-terme.si'
      },
      {
        merchant: 'airport lounges worldwide',
        domains: ['dragonpass.com', 'loungekey.com'],
        discount: 'Neomejen dostop do poslovnih salonov na letališčih',
        code: null,
        conditions: 'Velja do 30. 9. 2026.',
        link: 'https://www.visa.com.ua/en_UA/pay-with-visa/promotions/airport-lounge-access.html'
      },
      {
        merchant: 'visa concierge',
        domains: [],
        discount: '24/7 premium asistenčna služba',
        code: null,
        conditions: 'Rezervacije hotelov, restavracij, najem vozil, potovalno svetovanje, osebni asistent.',
        link: null
      },
      {
        merchant: 'travel insurance',
        domains: [],
        discount: 'Celovito potovalno zavarovanje',
        code: null,
        conditions: 'Celovito kritje; zavarovanje za zamude letov, izgubljeno prtljago, medicinska kritja.',
        link: null
      },
      {
        merchant: 'fast track services',
        domains: [],
        discount: 'Hitrejši prehod varnostnih kontrol na letališčih',
        code: null,
        conditions: 'Dostopno na izbranih mednarodnih letališčih.',
        link: null
      },
      {
        merchant: 'extended warranty',
        domains: [],
        discount: 'Podaljšano jamstvo na nakupe',
        code: null,
        conditions: 'Dodatno leto jamstva na izdelke.',
        link: null
      },
      {
        merchant: 'purchase protection',
        domains: [],
        discount: 'Zaščita nakupov',
        code: null,
        conditions: 'Vrhunsko kritje za poškodovano ali ukradeno blago.',
        link: null
      }
    ],
    'Visa Business': [
      {
        merchant: 'booking.com',
        domains: ['booking.com', 'www.booking.com'],
        discount: '4% povračilo kot dobroimetje v Booking.com denarnico',
        code: null,
        conditions: 'Rezervacija in plačilo med 01.02.2026 in 30.06.2026; bivanje med 01.02.2026 in 30.06.2026; uporaba posebne povezave: https://www.booking.com/gating/authkey?aid=8131429&key=Z6WIcn10Ll; dobroimetje se nakaže 64 dni po bivanju; maksimalno 200 EUR na rezervacijo; ne velja za predplačniške kartice za enkratno uporabo; ne velja za odpovedane rezervacije; izbrati "Plačaj zdaj" ali "Plačaj pozneje Booking.com".',
        link: 'https://www.booking.com/gating/authkey?aid=8131429&key=Z6WIcn10Ll'
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
        merchant: 'spleticna.si',
        domains: ['spleticna.si', 'www.spleticna.si'],
        discount: '10% popusta pri nakupu nad 99 EUR',
        code: 'SPL10-VISA',
        conditions: 'Velja do 31.12.2026; več kot 400 blagovnih znamk kozmetike.',
        link: 'https://www.spleticna.si'
      },
      {
        merchant: 'travelcentive',
        domains: ['travelcentive.com', 'www.travelcentive.com'],
        discount: '7% popusta na rezervacije potovanj in letov',
        code: null,
        conditions: 'Popust se samodejno uporabi; velja od 01.12.2025 do 31.12.2026.',
        link: 'https://www.travelcentive.com'
      },
    ]
  // Add more banks as needed
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = BENEFITS_DATABASE;
}