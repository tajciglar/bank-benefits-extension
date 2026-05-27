// benefits.js - Database of bank benefits

// ── Shared Visa benefit objects (defined once, referenced by each tier) ──

const _booking = {
  merchant: 'booking.com',
  domains: ['booking.com', 'www.booking.com'],
  discount: '4% povračilo kot dobroimetje v Booking.com denarnico',
  code: null,
  conditions: 'Rezervacija in plačilo med 01.02.2026 in 30.06.2026; bivanje v istem obdobju; maks. 200 EUR na rezervacijo; izbrati "Plačaj zdaj" ali "Plačaj pozneje Booking.com".',
  expires: '2026-06-30',
  link: null
};

const _airalo = {
  merchant: 'airalo',
  domains: ['airalo.com', 'www.airalo.com'],
  discount: '15% popusta na vse eSIM pakete',
  code: 'VISA15-SLO',
  conditions: 'Dostop do eSIM v več kot 200 državah.',
  expires: '2026-12-31',
  link: null
};

const _spleticna = {
  merchant: 'spleticna.si',
  domains: ['spleticna.si', 'www.spleticna.si'],
  discount: '10% popusta pri nakupu nad 99 EUR',
  code: 'SPL10-VISA',
  conditions: 'Ne velja na e-darilne bone in FOREO izdelke.',
  expires: '2026-12-31',
  link: null
};

const _travelcentive = {
  merchant: 'travelcentive',
  domains: ['travelcentive.com', 'www.travelcentive.com', 'si.travelcentive.com'],
  discount: '7% popusta na rezervacije potovanj in letov',
  code: null,
  conditions: 'Popust se samodejno uporabi.',
  expires: '2026-12-31',
  link: null
};

const _afrodita = {
  merchant: 'afrodita',
  domains: ['webshop.afroditacosmetics.com', 'afrodita.eu', 'www.afrodita.eu'],
  discount: '10% popusta na izdelke Afrodita',
  code: 'VISA-AFRODITA10',
  conditions: 'Plačilo s katerokoli Visa kartico.',
  expires: '2026-12-31',
  link: null
};

const _amadriaPark = {
  merchant: 'amadria park',
  domains: ['amadriapark.com', 'www.amadriapark.com', 'amadria-park.com', 'www.amadria-park.com'],
  discount: '15% popusta na Flexible cene za nočitev in zajtrk + do 10% na ostale redne cene',
  code: 'AMPVISA',
  conditions: 'Rezervacija preko uradnih spletnih strani; hoteli v Opatiji, Šibeniku in Zagrebu.',
  expires: '2026-12-31',
  link: null
};

const _ljubljanskiGrad = {
  merchant: 'ljubljanski grad',
  domains: ['ljubljanskigrad.si', 'www.ljubljanskigrad.si'],
  discount: '10% popusta na izbrana doživetja (Časovni stroj)',
  code: null,
  conditions: 'Rezervacija najmanj 5 delovnih dni vnaprej na 01 232 99 94 ali virtualni-grad@ljubljanskigrad.si.',
  expires: '2026-12-31',
  link: null
};

const _termeDobrna = {
  merchant: 'terme dobrna',
  domains: ['terme-dobrna.si', 'www.terme-dobrna.si'],
  discount: '20% popusta na bivanje s polpenzionom',
  code: 'VISA20',
  conditions: 'Rezervacija preko tel. 080 22 10 ali info@terme-dobrna.si; min. 2 noči; popusti se ne seštevajo.',
  expires: '2026-12-30',
  link: null
};

const _termeDobrnaSpa = {
  merchant: 'terme dobrna - spa storitve',
  domains: ['terme-dobrna.si', 'www.terme-dobrna.si'],
  discount: '10% popusta na storitve Masažno-lepotnega centra La Vita',
  code: null,
  conditions: 'Ne velja na paketne in akcijske ponudbe.',
  expires: '2026-12-29',
  link: null
};

const _avis = {
  merchant: 'avis',
  domains: ['avisworld.com', 'www.avisworld.com'],
  discount: 'Do 20% popusta + brezplačna nadgradnja + Avis Preferred Plus (brezplačno)',
  code: null,
  conditions: 'Rezervacija neposredno na avisworld.com.',
  expires: '2026-12-31',
  link: null
};

