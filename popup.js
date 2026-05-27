// popup.js — Popup logic for the Bank Card Benefits extension.
//
// The bank list is rendered as a typographic list grouped by card family
// (Slovenian banks, Visa tier, Mastercard tier). Each row is a button with
// a small marker that fills in when the bank is selected.

const EXT = typeof browser !== 'undefined' ? browser : chrome;

const availableBanks = Object.keys(BENEFITS_DATABASE);
const today = new Date().toISOString().slice(0, 10);

// Group definitions, in display order.
// Banks that don't match any explicit pattern fall under "Slovenske banke".
const GROUPS = [
  { label: 'Slovenske banke', match: (name) => !/^(visa|mastercard)\b/i.test(name) },
  { label: 'Visa', match: (name) => /^visa\b/i.test(name) },
  { label: 'Mastercard', match: (name) => /^mastercard\b/i.test(name) },
];

function groupedBanks() {
  return GROUPS.map((group) => ({
    label: group.label,
    banks: availableBanks.filter(group.match),
  })).filter((g) => g.banks.length > 0);
}

function activeBenefits(bank) {
  return (BENEFITS_DATABASE[bank] || []).filter(
    (b) => !b.expires || b.expires >= today
  );
}

function pluralizeSl(count, one, two, few, many) {
  // Slovenian has dual + plural agreement; falls back to "many" when needed.
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod100 === 1) return one;
  if (mod100 === 2) return two;
  if (mod100 === 3 || mod100 === 4) return few;
  return many;
}

function formatMerchantName(value) {
  if (!value) return 'Neznan ponudnik';
  // Title-case but preserve dots, ampersands, etc. as-is.
  return value
    .split(' ')
    .filter(Boolean)
    .map((word) => {
      // Don't uppercase things like ".com" or "&" (single non-letter starts).
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
      ? 'Ni izbranih kartic'
      : `${selectedBanks.length} ${pluralizeSl(
          selectedBanks.length,
          'izbrana kartica',
          'izbrani kartici',
          'izbrane kartice',
          'izbranih kartic'
        )}`;

  if (selectedBanks.length === 0) {
    modalBody.appendChild(
      el(
        'div',
        { className: 'empty-state' },
        el('div', { className: 'empty-state-icon', textContent: '∅' }),
        el('div', {
          className: 'empty-state-text',
          textContent:
            'Izberite vsaj eno kartico, da si tukaj ogledate svoje ugodnosti.',
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
              el('span', { className: 'code-label-small', textContent: 'koda' }),
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

document.addEventListener('DOMContentLoaded', () => {
  renderBankList();

  document.getElementById('viewAllBenefits').addEventListener('click', showAllBenefits);
  document.getElementById('closeModal').addEventListener('click', closeModal);
  document.getElementById('selectAllBanks').addEventListener('click', selectAllBanks);
  document.getElementById('clearAllBanks').addEventListener('click', clearAllBanks);

  // Escape closes modal (full-bleed UI — no click-outside region)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
});
