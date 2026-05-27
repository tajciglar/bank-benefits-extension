// popup.js — Popup logic for the Bank Card Benefits extension.
//
// The bank list is rendered as a typographic list grouped by card family
// (Slovenian banks, Visa tier, Mastercard tier). Each row is a button with
// a small marker that fills in when the bank is selected.
//
// UI text is bilingual (Slovenian default, English available). Benefit
// content stays in its source language (Slovenian) — translating bank
// merchant copy would be lossy.

const EXT = typeof browser !== 'undefined' ? browser : chrome;

const availableBanks = Object.keys(BENEFITS_DATABASE);
const today = new Date().toISOString().slice(0, 10);

// ── i18n ──────────────────────────────────────────────────────────────

const TRANSLATIONS = {
  sl: {
    title: 'Ugodnosti kartic',
    subtitle: 'Tih opomnik, ko obiščete trgovino, kjer vam vaša banka prizna popust.',
    'stat.benefits': 'aktivnih ugodnosti',
    'stat.cards': 'izbranih kartic',
    myCards: 'Moje kartice',
    selectAll: 'Vse',
    clear: 'Počisti',
    viewAll: 'Preglej vse izbrane ugodnosti',
    'modal.title': 'Vse ugodnosti',
    'modal.close': 'Nazaj',
    'group.slovenian': 'Slovenske banke',
    'group.visa': 'Visa',
    'group.mastercard': 'Mastercard',
    'modal.empty.subtitle': 'Ni izbranih kartic',
    'modal.empty.text': 'Izberite vsaj eno kartico, da si tukaj ogledate svoje ugodnosti.',
    'modal.subtitle.cards': (n) => `${n} ${pluralizeSl(n,'izbrana kartica','izbrani kartici','izbrane kartice','izbranih kartic')}`,
    'benefit.code': 'koda',
  },
  en: {
    title: 'Card benefits',
    subtitle: 'A quiet nudge when you visit a store where your bank gives you a discount.',
    'stat.benefits': 'active benefits',
    'stat.cards': 'cards selected',
    myCards: 'My cards',
    selectAll: 'All',
    clear: 'Clear',
    viewAll: 'View all selected benefits',
    'modal.title': 'All benefits',
    'modal.close': 'Back',
    'group.slovenian': 'Slovenian banks',
    'group.visa': 'Visa',
    'group.mastercard': 'Mastercard',
    'modal.empty.subtitle': 'No cards selected',
    'modal.empty.text': 'Select at least one card to see your benefits here.',
    'modal.subtitle.cards': (n) => `${n} card${n === 1 ? '' : 's'} selected`,
    'benefit.code': 'code',
  },
};

let currentLang = 'sl';

function t(key, ...args) {
  const v = TRANSLATIONS[currentLang][key];
  if (typeof v === 'function') return v(...args);
  return v || key;
}

function pluralizeSl(count, one, two, few, many) {
  // Slovenian plural agreement
  const mod100 = count % 100;
  if (mod100 === 1) return one;
  if (mod100 === 2) return two;
  if (mod100 === 3 || mod100 === 4) return few;
  return many;
}

function applyTranslations() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    el.setAttribute('aria-label', t(el.dataset.i18nAria));
  });
  // Reflect active language on the toggle
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    const active = btn.dataset.lang === currentLang;
    btn.setAttribute('aria-pressed', String(active));
    btn.classList.toggle('active', active);
  });
}

async function loadLang() {
  const result = await EXT.storage.sync.get(['lang']);
  return result.lang || 'sl';
}

async function saveLang(lang) {
  await EXT.storage.sync.set({ lang });
}

async function setLang(lang) {
  if (lang === currentLang) return;
  currentLang = lang;
  await saveLang(lang);
  applyTranslations();
  renderBankList();   // re-render group labels, which use t()
}

// ── Bank grouping ─────────────────────────────────────────────────────

const GROUPS = [
  { labelKey: 'group.slovenian', match: (name) => !/^(visa|mastercard)\b/i.test(name) },
  { labelKey: 'group.visa',      match: (name) => /^visa\b/i.test(name) },
  { labelKey: 'group.mastercard', match: (name) => /^mastercard\b/i.test(name) },
];

function groupedBanks() {
  return GROUPS.map((group) => ({
    label: t(group.labelKey),
    banks: availableBanks.filter(group.match),
  })).filter((g) => g.banks.length > 0);
}

function activeBenefits(bank) {
  return (BENEFITS_DATABASE[bank] || []).filter(
    (b) => !b.expires || b.expires >= today
  );
}

function formatMerchantName(value) {
  if (!value) return currentLang === 'sl' ? 'Neznan ponudnik' : 'Unknown merchant';
  return value
    .split(' ')
    .filter(Boolean)
    .map((word) => {
      const first = word.charAt(0);
      if (!/[a-zčšž]/i.test(first)) return word;
      return first.toUpperCase() + word.slice(1);
    })
    .join(' ');
}

async function loadSelectedBanks() {
  const result = await EXT.storage.sync.get(['selectedBanks']);
  return result.selectedBanks || [];
}

