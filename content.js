// content.js - Runs on every webpage to check for benefits

// Load benefits database
let BENEFITS_DATABASE = {};

// Function to get current domain
function getCurrentDomain() {
  return window.location.hostname.toLowerCase();
}

// Function to check if current site has benefits
async function checkForBenefits() {
  const currentDomain = getCurrentDomain();
  
  // Get user's selected banks from storage
  const result = await chrome.storage.sync.get(['selectedBanks']);
  const selectedBanks = result.selectedBanks || [];
  
  if (selectedBanks.length === 0) {
    return; // No banks selected, don't show anything
  }
  
  // Check if current domain matches any benefits
  const availableBenefits = [];
  
  for (const bank of selectedBanks) {
    const bankBenefits = BENEFITS_DATABASE[bank] || [];
    
    for (const benefit of bankBenefits) {
      // Check if current domain matches any of the benefit domains
      for (const domain of benefit.domains) {
        if (currentDomain === domain || currentDomain.endsWith('.' + domain)) {
          availableBenefits.push({
            bank: bank,
            ...benefit
          });
          break;
        }
      }
    }
  }
  
  // If benefits found, show notification
  if (availableBenefits.length > 0) {
    showBenefitNotification(availableBenefits);
  }
}

// Function to show notification on page
function showBenefitNotification(benefits) {
  // Remove existing notification if any
  const existingNotification = document.getElementById('bank-benefit-notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  
  // Create notification element
  const notification = document.createElement('div');
  notification.id = 'bank-benefit-notification';
  notification.className = 'bank-benefit-notification';
  
  // Build notification content
  let content = `
    <div class="notification-header">
      <span class="notification-icon">💳</span>
      <span class="notification-title">Popust na voljo!</span>
      <button class="notification-close" id="close-notification">×</button>
    </div>
    <div class="notification-body">
  `;
  
  benefits.forEach((benefit, index) => {
    content += `
      <div class="benefit-item ${index > 0 ? 'benefit-divider' : ''}">
        <div class="benefit-bank">${benefit.bank}</div>
        <div class="benefit-discount">${benefit.discount}</div>
        ${benefit.code ? `
          <div class="benefit-code">
            <span class="code-label">Koda:</span>
            <span class="code-value" id="code-${index}">${benefit.code}</span>
            <button class="copy-button" data-code="${benefit.code}" data-index="${index}">Kopiraj</button>
          </div>
        ` : ''}
        ${benefit.conditions ? `<div class="benefit-conditions">${benefit.conditions}</div>` : ''}
      </div>
    `;
  });
  
  content += `
    </div>
  `;
  
  notification.innerHTML = content;
  
  // Add to page
  document.body.appendChild(notification);
  
  // Add event listeners
  document.getElementById('close-notification').addEventListener('click', () => {
    notification.remove();
  });
  
  // Add copy button listeners
  document.querySelectorAll('.copy-button').forEach(button => {
    button.addEventListener('click', (e) => {
      const code = e.target.getAttribute('data-code');
      const index = e.target.getAttribute('data-index');
      
      // Copy to clipboard
      navigator.clipboard.writeText(code).then(() => {
        e.target.textContent = '✓ Kopirano';
        e.target.classList.add('copied');
        
        setTimeout(() => {
          e.target.textContent = 'Kopiraj';
          e.target.classList.remove('copied');
        }, 2000);
      });
    });
  });
  
  // Auto-hide after 15 seconds (optional)
  setTimeout(() => {
    if (document.getElementById('bank-benefit-notification')) {
      notification.style.opacity = '0';
      setTimeout(() => notification.remove(), 300);
    }
  }, 15000);
}

// Initialize
async function init() {
  // Fetch benefits database from background script
  const response = await chrome.runtime.sendMessage({ action: 'getBenefits' });
  BENEFITS_DATABASE = response.benefits;
  
  // Check for benefits on page load
  checkForBenefits();
}

// Run when page is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