const _rimskeTreme = {
  merchant: 'rimske terme',
  domains: ['rimske-terme.si', 'www.rimske-terme.si'],
  discount: '30% popusta na LUX PAKET',
  code: null,
  conditions: 'Rezervacija preko tel. 03 574 2000 ali booking@rimske-terme.si.',
  expires: '2026-12-31',
  link: null
};

const _fastTrack = {
  merchant: 'fast track services',
  domains: [],
  discount: 'Hitrejši prehod varnostnih kontrol na letališčih',
  code: null,
  conditions: 'Dostopno na izbranih mednarodnih letališčih.',
  expires: null,
  link: null
};

const _extendedWarranty = {
  merchant: 'extended warranty',
  domains: [],
  discount: 'Podaljšano jamstvo na nakupe',
  code: null,
  conditions: 'Dodatno leto jamstva na izdelke.',
  expires: null,
  link: null
};

const _visaConcierge = {
  merchant: 'visa concierge',
  domains: [],
  discount: '24/7 asistenčna služba',
  code: null,
  conditions: 'Rezervacije hotelov, restavracij, najem vozil, potovalno svetovanje.',
  expires: null,
  link: null
};

const _purchaseProtection = {
  merchant: 'purchase protection',
  domains: [],
  discount: 'Zaščita nakupov',
  code: null,
  conditions: 'Kritje za poškodovano ali ukradeno blago.',
  expires: null,
  link: null
};

const _impresiaHoteli = {
  merchant: 'impresia hoteli',
  domains: [],
  discount: 'Nadgradnja sobe, zgodnji check-in, pozni check-out',
  code: 'VISAIMPRESIA',
  conditions: 'Uporabite kodo VISAIMPRESIA pri rezervaciji v izbranem hotelu Impresia.',
  expires: '2027-06-30',
  link: null
};

const _hotelBohinj = {
  merchant: 'hotel bohinj',
  domains: ['hotelbohinj.si', 'www.hotelbohinj.si'],
  discount: '10% popusta na nočitev',
  code: 'VISA10',
  conditions: 'Rezervacija in plačilo s kartico Visa.',
  expires: '2027-03-31',
  link: null
};

const _gourmetVilaMuhr = {
  merchant: 'gourmet vila muhr',
  domains: [],
  discount: '10% popusta na večerjo',
  code: null,
  conditions: 'Rezervacija po e-pošti; samo za imetnike kartic Visa.',
  expires: '2027-03-31',
  link: null
};

const _hotelBellevue = {
  merchant: 'hotel bellevue',
  domains: ['losinj-hotels.com', 'www.losinj-hotels.com'],
  discount: '10% popusta na najboljšo razpoložljivo ceno',
  code: 'VISA26',
  conditions: 'Rezervacija namestitve v Hotel Bellevue, Lošinj.',
  expires: '2027-03-31',
  link: null
};

const _villaGiardinoBol = {
  merchant: 'villa giardino bol',
  domains: ['villagiardinobol.com', 'www.villagiardinobol.com'],
  discount: '20% popusta + prosecco ob prihodu',
  code: 'VISA20VGB',
  conditions: 'Rezervacija in plačilo s kartico Visa.',
  expires: '2027-10-31',
  link: null
};

const _qushinPets = {
  merchant: 'qushin pets',
  domains: ['qushin.eu', 'www.qushin.eu'],
  discount: '10% popusta na PETS kolekcijo',
  code: 'VISA-PETS10',
  conditions: 'Spletni nakup.',
  expires: null,
  link: null
};

const _freywille = {
  merchant: 'freywille',
  domains: [],
  discount: '10% popusta v butiku FREYWILLE Ljubljana',
  code: null,
  conditions: 'Samo v fizični trgovini v Ljubljani; plačilo s kartico Visa.',
  expires: '2026-12-31',
  link: null
};

const _avg = {
  merchant: 'avg',
  domains: ['avg.com', 'www.avg.com'],
  discount: '75% popusta na varnostne rešitve AVG',
  code: null,
  conditions: 'Plačilo s kartico Visa.',
  expires: '2026-07-31',
  link: null
};

