// popup.js - Logic for the extension popup

const EXT = typeof browser !== 'undefined' ? browser : chrome;

const availableBanks = Object.keys(BENEFITS_DATABASE);
const today = new Date().toISOString().slice(0, 10);

function activeBenefits(bank) {
  return BENEFITS_DATABASE[bank].filter(b => !b.expires || b.expires >= today);
}

function pluralize(count, singular, plural) {
  return count === 1 ? singular : plural;
}

function formatMerchantName(value) {
  if (!value) {
    return 'Neznan ponudnik';
  }

  return value
    .split(' ')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Load selected banks from storage
async function loadSelectedBanks() {
  const result = await EXT.storage.sync.get(['selectedBanks']);
  return result.selectedBanks || [];
}

// Save selected banks to storage
async function saveSelectedBanks(banks) {
  await EXT.storage.sync.set({ selectedBanks: banks });
}

function el(tag, attrs, ...children) {
  const node = document.createElement(tag);
  if (attrs) {
    for (const [key, value] of Object.entries(attrs)) {
      if (key === 'className') node.className = value;
      else if (key === 'textContent') node.textContent = value;
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

  availableBanks.forEach(bank => {
    const benefitCount = activeBenefits(bank).length;
    const isSelected = selectedBanks.includes(bank);

    const bankItem = el('button', {
      type: 'button',
      className: 'bank-item' + (isSelected ? ' selected' : ''),
      'data-bank': bank,
      'aria-pressed': String(isSelected)
    },
      el('div', { className: 'bank-checkbox' }),
      el('div', { className: 'bank-info' },
        el('div', { className: 'bank-name', textContent: bank }),
        el('div', {
          className: 'bank-benefits-count',
          textContent: benefitCount + ' ' + pluralize(benefitCount, 'ugodnost', 'ugodnosti')
        })
      )
    );

    bankItem.addEventListener('click', () => toggleBank(bank));
    bankList.appendChild(bankItem);
  });

  updateStats();
}

// Toggle bank selection
async function toggleBank(bank) {
  const selectedBanks = await loadSelectedBanks();
  
  const index = selectedBanks.indexOf(bank);
  if (index > -1) {
    selectedBanks.splice(index, 1);
  } else {
    selectedBanks.push(bank);
  }
  
  await saveSelectedBanks(selectedBanks);
  renderBankList();
}

// Update statistics
async function updateStats() {
  const selectedBanks = await loadSelectedBanks();
  
  let totalBenefits = 0;
  selectedBanks.forEach(bank => {
    totalBenefits += activeBenefits(bank).length;
  });
  
  document.getElementById('benefitCount').textContent = totalBenefits;
  document.getElementById('selectedBankCount').textContent = selectedBanks.length;
  document.getElementById('availableBankCount').textContent = availableBanks.length;
  document.getElementById('selectedBenefitCount').textContent = totalBenefits;
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
  modalSubtitle.textContent = selectedBanks.length === 0
    ? 'Ni izbranih bank'
    : selectedBanks.length + ' ' + pluralize(selectedBanks.length, 'izbrana banka', 'izbrane banke');

  if (selectedBanks.length === 0) {
    modalBody.appendChild(
      el('div', { className: 'empty-state' },
        el('div', { className: 'empty-state-icon', textContent: '\u{1F3E6}' }),
        el('div', { className: 'empty-state-text', textContent: 'Izberite vsaj eno banko, da si ogledate ugodnosti.' })
      )
    );
  } else {
    selectedBanks.forEach(bank => {
      const benefits = activeBenefits(bank);
      const groupDiv = el('div', { className: 'benefit-group' },
        el('div', { className: 'benefit-group-title', textContent: bank })
      );

      benefits.forEach(benefit => {
        const card = el('div', { className: 'benefit-card' },
          el('div', { className: 'benefit-merchant', textContent: formatMerchantName(benefit.merchant) }),
          el('div', { className: 'benefit-discount', textContent: benefit.discount })
        );

        if (benefit.code) {
          card.appendChild(el('div', { className: 'benefit-code-display' },
            el('span', { className: 'code-label-small', textContent: 'Koda:' }),
            el('span', { className: 'code-value-small', textContent: benefit.code })
          ));
        }

        if (benefit.conditions) {
          card.appendChild(el('div', { className: 'benefit-conditions-small', textContent: benefit.conditions }));
        }

        groupDiv.appendChild(card);
      });

      modalBody.appendChild(groupDiv);
    });
  }

  modal.style.display = 'flex';
}

// Close modal
function closeModal() {
  document.getElementById('benefitsModal').style.display = 'none';
}

// Initialize popup
document.addEventListener('DOMContentLoaded', () => {
  renderBankList();
  
  document.getElementById('viewAllBenefits').addEventListener('click', showAllBenefits);
  document.getElementById('closeModal').addEventListener('click', closeModal);
  document.getElementById('selectAllBanks').addEventListener('click', selectAllBanks);
  document.getElementById('clearAllBanks').addEventListener('click', clearAllBanks);
  
  // Close modal when clicking outside
  document.getElementById('benefitsModal').addEventListener('click', (e) => {
    if (e.target.id === 'benefitsModal') {
      closeModal();
    }
  });
});
