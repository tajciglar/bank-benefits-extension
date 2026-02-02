// popup.js - Logic for the extension popup

// Get available banks from benefits database
const availableBanks = Object.keys(BENEFITS_DATABASE);

// Load selected banks from storage
async function loadSelectedBanks() {
  return new Promise((resolve) => {
    chrome.storage.sync.get(['selectedBanks'], (result) => {
      resolve(result.selectedBanks || []);
    });
  });
}

// Save selected banks to storage
async function saveSelectedBanks(banks) {
  return new Promise((resolve) => {
    chrome.storage.sync.set({ selectedBanks: banks }, resolve);
  });
}

// Render bank list
async function renderBankList() {
  const selectedBanks = await loadSelectedBanks();
  const bankList = document.getElementById('bankList');
  
  bankList.innerHTML = '';
  
  availableBanks.forEach(bank => {
    const benefitCount = BENEFITS_DATABASE[bank].length;
    const isSelected = selectedBanks.includes(bank);
    
    const bankItem = document.createElement('div');
    bankItem.className = `bank-item ${isSelected ? 'selected' : ''}`;
    bankItem.dataset.bank = bank;
    
    bankItem.innerHTML = `
      <div class="bank-checkbox"></div>
      <div class="bank-info">
        <div class="bank-name">${bank}</div>
        <div class="bank-benefits-count">${benefitCount} ${benefitCount === 1 ? 'ugodnost' : 'ugodnosti'}</div>
      </div>
    `;
    
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
    totalBenefits += BENEFITS_DATABASE[bank].length;
  });
  
  document.getElementById('benefitCount').textContent = totalBenefits;
}

// Show all benefits modal
async function showAllBenefits() {
  const selectedBanks = await loadSelectedBanks();
  const modal = document.getElementById('benefitsModal');
  const modalBody = document.getElementById('modalBody');
  
  modalBody.innerHTML = '';
  
  if (selectedBanks.length === 0) {
    modalBody.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🏦</div>
        <div class="empty-state-text">
          Izberite vsaj eno banko, da si ogledate ugodnosti.
        </div>
      </div>
    `;
  } else {
    selectedBanks.forEach(bank => {
      const benefits = BENEFITS_DATABASE[bank];
      
      const groupDiv = document.createElement('div');
      groupDiv.className = 'benefit-group';
      
      let groupHTML = `<div class="benefit-group-title">${bank}</div>`;
      
      benefits.forEach(benefit => {
        groupHTML += `
          <div class="benefit-card">
            <div class="benefit-merchant">${benefit.merchant}</div>
            <div class="benefit-discount">${benefit.discount}</div>
            ${benefit.code ? `
              <div class="benefit-code-display">
                <span class="code-label-small">Koda:</span>
                <span class="code-value-small">${benefit.code}</span>
              </div>
            ` : ''}
            ${benefit.conditions ? `
              <div class="benefit-conditions-small">${benefit.conditions}</div>
            ` : ''}
          </div>
        `;
      });
      
      groupDiv.innerHTML = groupHTML;
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
  
  // Close modal when clicking outside
  document.getElementById('benefitsModal').addEventListener('click', (e) => {
    if (e.target.id === 'benefitsModal') {
      closeModal();
    }
  });
});
