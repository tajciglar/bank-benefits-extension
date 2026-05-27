// benefits.js - Database of bank benefits
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
      merchant: 'nomago travel',
      domains: ['nomago.si', 'www.nomago.si'],
      discount: '10% popusta na vodena potovanja + 100 € popusta za namestitve nad 1000 €',
      code: 'OTPBANKA',
      conditions: 'Spletna rezervacija ali izbrane poslovalnice; ne velja za Fly&Stay.',
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
      merchant: 'nomago shuttle',
      domains: ['nomago.si', 'www.nomago.si'],
      discount: '6% popusta na prevoz do letališča',
      code: 'OTPBANKA',
      conditions: 'Spletna rezervacija.',
      expires: '2026-10-15',
      link: 'https://www.otpbanka.si/visa-ugodnosti'
    },
    {
      merchant: 'nomago bikes',
      domains: ['nomago.si', 'www.nomago.si'],
      discount: '20 € popusta ob sklenitvi letne članarine + 30 min brezplačne vožnje',
      code: 'OTPBANKA',
      conditions: 'Spletna rezervacija ali izbrane poslovalnice.',
      expires: '2026-10-15',
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
      merchant: 'nomago young/ISIC',
      domains: ['nomago.si', 'www.nomago.si'],
      discount: '100 € popusta na programe poletnega dela + 2% popusta na Camp California',
      code: 'OTPBANKA',
      conditions: 'Izbrane poslovalnice Nomago Travel.',
      expires: '2026-10-15',
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