const _visaLuxuryHotel = {
  merchant: 'visa luxury hotel collection',
  domains: ['visaluxuryhotelcollection.com', 'www.visaluxuryhotelcollection.com'],
  discount: 'Ekskluzivne ugodnosti: zajtrk za dva, VIP status, nadgradnja sobe',
  code: null,
  conditions: 'Rezervacija prek visaluxuryhotelcollection.com; plačilo s kartico Visa.',
  expires: '2027-03-31',
  link: null
};

// ── Benefits database ──

const BENEFITS_DATABASE = {
  'OTP Banka': [
    {
      merchant: 'comma',
      domains: ['comma.si', 'www.comma.si'],
      discount: '10% popusta vsak torek na novo kolekcijo',
      code: null,
      conditions: 'Vsak torek, samo v trgovinah; ne velja v spletni trgovini.',
      expires: '2027-02-28',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 's.oliver',
      domains: ['s-oliver.com', 'www.s-oliver.com'],
      discount: '10% popusta vsak torek na novo kolekcijo',
      code: null,
      conditions: 'Vsak torek, samo v trgovinah; ne velja v spletni trgovini.',
      expires: '2027-02-28',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'peak sport',
      domains: ['peaksport.si', 'www.peaksport.si'],
      discount: '25% popusta na redne cene',
      code: 'OTPBANKA25',
      conditions: 'Plačilo s kartico OTP banke v spletni trgovini.',
      expires: '2026-08-10',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'primoz roglic web shop',
      domains: ['primozroglic.com', 'www.primozroglic.com'],
      discount: '20% popusta na izbrane izdelke',
      code: 'OTP20PR',
      conditions: 'Plačilo s kartico OTP banke v spletni trgovini.',
      expires: '2026-12-31',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'bodifit',
      domains: ['bodifit.net', 'www.bodifit.net'],
      discount: '10% popusta na vadbene karte, pakete in letno naročnino BODIFIT Play',
      code: 'OTP10BODIFIT',
      conditions: 'Samo za nove člane; ne velja na mesečne obroke.',
      expires: '2027-02-28',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'optika clarus',
      domains: ['clarus.si', 'www.clarus.si'],
      discount: '10% popusta na redne cene',
      code: null,
      conditions: 'Vsako 1. in 3. sredo v mesecu; samo v poslovalnicah.',
      expires: '2027-02-28',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'terme dobrna',
      domains: ['terme-dobrna.si', 'www.terme-dobrna.si'],
      discount: '10% popusta na storitve Masažno-lepotnega centra La Vita',
      code: null,
      conditions: 'Predhodna rezervacija na 03 78 08 555 ali lavita@terme-dobrna.si; ne velja na paketne ponudbe.',
      expires: '2026-12-29',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: "l'erboristica e-co",
      domains: ['e-co.si', 'www.e-co.si'],
      discount: '20% popusta na naravno kozmetiko + brezplačna poštnina',
      code: 'OTP20',
      conditions: 'Nakup nad 30 EUR; plačilo s kartico OTP banke.',
      expires: '2027-02-28',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'afrodita',
      domains: ['webshop.afroditacosmetics.com', 'afrodita.eu', 'www.afrodita.eu'],
      discount: '10% popusta na izdelke Afrodita',
      code: 'VISA-AFRODITA10',
      conditions: 'Plačilo s katerokoli Visa OTP kartico.',
      expires: '2026-12-31',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'spleticna.si',
      domains: ['spleticna.si', 'www.spleticna.si'],
      discount: '10% popusta pri nakupu nad 99 EUR',
      code: 'SPL10-VISA',
      conditions: 'Ne velja na e-darilne bone in FOREO izdelke.',
      expires: '2026-12-31',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'coincasa',
      domains: ['coincasa.si', 'www.coincasa.si'],
      discount: '10% popusta',
      code: 'VISA10',
      conditions: 'V spletni trgovini z kodo VISA10 ali v trgovini Supernova Šiška Ljubljana.',
      expires: '2026-09-30',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'norma bio',
      domains: ['norma.si', 'www.norma.si'],
      discount: '10% vikend popust (pet–ned)',
      code: 'OTP10',
      conditions: 'Samo spletna naročila; ne velja za dostavo.',
      expires: '2026-05-31',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'malinca',
      domains: ['malinca.si', 'www.malinca.si'],
      discount: '12% popusta na celoten nakup',
      code: 'OTP12',
      conditions: 'Spletna trgovina; koda v 2. koraku nakupa; ne velja na stroške dostave in bonov.',
      expires: '2026-11-02',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'airalo',
      domains: ['airalo.com', 'www.airalo.com'],
      discount: '15% popusta na vse eSIM pakete',
      code: 'VISA15-SLO',
      conditions: 'Plačilo s kartico Visa OTP banke.',
      expires: '2026-12-31',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'travelcentive',
      domains: ['travelcentive.com', 'www.travelcentive.com', 'si.travelcentive.com'],
      discount: '7% popusta na rezervacije potovanj',
      code: null,
      conditions: 'Popust se samodejno uporabi; plačilo s kartico Visa OTP banke.',
      expires: '2026-12-31',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'nomago',
      domains: ['nomago.si', 'www.nomago.si'],
      discount: 'Več ugodnosti: 10% na vodena potovanja, 6% na shuttle, 20 € na bikes letno članarino, 100 € na poletno delo USA',
      code: 'OTPBANKA',
      conditions: 'Spletna rezervacija ali izbrane poslovalnice; več ponudb na eni strani.',
      expires: '2026-10-15',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'amadria park hotels',
      domains: ['amadriapark.com', 'www.amadriapark.com', 'amadria-park.com', 'www.amadria-park.com'],
      discount: 'do 15% popusta na nočitve + do 10% popusta na redne cene',
      code: 'AMPVISA',
      conditions: 'Rezervacija preko uradnih spletnih strani.',
      expires: '2026-12-31',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'amadria park camping',
      domains: ['amadriaparkcamping.com', 'www.amadriaparkcamping.com'],
      discount: 'do 15% popusta na nočitve + do 10% popusta na redne cene',
      code: 'AMPVISA',
      conditions: 'Rezervacija preko uradnih spletnih strani.',
      expires: '2026-12-31',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'bohinj eco hotel',
      domains: ['bohinj-eco-hotel.si', 'www.bohinj-eco-hotel.si'],
      discount: '10% popusta na nočitve',
      code: 'OTP10',
      conditions: 'Neposredna spletna rezervacija; katerakoli osebna kartica OTP banke.',
      expires: '2026-07-01',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'urban boutique hotel',
      domains: ['urbanhotel.si', 'www.urbanhotel.si', 'secure-hotel-booking.com'],
      discount: '10% popusta na nočitve z zajtrkom',
      code: 'OTP10',
      conditions: 'Rezervacija preko spletne strani.',
      expires: '2026-10-31',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'zumma kids',
      domains: ['zummakids.si', 'www.zummakids.si'],
      discount: '20% popusta na vstopnice (pon–pet)',
      code: null,
      conditions: 'Ne velja na rojstnodnevne zabave in darilne bone.',
      expires: '2026-07-01',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'hajdi.si',
      domains: ['hajdi.si', 'www.hajdi.si'],
      discount: '15% popusta na redne cene',
      code: 'OTP15',
      conditions: 'Spletna in fizične trgovine; ne velja na Bugaboo izdelke, znižane artikle in darilne bone.',
      expires: '2026-05-31',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'office&more',
      domains: ['officeandmore.si', 'www.officeandmore.si'],
      discount: '15% popusta na redne cene',
      code: 'OTP15',
      conditions: 'Samo spletna trgovina; ne velja na knjige, učbenike in delovne zvezke.',
      expires: '2026-12-31',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'go2school.com',
      domains: ['go2school.com', 'www.go2school.com'],
      discount: '15% popusta na redne cene',
      code: 'OTP15',
      conditions: 'Samo spletna trgovina; ne velja na knjige, učbenike in delovne zvezke.',
      expires: '2026-12-31',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'bags&more',
      domains: ['bagsandmore.si', 'www.bagsandmore.si'],
      discount: '15% popusta na redne cene',
      code: 'OTP15',
      conditions: 'Samo spletna trgovina; ne velja na "mega price" izdelke in knjige.',
      expires: '2026-12-31',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'festival 202',
      domains: ['kinosiska.si', 'www.kinosiska.si', 'eventim.si', 'www.eventim.si'],
      discount: '10% popusta na enodnevne vstopnice',
      code: 'OTPBANKA10',
      conditions: 'Spletni nakup preko Eventim.',
      expires: '2026-06-05',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'ljubljanski grad',
      domains: ['ljubljanskigrad.si', 'www.ljubljanskigrad.si'],
      discount: '10% popusta na izbrana doživetja',
      code: null,
      conditions: 'Plačilo s kartico Visa OTP banke.',
      expires: '2026-12-31',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'ISIC kartica',
      domains: ['isic.si', 'www.isic.si'],
      discount: '5 € popusta na digitalno ISIC/IYTC/ITIC kartico',
      code: 'OTPBANKA',
      conditions: 'Spletno naročilo ali izbrane poslovalnice Nomago Travel.',
      expires: '2026-10-15',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'air refund',
      domains: ['airrefund.com', 'www.airrefund.com'],
      discount: 'Znižana provizija za uveljavljanje odškodnin za zamude/odpovedi letov',
      code: null,
      conditions: 'Let kupljen s kartico Visa OTP banke; odškodnine za lete v EU.',
      expires: null,
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    }
  ],

  'NLB': [
    {
      merchant: 'nordijski center planica',
      domains: ['nc-planica.si', 'www.nc-planica.si'],
      discount: '50% popusta za tek na smučeh v podzemnem tunelu (poleti) ali 10% popusta za tek zunaj (pozimi)',
      code: null,
      conditions: 'Samo za imetnike NLB Mastercard; samo za dnevne vstopnice; nakup na blagajni NC Planica.',
      expires: null,
      link: 'https://www.nc-planica.si/'
    },
    {
      merchant: 'ljubljanski maraton',
      domains: ['registration.ljubljanskimaraton.si'],
      discount: '5 € popusta na štartnino',
      code: null,
      conditions: 'Plačilo z NLB plačilno kartico.',
      expires: null,
      link: 'https://registration.ljubljanskimaraton.si/si/celotna-ponudba.html'
    },
    {
      merchant: 'cedevita olimpija',
      domains: ['vstopnice.olimpija.com'],
      discount: '20% popusta na vstopnice',
      code: 'OLI20',
      conditions: 'Ekskluzivno za NLB stranke; uporaba kode OLI20 pri nakupu.',
      expires: null,
      link: 'https://vstopnice.olimpija.com/cedevitaolimpija/si/isci/?country=SVN&lang=si'
    }
  ],

  'Visa Classic': [
    _booking, _amadriaPark, _afrodita, _spleticna, _travelcentive,
    _ljubljanskiGrad, _airalo, _termeDobrna, _purchaseProtection
  ],

  'Visa Gold': [
    _booking, _afrodita, _avis, _airalo, _termeDobrna, _termeDobrnaSpa,
    _ljubljanskiGrad, _amadriaPark, _spleticna, _travelcentive,
    _rimskeTreme, _visaConcierge, _purchaseProtection,
    _impresiaHoteli, _hotelBohinj, _gourmetVilaMuhr, _hotelBellevue,
    _villaGiardinoBol, _qushinPets, _freywille, _avg, _visaLuxuryHotel
  ],

  'Visa Platinum': [
    _booking, _avis, _airalo, _termeDobrna, _termeDobrnaSpa,
    _ljubljanskiGrad, _amadriaPark, _spleticna, _travelcentive,
    _rimskeTreme,
    {
      merchant: 'airport lounges worldwide',
      domains: ['dragonpass.com', 'loungekey.com'],
      discount: 'Dostop do poslovnih salonov na letališčih - 2x letno',
      code: null,
      conditions: null,
      expires: '2026-09-30',
      link: null
    },
    _visaConcierge, _fastTrack, _extendedWarranty, _purchaseProtection,
    _impresiaHoteli, _hotelBohinj, _gourmetVilaMuhr, _hotelBellevue,
    _villaGiardinoBol, _qushinPets, _freywille, _avg, _visaLuxuryHotel
  ],

  'Visa Signature': [
    _booking, _avis, _airalo, _termeDobrna, _termeDobrnaSpa,
    _ljubljanskiGrad, _amadriaPark, _spleticna, _travelcentive,
    _rimskeTreme,
    {
      merchant: 'airport lounges worldwide',
      domains: ['dragonpass.com', 'loungekey.com'],
      discount: 'Dostop do poslovnih salonov na letališčih - 10x letno',
      code: null,
      conditions: null,
      expires: '2026-09-30',
      link: null
    },
    _visaConcierge,
    {
      merchant: 'travel insurance',
      domains: [],
      discount: 'Potovalno zavarovanje',
      code: null,
      conditions: 'Do 750.000 USD kritja; zavarovanje za zamude letov, izgubljeno prtljago.',
      expires: null,
      link: null
    },
    _fastTrack, _extendedWarranty, _purchaseProtection,
    _impresiaHoteli, _hotelBohinj, _gourmetVilaMuhr, _hotelBellevue,
    _villaGiardinoBol, _qushinPets, _freywille, _avg, _visaLuxuryHotel
  ],

  'Visa Infinite': [
    _booking, _avis, _airalo, _termeDobrna, _termeDobrnaSpa,
    _ljubljanskiGrad, _amadriaPark, _spleticna, _travelcentive,
    _rimskeTreme,
    {
      merchant: 'airport lounges worldwide',
      domains: ['dragonpass.com', 'loungekey.com'],
      discount: 'Neomejen dostop do poslovnih salonov na letališčih',
      code: null,
      conditions: null,
      expires: '2026-09-30',
      link: null
    },
    {
      merchant: 'visa concierge',
      domains: [],
      discount: '24/7 premium asistenčna služba',
      code: null,
      conditions: 'Rezervacije hotelov, restavracij, najem vozil, potovalno svetovanje, osebni asistent.',
      expires: null,
      link: null
    },
    {
      merchant: 'travel insurance',
      domains: [],
      discount: 'Celovito potovalno zavarovanje',
      code: null,
      conditions: 'Celovito kritje; zavarovanje za zamude letov, izgubljeno prtljago, medicinska kritja.',
      expires: null,
      link: null
    },
    _fastTrack, _extendedWarranty,
    {
      merchant: 'purchase protection',
      domains: [],
      discount: 'Zaščita nakupov',
      code: null,
      conditions: 'Vrhunsko kritje za poškodovano ali ukradeno blago.',
      expires: null,
      link: null
    },
    _impresiaHoteli, _hotelBohinj, _gourmetVilaMuhr, _hotelBellevue,
    _villaGiardinoBol, _qushinPets, _freywille, _avg, _visaLuxuryHotel
  ],

  'Visa Business': [
    _booking, _afrodita, _spleticna, _travelcentive,
    _hotelBohinj, _hotelBellevue, _avg, _visaLuxuryHotel,
    {
      merchant: 'časnik finance',
      domains: ['finance.si', 'www.finance.si'],
      discount: '35% popusta na naročnino Finance Poslovni',
      code: null,
      conditions: 'Samo za imetnike poslovnih kartic Visa.',
      expires: null,
      link: null
    },
    {
      merchant: 'mimovrste',
      domains: ['mimovrste.com', 'www.mimovrste.com'],
      discount: '10% popusta na spletne nakupe',
      code: 'VISA10BIZ526',
      conditions: 'Plačilo s poslovno kartico Visa.',
      expires: null,
      link: null
    },
    {
      merchant: 'google workspace',
      domains: ['workspace.google.com', 'admin.google.com'],
      discount: '25% popusta na Google Workspace Business Standard',
      code: null,
      conditions: 'Samo za nove uporabnike ali ob nadgradnji; koda na spletni strani; plačilo s poslovno kartico Visa.',
      expires: '2026-07-31',
      link: null
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = BENEFITS_DATABASE;
}
