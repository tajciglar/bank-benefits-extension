// Simulate content.js matching logic against real merchant URLs.
// Pretends user has selected ALL banks/tiers, so every benefit can fire.

const BENEFITS_DATABASE = require('../benefits.js');

const TEST_URLS = [
  // Slovenian merchants
  ['https://www.booking.com/searchresults.html', ['booking.com']],
  ['https://hotelbohinj.si/', ['Hotel Bohinj']],
  ['https://www.nlb.si/', ['NLB main site']],
  ['https://www.nc-planica.si/cenik', ['Planica']],
  ['https://www.afrodita.eu/sl', ['Afrodita']],
  ['https://www.peaksport.si/superga', ['Peak Sport']],
  ['https://comma.si/produkt/123', ['Comma — OTP']],
  ['https://www.mimovrste.com/', ['Mimovrste — Business']],
  ['https://www.finance.si/article/123', ['Časnik Finance']],
  ['https://workspace.google.com/business/', ['Google Workspace']],
  ['https://www.airalo.com/europe-esim', ['Airalo']],
  ['https://www.amadriapark.com/hotels', ['Amadria Park']],
  ['https://www.terme-dobrna.si/wellness', ['Terme Dobrna']],
  ['https://www.rimske-terme.si/', ['Rimske Terme']],
  ['https://www.eventim.si/events/123', ['Eventim']],
  ['https://www.qushin.eu/products/pets', ['Qushin PETS']],
  ['https://avg.com/en-us/homepage', ['AVG']],
  ['https://1nadan.si/ponudbe/danes', ['1nadan — NLB']],
  ['https://www.dh.si/', ['DH self — should not match']],
  ['https://www.example.com/', ['Random site — no match expected']],
];

const today = new Date().toISOString().slice(0, 10);

function domainOf(url) {
  return new URL(url).hostname.toLowerCase();
}

function matchBenefits(url, selectedBanks) {
  const currentDomain = domainOf(url);
  const hits = [];
  for (const bank of selectedBanks) {
    const list = BENEFITS_DATABASE[bank] || [];
    for (const benefit of list) {
      if (benefit.expires && benefit.expires < today) continue;
      for (const domain of (benefit.domains || [])) {
        if (currentDomain === domain || currentDomain.endsWith('.' + domain)) {
          hits.push({ bank, merchant: benefit.merchant, discount: benefit.discount });
          break;
        }
      }
    }
  }
  return hits;
}

const allBanks = Object.keys(BENEFITS_DATABASE);
console.log(`User selects all ${allBanks.length} banks/tiers (worst case)\n`);
console.log('=' . repeat(80));

let totalMatches = 0;
let urlsWithMatches = 0;

for (const [url, label] of TEST_URLS) {
  const hits = matchBenefits(url, allBanks);
  totalMatches += hits.length;
  if (hits.length > 0) urlsWithMatches++;

  console.log(`\n${label[0]}`);
  console.log(`  URL: ${url}`);
  console.log(`  → ${hits.length} benefit(s)`);
  for (const h of hits.slice(0, 5)) {
    console.log(`     [${h.bank}] ${h.merchant}: ${h.discount.slice(0, 70)}`);
  }
  if (hits.length > 5) console.log(`     ... +${hits.length - 5} more`);
}

console.log('\n' + '='.repeat(80));
console.log(`\nSummary: ${urlsWithMatches}/${TEST_URLS.length} URLs matched, ${totalMatches} total benefits fired`);

// Now expiration check: count expired benefits sitting in DB
let expiredCount = 0;
for (const list of Object.values(BENEFITS_DATABASE)) {
  for (const b of list) {
    if (b.expires && b.expires < today) expiredCount++;
  }
}
console.log(`Expired benefits in DB (filtered out at runtime): ${expiredCount}`);