async function saveSelectedBanks(banks) {
  await EXT.storage.sync.set({ selectedBanks: banks });
}

function el(tag, attrs, ...children) {
  const node = document.createElement(tag);
  if (attrs) {
    for (const [key, value] of Object.entries(attrs)) {
      if (key === 'className') node.className = value;
      else if (key === 'textContent') node.textContent = value;
      else if (key === 'innerHTML') node.innerHTML = value;
      else node.setAttribute(key, value);
    }
  }
  for (const child of children) {
    if (typeof child === 'string') node.appendChild(document.createTextNode(child));
    else if (child) node.appendChild(child);
  }
  return node;
}

async function renderBankList() {
  const selectedBanks = await loadSelectedBanks();
  const bankList = document.getElementById('bankList');
  bankList.innerHTML = '';

  for (const group of groupedBanks()) {
    bankList.appendChild(
      el('div', { className: 'bank-group-label', textContent: group.label })
    );

    for (const bank of group.banks) {
      const benefitCount = activeBenefits(bank).length;
      const isSelected = selectedBanks.includes(bank);

      const item = el(
        'button',
        {
          type: 'button',
          className: 'bank-item' + (isSelected ? ' selected' : ''),
          'data-bank': bank,
          'aria-pressed': String(isSelected),
        },
        el('span', { className: 'bank-checkbox', 'aria-hidden': 'true' }),
        el('span', { className: 'bank-name', textContent: bank }),
        el('span', {
          className: 'bank-benefits-count',
          textContent: String(benefitCount),
        })
      );

      item.addEventListener('click', () => toggleBank(bank));
      bankList.appendChild(item);
    }
  }

  updateStats();
}

async function toggleBank(bank) {
  const selectedBanks = await loadSelectedBanks();
  const index = selectedBanks.indexOf(bank);
  if (index > -1) selectedBanks.splice(index, 1);
  else selectedBanks.push(bank);
  await saveSelectedBanks(selectedBanks);
  renderBankList();
}

async function updateStats() {
  const selectedBanks = await loadSelectedBanks();
  let totalBenefits = 0;
  selectedBanks.forEach((bank) => {
    totalBenefits += activeBenefits(bank).length;
  });

  const benefitEl = document.getElementById('benefitCount');
  const bankEl = document.getElementById('selectedBankCount');
  if (benefitEl) benefitEl.textContent = String(totalBenefits);
  if (bankEl) bankEl.textContent = String(selectedBanks.length);
}

async function selectAllBanks() {
  await saveSelectedBanks([...availableBanks]);
  renderBankList();
}

async function clearAllBanks() {
  await saveSelectedBanks([]);
  renderBankList();
}

async function showAllBenefits() {
  const selectedBanks = await loadSelectedBanks();
  const modal = document.getElementById('benefitsModal');
  const modalBody = document.getElementById('modalBody');
  const modalSubtitle = document.getElementById('modalSubtitle');

  modalBody.innerHTML = '';
  modalSubtitle.textContent =
    selectedBanks.length === 0
      ? t('modal.empty.subtitle')
      : t('modal.subtitle.cards', selectedBanks.length);

  if (selectedBanks.length === 0) {
    modalBody.appendChild(
      el(
        'div',
        { className: 'empty-state' },
        el('div', { className: 'empty-state-icon', textContent: '∅' }),
        el('div', {
          className: 'empty-state-text',
          textContent: t('modal.empty.text'),
        })
      )
    );
  } else {
    selectedBanks.forEach((bank) => {
      const benefits = activeBenefits(bank);
      const groupDiv = el(
        'div',
        { className: 'benefit-group' },
        el('div', { className: 'benefit-group-title', textContent: bank })
      );

      benefits.forEach((benefit) => {
        const card = el(
          'div',
          { className: 'benefit-card' },
          el('div', {
            className: 'benefit-merchant',
            textContent: formatMerchantName(benefit.merchant),
          }),
          el('div', {
            className: 'benefit-discount',
            textContent: benefit.discount,
          })
        );

        if (benefit.code) {
          card.appendChild(
            el(
              'div',
              { className: 'benefit-code-display' },
              el('span', { className: 'code-label-small', textContent: t('benefit.code') }),
              el('span', {
                className: 'code-value-small',
                textContent: benefit.code,
              })
            )
          );
        }

        if (benefit.conditions) {
          card.appendChild(
            el('div', {
              className: 'benefit-conditions-small',
              textContent: benefit.conditions,
            })
          );
        }

        groupDiv.appendChild(card);
      });

      modalBody.appendChild(groupDiv);
    });
  }

  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('benefitsModal').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', async () => {
  currentLang = await loadLang();
  applyTranslations();
  renderBankList();

  document.getElementById('viewAllBenefits').addEventListener('click', showAllBenefits);
  document.getElementById('closeModal').addEventListener('click', closeModal);
  document.getElementById('selectAllBanks').addEventListener('click', selectAllBanks);
  document.getElementById('clearAllBanks').addEventListener('click', clearAllBanks);

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
});
