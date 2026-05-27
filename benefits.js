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
      merchant: '1nadan',
      domains: ['1nadan.si'],
      discount: '5–10 % povračila v e-denarnico',
      code: null,
      conditions: 'Velja pri plačilu izbranih ponudb na spletni strani 1nadan s kartico NLB Mastercard.',
      expires: null,
      link: 'https://1nadan.si/ponudbe/mastercard'
    },
    {
      merchant: 'afrodita cosmetics',
      domains: ['afrodita.eu', 'afroditacosmetics.com', 'afrodita.si'],
      discount: '10 % popust na vrhunske kozmetične izdelke',
      code: null,
      conditions: 'Velja v spletni prodajalni Afrodita Cosmetics ob plačilu z Viso.',
      expires: '2026-09-30',
      link: 'https://www.visaeurope.si/sl_si/visa-offers-and-perks/afrodita/154051'
    },
    {
      merchant: 'avis',
      domains: ['avis.com', 'avis.si', 'avisworld.com'],
      discount: 'Do 35 % popusta pri najemu vozil',
      code: null,
      conditions: 'Vključuje članstvo Avis Preferred Plus ali Avis President\'s Club. Velja pri najemu avtomobila s kartico Mastercard.',
      expires: '2026-12-31',
      link: 'https://secure-one.avisworld.com/en_GB/Avis-Mastercard/AvisPreferred'
    },
    {
      merchant: 'booking.com',
      domains: ['booking.com', 'www.booking.com'],
      discount: 'Do 4 % povračila kot dobropis v denarnici',
      code: null,
      conditions: 'Velja za imetnike kartic Mastercard Standard ob rezervaciji izbranih nastanitev na Booking.com.',
      expires: '2026-12-31',
      link: 'https://www.booking.com/gating/authkey?aid=8131443&key=yPCKVUP1KB&label=si-NLB-8131443-click'
    },
    {
      merchant: 'booking.com',
      domains: ['booking.com', 'www.booking.com'],
      discount: 'Do 4 % povračila kot dobropis v denarnici',
      code: null,
      conditions: 'Velja ob rezervaciji nastanitve na Booking.com s kartico Visa.',
      expires: null,
      link: 'https://www.visaeurope.si/sl_si/visa-offers-and-perks/bookingcom/174764'
    },
    {
      merchant: 'booking.com',
      domains: ['booking.com', 'www.booking.com'],
      discount: 'Do 7 % povračila kot dobropis v denarnici',
      code: null,
      conditions: 'Velja za imetnike kartic Mastercard World in World Elite ob rezervaciji izbranih nastanitev na Booking.com.',
      expires: '2026-12-31',
      link: 'https://www.booking.com/gating/authkey?aid=8131444&key=aG9waCS9vE&label=si-NLBPremium-8131444-click'
    },
    {
      merchant: 'coincasa',
      domains: ['coincasa.it', 'coincasa.com'],
      discount: '10 % popust na izdelke',
      code: 'VISA10',
      conditions: 'Velja pri spletnem ali fizičnem nakupu z uporabo kode VISA10 in plačilom z Viso.',
      expires: '2026-09-30',
      link: 'https://www.visaeurope.si/sl_si/visa-offers-and-perks/coincasa/154403'
    },
    {
      merchant: 'easyjet',
      domains: ['easyjet.com'],
      discount: '10 % popust na članstvo easyJet Plus',
      code: null,
      conditions: 'Velja ob prvi sklenitvi naročnine na easyJet Plus s kartico Mastercard.',
      expires: '2026-12-31',
      link: 'https://www.priceless.com/travel/product/222189/easyjet'
    },
    {
      merchant: 'goodlife',
      domains: ['goodlife.si'],
      discount: 'Mastercard ugodnosti pri partnerjih programa Goodlife',
      code: 'goodlife',
      conditions: 'Velja za imetnike kartic NLB Mastercard World in World Elite. Več partnerjev s 10 % popustom s kodo goodlife.',
      expires: null,
      link: 'https://www.goodlife.si/ugodnosti'
    },
    {
      merchant: 'hertz',
      domains: ['hertz.com', 'hertz.si'],
      discount: '10 % popust na najem standardnih in do 15 % na najem električnih vozil',
      code: null,
      conditions: 'Velja po vsem svetu ob najemu s kartico Mastercard. Vključuje ugodnosti programa Hertz Gold Plus Rewards.',
      expires: null,
      link: 'https://www.hertz.com/rentacar/hertzlink/index.jsp?targetPage=Mastercard_Splash_Page.xml'
    },
    {
      merchant: 'mastercard travel experiences (dragonpass)',
      domains: ['mastercardtravelpass.dragonpass.com'],
      discount: 'Brezplačna rezervacija hitrega prehoda čez letališki varnostni postopek',
      code: null,
      conditions: 'Velja za imetnike kartic NLB Mastercard World in World Elite prek aplikacije Mastercard Travel Experiences.',
      expires: null,
      link: 'https://mastercardtravelpass.dragonpass.com/'
    },
    {
      merchant: 'loungekey',
      domains: ['loungekey.com'],
      discount: 'Prost vstop v ekskluzivne letališke salone LoungeKey (+1 oseba)',
      code: null,
      conditions: 'Velja za imetnike kartice NLB Mastercard World Elite.',
      expires: null,
      link: 'https://www.loungekey.com/nlb'
    },
    {
      merchant: 'loungekey',
      domains: ['loungekey.com'],
      discount: 'Prost vstop v ekskluzivne letališke salone LoungeKey',
      code: null,
      conditions: 'Velja za imetnike poslovne kartice NLB Visa Platinum.',
      expires: null,
      link: 'https://www.loungekey.com/NLBVisa'
    },
    {
      merchant: 'ljubljanski grad',
      domains: ['ljubljanskigrad.si'],
      discount: '10 % popust na izbrana doživetja',
      code: null,
      conditions: 'Velja za imetnike osebnih kartic Visa za 4 posebna doživetja na Ljubljanskem gradu.',
      expires: '2026-12-31',
      link: 'https://www.visaeurope.si/sl_si/visa-offers-and-perks/ljubljanski-grad/174220'
    },
    {
      merchant: 'nlb ljubljanski maraton',
      domains: ['ljubljanskimaraton.si'],
      discount: '5 EUR popusta na štartnino',
      code: null,
      conditions: 'Velja ob plačilu štartnine za NLB Ljubljanski maraton z NLB plačilno kartico.',
      expires: null,
      link: 'https://registration.ljubljanskimaraton.si/si/celotna-ponudba.html'
    },
    {
      merchant: 'mastercard concierge',
      domains: [],
      discount: 'Brezplačni osebni asistent Mastercard Concierge in prost vstop v salone LoungeKey',
      code: null,
      conditions: 'Velja za imetnike NLB Paketa Privatno s kartico NLB Mastercard Zlata oz. World Elite.',
      expires: null,
      link: 'https://www.nlb.si/osebno/kartice/karticne-ugodnosti'
    },
    {
      merchant: 'mastercard priceless',
      domains: ['priceless.com'],
      discount: 'Ekskluzivne ponudbe v mestih po svetu prek programa Priceless Cities',
      code: null,
      conditions: 'Velja za imetnike kartic Mastercard. Do preklica.',
      expires: null,
      link: 'https://www.priceless.com/en-us/tourist/SI/europe/region.html'
    },
    {
      merchant: 'muza',
      domains: [],
      discount: 'Brezplačni vstopnici za dve osebi',
      code: null,
      conditions: 'Velja za imetnike kartic NLB Mastercard World in World Elite za vstop v galerijo in muzej Muza.',
      expires: null,
      link: 'https://www.nlb.si/osebno/kartice/karticne-ugodnosti'
    },
    {
      merchant: 'nordijski center planica',
      domains: ['nc-planica.si'],
      discount: '50 % popust na tek v tunelu, 10 % na tek zunaj, 20 % na muzej in sedežnico',
      code: null,
      conditions: 'Velja ob nakupu dnevnih vstopnic na blagajni NC Planica s kartico NLB Mastercard.',
      expires: null,
      link: 'https://www.nc-planica.si/'
    },
    {
      merchant: 'cedevita olimpija',
      domains: ['cedevitaolimpija.com', 'eventim.si'],
      discount: '20 % popust na vstopnice za tekme',
      code: null,
      conditions: 'Velja za imetnike NLB plačilnih kartic ob nakupu vstopnic prek Eventima.',
      expires: null,
      link: 'https://www.eventim.si/top-events/?affiliate=S74'
    },
    {
      merchant: 'terme dobrna',
      domains: ['terme-dobrna.si'],
      discount: '10 % popust na izbrane storitve',
      code: null,
      conditions: 'Velja za imetnike osebnih kartic Visa.',
      expires: '2026-12-30',
      link: 'https://www.visaeurope.si/sl_si/visa-offers-and-perks/terme-dobrna/174224'
    },
    {
      merchant: 'woop',
      domains: ['woop.fun'],
      discount: '10 % popust na atrakcije (trampolini, plezalne stene, karting, sobe pobega, bowling, VR, laser tag in več)',
      code: null,
      conditions: 'Velja za imetnike debetnih kartic NLB Mastercard World in World Elite. Aktivacija na recepciji ob predložitvi kartice. Ne velja za darilne bone in vstopnice, ostale programe in se ne združuje z ostalimi popusti.',
      expires: '2026-10-01',
      link: 'https://woop.fun/'
    },
    {
      merchant: 'mastercard (zaščita spletnih nakupov)',
      domains: [],
      discount: 'Nična odgovornost pri zlorabi kartice in povračilo nepooblaščenih transakcij',
      code: null,
      conditions: 'Velja za imetnike kartic NLB Mastercard World in World Elite po prijavi in potrditvi zlorabe.',
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/za%C5%A1%C4%8Dita-in-varnost/na%C4%8Delo-popolne-za%C5%A1%C4%8Dite.html'
    },
    {
      merchant: 'časnik finance',
      domains: ['finance.si'],
      discount: '35 % popusta v prvem letu na celoletno naročnino Finance Poslovni',
      code: null,
      conditions: 'Velja za imetnike poslovne kartice Visa in podjetja, ki še niso naročniki Časnika Finance.',
      expires: null,
      link: 'https://www.nlb.si/osebno/kartice/karticne-ugodnosti'
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
  ],

  'Delavska hranilnica': [
    {
      merchant: 'booking.com',
      domains: ['booking.com', 'www.booking.com'],
      discount: 'do 7% dobroimetja v denarnici ob rezervaciji',
      code: null,
      conditions: 'Velja izključno za rezervacije, opravljene prek povezave na strani DH; nagrada se doda v denarnico 60 ali več dni po opravljenem bivanju',
      expires: null,
      link: 'https://www.dh.si/mastercard-ugodnosti/'
    },
    {
      merchant: 'avis',
      domains: ['avis.com', 'www.avis.com', 'avis.si', 'www.avis.si'],
      discount: 'do 20% popusta na najem vozil',
      code: null,
      conditions: 'Brezplačno članstvo Avis Preferred; velja v Evropi, ZDA, Novi Zelandiji in drugod po svetu',
      expires: null,
      link: 'https://www.dh.si/mastercard-ugodnosti/'
    },
    {
      merchant: 'hertz',
      domains: ['hertz.com', 'www.hertz.com', 'hertz.si', 'www.hertz.si'],
      discount: '10% popusta na najem vozil',
      code: null,
      conditions: 'Nadgradnja na ustrezni statusni razred v programu Hertz Gold Plus Rewards',
      expires: null,
      link: 'https://www.dh.si/mastercard-ugodnosti/'
    },
    {
      merchant: 'terme čatež',
      domains: ['terme-catez.si', 'www.terme-catez.si'],
      discount: '10% popusta na redne cene nastanitev',
      code: 'goodlife',
      conditions: 'Rezervacija na spletni strani term',
      expires: null,
      link: 'https://www.dh.si/mastercard-ugodnosti/'
    },
    {
      merchant: 'bear watching slovenia',
      domains: ['bearwatchingslovenia.com', 'www.bearwatchingslovenia.com'],
      discount: '10% popusta na doživetje opazovanja medvedov',
      code: 'goodlife',
      conditions: null,
      expires: null,
      link: 'https://www.dh.si/mastercard-ugodnosti/'
    },
    {
      merchant: 'dinner in the dark',
      domains: ['dinnerinthedark.si', 'www.dinnerinthedark.si'],
      discount: '10% popusta na kulinarično doživetje večerje v temi',
      code: 'goodlife',
      conditions: null,
      expires: null,
      link: 'https://www.dh.si/mastercard-ugodnosti/'
    },
    {
      merchant: 'letališki poslovni salon',
      domains: [],
      discount: 'dostop do letaliških poslovnih salonov (ob plačilu po ceniku salona)',
      code: null,
      conditions: 'Vstop mogoč ob plačilu; za imetnike Mastercard World',
      expires: null,
      link: 'https://www.dh.si/mastercard-ugodnosti/'
    },
    {
      merchant: 'hitri prehod',
      domains: [],
      discount: 'hitrejši varnostni pregled na mednarodnih letališčih',
      code: null,
      conditions: 'Za imetnike kreditne kartice Mastercard World',
      expires: null,
      link: 'https://www.dh.si/mastercard-ugodnosti/'
    },
    {
      merchant: 'delo',
      domains: ['delo.si', 'www.delo.si'],
      discount: '20% popusta na letni paket Delo Digital',
      code: null,
      conditions: 'Vključuje vsebine na delo.si, The New York Times, PDF tiskane izdaje Dela in Nedela',
      expires: null,
      link: 'https://www.dh.si/mastercard-ugodnosti/'
    },
    {
      merchant: 'kaval group',
      domains: ['kaval-group.si', 'www.kaval-group.si'],
      discount: '10% popusta v restavracijah in kavarnah Kaval Group ter slaščičarni Lolita',
      code: null,
      conditions: 'Velja v Ljubljani',
      expires: null,
      link: 'https://www.dh.si/mastercard-ugodnosti/'
    },
    {
      merchant: 'gruzijska restavracija zlato runo',
      domains: ['zlatoruno.si', 'www.zlatoruno.si'],
      discount: '10% popusta na vso kulinarično ponudbo',
      code: null,
      conditions: 'Za imetnike kartice Mastercard World',
      expires: null,
      link: 'https://www.dh.si/mastercard-ugodnosti/'
    },
    {
      merchant: 'restavracija 1906',
      domains: ['hoteltriglavbled.si', 'www.hoteltriglavbled.si'],
      discount: '10% popusta na vsaj 4-hodno večerjo',
      code: 'goodlife',
      conditions: 'Ne velja za pijačo; rezervacije na info@hoteltriglavbled.si',
      expires: null,
      link: 'https://www.dh.si/mastercard-ugodnosti/'
    },
    {
      merchant: '4p fitnes',
      domains: ['4p-fitness.com', 'www.4p-fitness.com'],
      discount: '30% popusta na redne cene iz cenika',
      code: null,
      conditions: 'Več informacij na vuckovic@4pfitness.com',
      expires: null,
      link: 'https://www.dh.si/mastercard-ugodnosti/'
    },
    {
      merchant: 'stevo hair salon',
      domains: [],
      discount: '10% popusta na vse frizerske storitve',
      code: null,
      conditions: 'Rezervacije na 01 431 51 38',
      expires: null,
      link: 'https://www.dh.si/mastercard-ugodnosti/'
    },
    {
      merchant: 'noordung store',
      domains: ['noordung.com', 'www.noordung.com'],
      discount: '10% popusta na kolesa in kolesarsko opremo',
      code: 'goodlife',
      conditions: null,
      expires: null,
      link: 'https://www.dh.si/mastercard-ugodnosti/'
    }
  ],

  'BKS Bank': [
    {
      merchant: 'big bang',
      domains: ['bigbang.si'],
      discount: '10% popusta na izbrane izdelke Philips',
      code: 'MASTERCARD',
      conditions: 'Nakup nad 30 EUR, placilo s kartico Mastercard, ni zdruzljivo z drugimi akcijami',
      expires: '2026-05-31',
      link: 'https://www.bksbank.si/podpora/placila/ugodnosti-s-kartico-mastercard'
    },
    {
      merchant: 'booking.com',
      domains: ['booking.com'],
      discount: '4% dobropisa v denarnici ob rezervaciji',
      code: null,
      conditions: 'Ob vsaki rezervaciji prenocisca prek posebne povezave',
      expires: '2026-12-31',
      link: 'https://www.bksbank.si/podpora/placila/ugodnosti-s-kartico-mastercard'
    },
    {
      merchant: 'booking.com',
      domains: ['booking.com'],
      discount: 'do 7% dobropisa v denarnici ob rezervaciji',
      code: null,
      conditions: 'Ob vsaki rezervaciji prenocisca prek posebne povezave',
      expires: '2026-12-31',
      link: 'https://www.bksbank.si/podpora/placila/ugodnosti-s-kartico-mastercard'
    },
    {
      merchant: 'avis',
      domains: ['avis.com'],
      discount: 'do 35% popusta na izposojo avtomobilov',
      code: null,
      conditions: 'Clanstvo Avis Preferred Plus ali President\'s Club; rezervacija prek posebne povezave',
      expires: '2026-12-31',
      link: 'https://www.bksbank.si/podpora/placila/ugodnosti-s-kartico-mastercard'
    },
    {
      merchant: 'zalando',
      domains: ['zalando.si'],
      discount: '10% popusta pri nakupu digitalne darilne kartice',
      code: null,
      conditions: 'Nakup digitalne darilne kartice prek posebne povezave',
      expires: '2026-12-31',
      link: 'https://www.bksbank.si/podpora/placila/ugodnosti-s-kartico-mastercard'
    },
    {
      merchant: 'yoox',
      domains: ['yoox.com'],
      discount: '15% popusta na spletne nakupe',
      code: null,
      conditions: 'Moda, dizajn in umetnost; promocijska koda prejeta na e-postni naslov',
      expires: '2026-12-31',
      link: 'https://www.bksbank.si/podpora/placila/ugodnosti-s-kartico-mastercard'
    },
    {
      merchant: 'readly',
      domains: ['readly.com'],
      discount: '2-mesecni brezplacni preizkus in 15% popust na mesecno narocnino',
      code: null,
      conditions: 'Dostop do vec kot 7.500 svetovnih revij; Mastercard za vsako narocnino zasadi 5 dreves',
      expires: '2026-12-31',
      link: 'https://www.bksbank.si/podpora/placila/ugodnosti-s-kartico-mastercard'
    },
    {
      merchant: 'preferred hotels & resorts',
      domains: ['preferredhotels.com'],
      discount: '4 noci za ceno 3 (brezplacna nocitev)',
      code: 'MKTMSC',
      conditions: 'Rezervacija v vec kot 650 hotelih; vkljucene bonus tocke',
      expires: '2026-12-31',
      link: 'https://www.bksbank.si/podpora/placila/ugodnosti-s-kartico-mastercard'
    },
    {
      merchant: 'preferred hotels & resorts',
      domains: ['preferredhotels.com'],
      discount: '4 noci za ceno 3 (brezplacna nocitev)',
      code: 'MKTMPE',
      conditions: 'Rezervacija v vec kot 650 hotelih; vkljucene bonus tocke',
      expires: '2026-12-31',
      link: 'https://www.bksbank.si/podpora/placila/ugodnosti-s-kartico-mastercard'
    },
    {
      merchant: 'hotelux',
      domains: [],
      discount: 'Brezplacno clanstvo HoteLux Elite',
      code: null,
      conditions: 'Hitre rezervacije prestiznih hotelskih verig in ekskluzivne prednosti',
      expires: '2026-12-31',
      link: 'https://www.bksbank.si/podpora/placila/ugodnosti-s-kartico-mastercard'
    },
    {
      merchant: 'easyjet',
      domains: ['easyjet.com'],
      discount: '10% popusta na prvo letno clanarino easyJet Plus',
      code: null,
      conditions: 'Ob registraciji v easyJet Plus prek Priceless platforme',
      expires: '2026-12-31',
      link: 'https://www.bksbank.si/podpora/placila/ugodnosti-s-kartico-mastercard'
    }
  ],

  'Intesa Sanpaolo': [
    {
      merchant: 'mastercard fast track',
      domains: [],
      discount: 'Brezplačen hiter prehod (Fast Track) skozi varnostni pregled na mednarodnih letališčih (10x letno)',
      code: null,
      conditions: 'Otroci, mlajši od 18 let, vstopijo brezplačno z imetnikom kartice; rezervacija prek aplikacije Mastercard Travel Experiences',
      expires: null,
      link: 'https://www.intesasanpaolobank.si/prebivalstvo/placilne-kartice/ugodnosti-mastercard-world.html'
    },
    {
      merchant: 'letališki poslovni salon ljubljana',
      domains: [],
      discount: 'Dostop do poslovnega salona na Letališču Jožeta Pučnika (mirno okolje, brezplačna hrana in pijača, delovni prostor)',
      code: null,
      conditions: 'Vstop za imetnika kartice je mogoč ob plačilu',
      expires: null,
      link: 'https://www.intesasanpaolobank.si/prebivalstvo/placilne-kartice/ugodnosti-mastercard-world.html'
    },
    {
      merchant: 'mastercard zavarovanje spletnih nakupov',
      domains: [],
      discount: 'Brezplačno zavarovanje spletnih nakupov (zaščita pri nakupu, zaščita pri kraji ali škodi, podaljšana garancija, garancija najugodnejše cene)',
      code: null,
      conditions: 'Potrebna aktivacija',
      expires: null,
      link: 'https://www.intesasanpaolobank.si/prebivalstvo/placilne-kartice/ugodnosti-mastercard-world.html'
    }
  ],

  'Addiko Bank': [
    {
      merchant: 'big bang',
      domains: ['bigbang.si'],
      discount: 'Dodatnih 10% popusta na izbrane izdelke Philips',
      code: 'MASTERCARD',
      conditions: 'Nakup nad 30 EUR in plačilo s kartico Addiko Mastercard; akcija ni združljiva z drugimi akcijami',
      expires: '2026-05-31',
      link: 'https://www.addiko.si/obcani/kartice/ugodnosti-uporabnike-kartic/'
    }
  ],

  'Sparkasse': [
    {
      merchant: 'a2u',
      domains: ['a2u.si'],
      discount: '200 EUR popusta na določeno ponudbo',
      code: null,
      conditions: 'Velja na D-TOREK (vsak drugi in četrti torek v mesecu) ob plačilu s kartico Diners Club - Mastercard',
      expires: null,
      link: 'https://www.sparkassepay.si/d-torek/'
    },
    {
      merchant: 'anker',
      domains: ['anker.si'],
      discount: '10% popusta na določeno ponudbo',
      code: null,
      conditions: 'Velja na D-TOREK (vsak drugi in četrti torek v mesecu) ob plačilu s kartico Diners Club - Mastercard',
      expires: null,
      link: 'https://www.sparkassepay.si/d-torek/'
    },
    {
      merchant: 'bags&more',
      domains: ['bagsandmore.si'],
      discount: '15% popusta na vso ponudbo',
      code: null,
      conditions: 'Velja na D-TOREK (vsak drugi in četrti torek v mesecu) ob plačilu s kartico Diners Club - Mastercard',
      expires: null,
      link: 'https://www.sparkassepay.si/d-torek/'
    },
    {
      merchant: 'calvin klein underwear citypark ljubljana',
      domains: ['365fashion.si'],
      discount: '15% popusta na določeno ponudbo',
      code: null,
      conditions: 'Velja na D-TOREK (vsak drugi in četrti torek v mesecu) v trgovini Calvin Klein Underwear v Cityparku Ljubljana ob plačilu s kartico Diners Club - Mastercard',
      expires: null,
      link: 'https://www.sparkassepay.si/d-torek/'
    },
    {
      merchant: 'dreame',
      domains: ['dreame.si'],
      discount: '10% popusta na določeno ponudbo',
      code: null,
      conditions: 'Velja na D-TOREK (vsak drugi in četrti torek v mesecu) ob plačilu s kartico Diners Club - Mastercard',
      expires: null,
      link: 'https://www.sparkassepay.si/d-torek/'
    },
    {
      merchant: 'ecoflow',
      domains: ['ecoflow.si'],
      discount: '10% popusta na določeno ponudbo',
      code: null,
      conditions: 'Velja na D-TOREK (vsak drugi in četrti torek v mesecu) ob plačilu s kartico Diners Club - Mastercard',
      expires: null,
      link: 'https://www.sparkassepay.si/d-torek/'
    },
    {
      merchant: 'eko škrnicl',
      domains: ['eko-skrnicl.si'],
      discount: '20% popusta na vso ponudbo',
      code: null,
      conditions: 'Velja na D-TOREK (vsak drugi in četrti torek v mesecu) ob plačilu s kartico Diners Club - Mastercard',
      expires: null,
      link: 'https://www.sparkassepay.si/d-torek/'
    },
    {
      merchant: 'humanic',
      domains: ['humanic.net'],
      discount: '20% popusta na vso ponudbo',
      code: null,
      conditions: 'Velja na D-TOREK (vsak drugi in četrti torek v mesecu) ob plačilu s kartico Diners Club - Mastercard',
      expires: null,
      link: 'https://www.sparkassepay.si/d-torek/'
    },
    {
      merchant: 'l\'occitane',
      domains: ['loccitane.com'],
      discount: '15% popusta na določeno ponudbo',
      code: null,
      conditions: 'Velja na D-TOREK (vsak drugi in četrti torek v mesecu) ob plačilu s kartico Diners Club - Mastercard',
      expires: null,
      link: 'https://www.sparkassepay.si/d-torek/'
    },
    {
      merchant: 'merkur trgovine',
      domains: ['merkur.si'],
      discount: '10% popusta na določeno ponudbo',
      code: null,
      conditions: 'Velja na D-TOREK (vsak drugi in četrti torek v mesecu) ob plačilu s kartico Diners Club - Mastercard',
      expires: null,
      link: 'https://www.sparkassepay.si/d-torek/'
    },
    {
      merchant: 'mr. pet',
      domains: ['mrpet.si'],
      discount: '10% popusta na določeno ponudbo',
      code: null,
      conditions: 'Velja na D-TOREK (vsak drugi in četrti torek v mesecu) ob plačilu s kartico Diners Club - Mastercard',
      expires: null,
      link: 'https://www.sparkassepay.si/d-torek/'
    },
    {
      merchant: 'office&more',
      domains: ['officeandmore.si'],
      discount: '15% popusta na določeno ponudbo',
      code: null,
      conditions: 'Velja na D-TOREK (vsak drugi in četrti torek v mesecu) ob plačilu s kartico Diners Club - Mastercard',
      expires: null,
      link: 'https://www.sparkassepay.si/d-torek/'
    },
    {
      merchant: 'optika clarus',
      domains: ['clarus.si'],
      discount: '10% popusta na določeno ponudbo',
      code: null,
      conditions: 'Velja na D-TOREK (vsak drugi in četrti torek v mesecu) ob plačilu s kartico Diners Club - Mastercard',
      expires: null,
      link: 'https://www.sparkassepay.si/d-torek/'
    },
    {
      merchant: 'prima pohištvo',
      domains: ['prima-pohistvo.si'],
      discount: '10% popusta na določeno ponudbo',
      code: null,
      conditions: 'Velja na D-TOREK (vsak drugi in četrti torek v mesecu) ob plačilu s kartico Diners Club - Mastercard',
      expires: null,
      link: 'https://www.sparkassepay.si/d-torek/'
    },
    {
      merchant: 'prodajalne ccc',
      domains: ['ccc.eu'],
      discount: '10% popusta na določeno ponudbo',
      code: null,
      conditions: 'Velja na D-TOREK (vsak drugi in četrti torek v mesecu) ob plačilu s kartico Diners Club - Mastercard',
      expires: null,
      link: 'https://www.sparkassepay.si/d-torek/'
    },
    {
      merchant: 'roborock',
      domains: ['roborock-shop.si'],
      discount: '10% popusta na določeno ponudbo',
      code: null,
      conditions: 'Velja na D-TOREK (vsak drugi in četrti torek v mesecu) ob plačilu s kartico Diners Club - Mastercard',
      expires: null,
      link: 'https://www.sparkassepay.si/d-torek/'
    },
    {
      merchant: 'steklarna rogaška',
      domains: ['steklarna-rogaska.si'],
      discount: '10% popusta na vso ponudbo',
      code: null,
      conditions: 'Velja na D-TOREK (vsak drugi in četrti torek v mesecu) v prodajnem salonu ob plačilu s kartico Diners Club - Mastercard',
      expires: null,
      link: 'https://www.sparkassepay.si/d-torek/'
    },
    {
      merchant: 'saloni ga+kuhinje',
      domains: ['ga-kuhinje.si'],
      discount: '10% popusta na določeno ponudbo',
      code: null,
      conditions: 'Velja na D-TOREK (vsak drugi in četrti torek v mesecu) ob plačilu s kartico Diners Club - Mastercard',
      expires: null,
      link: 'https://www.sparkassepay.si/d-torek/'
    },
    {
      merchant: 'samsonite',
      domains: ['toko.si'],
      discount: '15% popusta na vso ponudbo',
      code: null,
      conditions: 'Velja na D-TOREK (vsak drugi in četrti torek v mesecu) ob plačilu s kartico Diners Club - Mastercard',
      expires: null,
      link: 'https://www.sparkassepay.si/d-torek/'
    },
    {
      merchant: 'samsung',
      domains: ['samsung.com'],
      discount: 'Do 40% popusta na določeno ponudbo',
      code: null,
      conditions: 'Velja na D-TOREK (vsak drugi in četrti torek v mesecu) v Samsung partnerski spletni trgovini ob plačilu s kartico Diners Club - Mastercard',
      expires: null,
      link: 'https://www.sparkassepay.si/d-torek/'
    },
    {
      merchant: 'tommy hilfiger aleja ljubljana',
      domains: ['365fashion.si'],
      discount: '15% popusta na določeno ponudbo',
      code: null,
      conditions: 'Velja na D-TOREK (vsak drugi in četrti torek v mesecu) v trgovini Tommy Hilfiger v Aleji Ljubljana ob plačilu s kartico Diners Club - Mastercard',
      expires: null,
      link: 'https://www.sparkassepay.si/d-torek/'
    },
    {
      merchant: 'toper',
      domains: ['toper.si'],
      discount: '30% popusta na določeno ponudbo',
      code: null,
      conditions: 'Velja na D-TOREK (vsak drugi in četrti torek v mesecu) ob plačilu s kartico Diners Club - Mastercard',
      expires: null,
      link: 'https://www.sparkassepay.si/d-torek/'
    },
    {
      merchant: 'trgovina drinx',
      domains: ['drinx.si'],
      discount: '10% popusta na določeno ponudbo',
      code: null,
      conditions: 'Velja na D-TOREK (vsak drugi in četrti torek v mesecu) ob plačilu s kartico Diners Club - Mastercard',
      expires: null,
      link: 'https://www.sparkassepay.si/d-torek/'
    },
    {
      merchant: 'trgovine 365',
      domains: ['365fashion.si'],
      discount: '15% popusta na določeno ponudbo',
      code: null,
      conditions: 'Velja na D-TOREK (vsak drugi in četrti torek v mesecu) ob plačilu s kartico Diners Club - Mastercard',
      expires: null,
      link: 'https://www.sparkassepay.si/d-torek/'
    },
    {
      merchant: 'trgovine tuš',
      domains: ['tus.si'],
      discount: '15% popusta na določeno ponudbo',
      code: null,
      conditions: 'Velja na D-TOREK (vsak drugi in četrti torek v mesecu) ob plačilu s kartico Diners Club - Mastercard',
      expires: null,
      link: 'https://www.sparkassepay.si/d-torek/'
    },
    {
      merchant: 'weekend max mara',
      domains: [],
      discount: '10% popusta na določeno ponudbo',
      code: null,
      conditions: 'Velja na D-TOREK (vsak drugi in četrti torek v mesecu) ob plačilu s kartico Diners Club - Mastercard',
      expires: null,
      link: 'https://www.sparkassepay.si/d-torek/'
    },
    {
      merchant: 'zavarovalnica generali',
      domains: ['generali.si'],
      discount: '5% popusta na določeno ponudbo zavarovanja',
      code: null,
      conditions: 'Velja na D-TOREK (vsak drugi in četrti torek v mesecu) ob plačilu s kartico Diners Club - Mastercard',
      expires: null,
      link: 'https://www.sparkassepay.si/d-torek/'
    }
  ],

  'Gorenjska banka': [
    {
      merchant: 'booking.com',
      domains: ['booking.com'],
      discount: 'Do 4% dobropisa v Booking.com denarnici',
      code: null,
      conditions: 'Plačilo s kartico Mastercard Gorenjske banke pri izbranih nastanitvah',
      expires: '2026-12-31',
      link: 'https://www.gbkr.si/ugodnosti-mastercard/'
    }
  ],

  'Mastercard World': [
    {
      merchant: 'zlato runo',
      domains: ['zlatoruno.si'],
      discount: '10 % popust na vso kulinarično ponudbo',
      code: null,
      conditions: 'Gruzijska restavracija; popust za imetnike kartic Mastercard World in World Elite',
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'lifestyle trgovina parada',
      domains: [],
      discount: '10 % popust na vse izdelke',
      code: 'goodlife',
      conditions: null,
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'frizerski salon mosquito',
      domains: [],
      discount: '10 % popust na vse frizerske storitve',
      code: 'goodlife',
      conditions: null,
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'mastercard hitri prehod (fast track)',
      domains: [],
      discount: 'Brezplačen prednostni varnostni prehod na mednarodnih letališčih',
      code: null,
      conditions: 'World: 10x letno brezplačno; World Elite: neomejeno. Otroci do 18 let brezplačno. Rezervacija prek aplikacije Mastercard Travel Experiences',
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti/hitri-prehod.html'
    },
    {
      merchant: 'mastercard zavarovanje spletnih nakupov',
      domains: [],
      discount: 'Brezplačno zavarovanje spletnih nakupov (zaščita pri nakupu, podaljšana garancija, garancija najugodnejše cene)',
      code: null,
      conditions: 'Potrebna predhodna aktivacija zavarovanja na kartici',
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti/zavarovanje-spletnih.html'
    },
    {
      merchant: 'hotel triglav bled',
      domains: ['hoteltriglavbled.si'],
      discount: '10 % popust na nočitev',
      code: 'goodlife',
      conditions: 'Rezervacija prek hotela: info@hoteltriglavbled.si',
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'restavracija 1906',
      domains: ['hoteltriglavbled.si'],
      discount: '10 % popust na vsaj 4-hodno večerjo',
      code: 'goodlife',
      conditions: 'Popust ne velja za pijačo. Rezervacije: info@hoteltriglavbled.si',
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'trgovina cliché',
      domains: [],
      discount: '10 % popust na vsa oblačila znamke Cliché',
      code: 'goodlife',
      conditions: null,
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'david hair',
      domains: [],
      discount: '10 % popust na moško in žensko striženje',
      code: null,
      conditions: 'Tavčarjeva 4, Ljubljana. Rezervacije: 070 862 169',
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'noordung store',
      domains: ['noordung.com'],
      discount: '10 % popust na kolesa in kolesarsko opremo',
      code: 'goodlife',
      conditions: null,
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'generali zame',
      domains: ['generali.si'],
      discount: 'Do 35 % popusta na izbrana zavarovanja zavarovalnice Generali',
      code: null,
      conditions: 'Popust pridobite kot član programa Generali ZAME',
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'weekend max mara',
      domains: ['weekendmaxmara.com'],
      discount: '10 % popust ob nakupu nad 200 €',
      code: null,
      conditions: 'Velja za redne cene; popusti se izključujejo. Popust se obračuna pri blagajni ob predložitvi kartice Mastercard World in plačilu z njo',
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'eichholtz by barker home',
      domains: [],
      discount: '10 % popust v salonu',
      code: 'goodlife',
      conditions: 'Palača Schellenburg, Župančičeva 17, Ljubljana',
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'steklarna rogaška',
      domains: ['steklarna-rogaska.si'],
      discount: '10 % popust na spletni nakup nad 50 €',
      code: 'Goodlife',
      conditions: 'Velja v spletni trgovini www.steklarna-rogaska.si/shop',
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'mercedes benz',
      domains: ['shop.mercedes-benz.com'],
      discount: '10 % popust na nakup kolekcije Mercedes Benz v spletni trgovini',
      code: null,
      conditions: null,
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'mj&v tourism (spirito santo hoteli)',
      domains: ['spiritosantorovinj.com'],
      discount: '15 % popust ob nočitvi v hotelih Spirito Santo Rovinj',
      code: null,
      conditions: 'Velja v primeru direktne rezervacije',
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'terme čatež',
      domains: ['terme-catez.si'],
      discount: '10 % popust na redne cene nastanitev',
      code: 'goodlife',
      conditions: 'Rezervacije na spletni strani terme-catez.si',
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'art hotel tartini',
      domains: ['arthoteltartini.com'],
      discount: '15 % popust za rezervacije nočitev z zajtrkom (med tednom)',
      code: 'goodlife',
      conditions: 'Rezervacija prek spletne strani arthoteltartini.com ali recepcije (05 671 1000, welcome@arthoteltartini.com). Popust ne velja v primeru rezervacije prek drugih ponudnikov (npr. Booking.com)',
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'restavracije kaval group (ljubljana)',
      domains: ['kaval-group.si'],
      discount: '10 % popust',
      code: null,
      conditions: 'Velja v: Restavracija Angel, PEN KLUB restavracija, Gostilnica in pizzerija Kaval, Grajska vinoteka in Hram, Gostilna Pri Trubarjevi mami, Catering Kaval',
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'slaščičarne lolita',
      domains: ['lolitacafe.si'],
      discount: '10 % popust',
      code: null,
      conditions: null,
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'kavarne kaval group (ljubljana)',
      domains: ['kaval-group.si'],
      discount: '10 % popust',
      code: null,
      conditions: 'Velja v: Sax Pub in hostel, Caffe Bienale, Paviljon, Vrt Lily Novy, Kavarna MAO, Špica caffe, Kavarnica Kaval Club, Biljardnica Kaval',
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'stevo hair salon',
      domains: [],
      discount: '10 % popust na vse frizerske storitve',
      code: null,
      conditions: 'Rezervacije: 01 431 51 38',
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'vzgoja.si',
      domains: ['vzgoja.si'],
      discount: '50 % popust na popoln program za vzgojo otrok',
      code: 'goodlife',
      conditions: null,
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'dinner in the dark',
      domains: ['dinnerinthedark.si'],
      discount: '10 % popust na nakup večerje v temi',
      code: 'goodlife',
      conditions: null,
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'bear watching slovenia',
      domains: ['bearwatchingslovenia.com'],
      discount: '10 % popust na ogled medvedov v naravi',
      code: 'goodlife',
      conditions: null,
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'golden tree',
      domains: ['goldentree.si'],
      discount: '10 % popust na izdelke iz spletne trgovine',
      code: 'goodlife',
      conditions: null,
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: '4p fitnes',
      domains: [],
      discount: '30 % popust na redne cene iz cenika',
      code: null,
      conditions: 'Koriščenje ugodnosti: vuckovic@4p-fitness.com',
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'vadba reset studio',
      domains: [],
      discount: '20 % popust na paket 10 individualnih vadb (400 € namesto 500 €)',
      code: null,
      conditions: 'Koriščenje ugodnosti: 040 893 531',
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'časnik delo',
      domains: ['delo.si'],
      discount: '20 % popust na letni paket Delo Digital',
      code: null,
      conditions: null,
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'modna trgovina ponorelii',
      domains: ['ponorelii.com'],
      discount: '10 % popust na vse izdelke',
      code: 'goodlife',
      conditions: null,
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    }
  ],

  'Mastercard World Elite': [
    {
      merchant: 'zlato runo',
      domains: ['zlatoruno.si'],
      discount: '10 % popust na vso kulinarično ponudbo',
      code: null,
      conditions: 'Gruzijska restavracija; popust za imetnike kartic Mastercard World in World Elite',
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'lifestyle trgovina parada',
      domains: [],
      discount: '10 % popust na vse izdelke',
      code: 'goodlife',
      conditions: null,
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'frizerski salon mosquito',
      domains: [],
      discount: '10 % popust na vse frizerske storitve',
      code: 'goodlife',
      conditions: null,
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'letališki poslovni salon ljubljana',
      domains: ['lju-airport.si'],
      discount: 'Brezplačen vstop v letališki poslovni salon na letališču Jože Pučnik',
      code: null,
      conditions: 'Brezplačno za Mastercard World Elite; za Mastercard World vstop možen ob plačilu',
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti/letali-ki-poslovni-salon.html'
    },
    {
      merchant: 'mastercard hitri prehod (fast track)',
      domains: [],
      discount: 'Brezplačen prednostni varnostni prehod na mednarodnih letališčih',
      code: null,
      conditions: 'World: 10x letno brezplačno; World Elite: neomejeno. Otroci do 18 let brezplačno. Rezervacija prek aplikacije Mastercard Travel Experiences',
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti/hitri-prehod.html'
    },
    {
      merchant: 'mastercard zavarovanje spletnih nakupov',
      domains: [],
      discount: 'Brezplačno zavarovanje spletnih nakupov (zaščita pri nakupu, podaljšana garancija, garancija najugodnejše cene)',
      code: null,
      conditions: 'Potrebna predhodna aktivacija zavarovanja na kartici',
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti/zavarovanje-spletnih.html'
    },
    {
      merchant: 'hotel triglav bled',
      domains: ['hoteltriglavbled.si'],
      discount: '10 % popust na nočitev',
      code: 'goodlife',
      conditions: 'Rezervacija prek hotela: info@hoteltriglavbled.si',
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'restavracija 1906',
      domains: ['hoteltriglavbled.si'],
      discount: '10 % popust na vsaj 4-hodno večerjo',
      code: 'goodlife',
      conditions: 'Popust ne velja za pijačo. Rezervacije: info@hoteltriglavbled.si',
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'trgovina cliché',
      domains: [],
      discount: '10 % popust na vsa oblačila znamke Cliché',
      code: 'goodlife',
      conditions: null,
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'david hair',
      domains: [],
      discount: '10 % popust na moško in žensko striženje',
      code: null,
      conditions: 'Tavčarjeva 4, Ljubljana. Rezervacije: 070 862 169',
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'noordung store',
      domains: ['noordung.com'],
      discount: '10 % popust na kolesa in kolesarsko opremo',
      code: 'goodlife',
      conditions: null,
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'generali zame',
      domains: ['generali.si'],
      discount: 'Do 35 % popusta na izbrana zavarovanja zavarovalnice Generali',
      code: null,
      conditions: 'Popust pridobite kot član programa Generali ZAME',
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'weekend max mara',
      domains: ['weekendmaxmara.com'],
      discount: '10 % popust ob nakupu nad 200 €',
      code: null,
      conditions: 'Velja za redne cene; popusti se izključujejo. Popust se obračuna pri blagajni ob predložitvi kartice Mastercard World in plačilu z njo',
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'eichholtz by barker home',
      domains: [],
      discount: '10 % popust v salonu',
      code: 'goodlife',
      conditions: 'Palača Schellenburg, Župančičeva 17, Ljubljana',
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'steklarna rogaška',
      domains: ['steklarna-rogaska.si'],
      discount: '10 % popust na spletni nakup nad 50 €',
      code: 'Goodlife',
      conditions: 'Velja v spletni trgovini www.steklarna-rogaska.si/shop',
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'mercedes benz',
      domains: ['shop.mercedes-benz.com'],
      discount: '10 % popust na nakup kolekcije Mercedes Benz v spletni trgovini',
      code: null,
      conditions: null,
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'mj&v tourism (spirito santo hoteli)',
      domains: ['spiritosantorovinj.com'],
      discount: '15 % popust ob nočitvi v hotelih Spirito Santo Rovinj',
      code: null,
      conditions: 'Velja v primeru direktne rezervacije',
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'terme čatež',
      domains: ['terme-catez.si'],
      discount: '10 % popust na redne cene nastanitev',
      code: 'goodlife',
      conditions: 'Rezervacije na spletni strani terme-catez.si',
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'art hotel tartini',
      domains: ['arthoteltartini.com'],
      discount: '15 % popust za rezervacije nočitev z zajtrkom (med tednom)',
      code: 'goodlife',
      conditions: 'Rezervacija prek spletne strani arthoteltartini.com ali recepcije (05 671 1000, welcome@arthoteltartini.com). Popust ne velja v primeru rezervacije prek drugih ponudnikov (npr. Booking.com)',
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'restavracije kaval group (ljubljana)',
      domains: ['kaval-group.si'],
      discount: '10 % popust',
      code: null,
      conditions: 'Velja v: Restavracija Angel, PEN KLUB restavracija, Gostilnica in pizzerija Kaval, Grajska vinoteka in Hram, Gostilna Pri Trubarjevi mami, Catering Kaval',
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'slaščičarne lolita',
      domains: ['lolitacafe.si'],
      discount: '10 % popust',
      code: null,
      conditions: null,
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'kavarne kaval group (ljubljana)',
      domains: ['kaval-group.si'],
      discount: '10 % popust',
      code: null,
      conditions: 'Velja v: Sax Pub in hostel, Caffe Bienale, Paviljon, Vrt Lily Novy, Kavarna MAO, Špica caffe, Kavarnica Kaval Club, Biljardnica Kaval',
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'stevo hair salon',
      domains: [],
      discount: '10 % popust na vse frizerske storitve',
      code: null,
      conditions: 'Rezervacije: 01 431 51 38',
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'vzgoja.si',
      domains: ['vzgoja.si'],
      discount: '50 % popust na popoln program za vzgojo otrok',
      code: 'goodlife',
      conditions: null,
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'dinner in the dark',
      domains: ['dinnerinthedark.si'],
      discount: '10 % popust na nakup večerje v temi',
      code: 'goodlife',
      conditions: null,
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'bear watching slovenia',
      domains: ['bearwatchingslovenia.com'],
      discount: '10 % popust na ogled medvedov v naravi',
      code: 'goodlife',
      conditions: null,
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'golden tree',
      domains: ['goldentree.si'],
      discount: '10 % popust na izdelke iz spletne trgovine',
      code: 'goodlife',
      conditions: null,
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: '4p fitnes',
      domains: [],
      discount: '30 % popust na redne cene iz cenika',
      code: null,
      conditions: 'Koriščenje ugodnosti: vuckovic@4p-fitness.com',
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'vadba reset studio',
      domains: [],
      discount: '20 % popust na paket 10 individualnih vadb (400 € namesto 500 €)',
      code: null,
      conditions: 'Koriščenje ugodnosti: 040 893 531',
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'časnik delo',
      domains: ['delo.si'],
      discount: '20 % popust na letni paket Delo Digital',
      code: null,
      conditions: null,
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    },
    {
      merchant: 'modna trgovina ponorelii',
      domains: ['ponorelii.com'],
      discount: '10 % popust na vse izdelke',
      code: 'goodlife',
      conditions: null,
      expires: null,
      link: 'https://www.mastercard.com/si/sl/osebno/najdi-kartico/prednosti-kartice/najbolj-e-ugodnosti.html'
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = BENEFITS_DATABASE;
}
