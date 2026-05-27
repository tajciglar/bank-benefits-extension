// content.js - Runs on every webpage to check for benefits

const EXT = typeof browser !== 'undefined' ? browser : chrome;

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
  const result = await EXT.storage.sync.get(['selectedBanks']);
  const selectedBanks = result.selectedBanks || [];
  
  if (selectedBanks.length === 0) {
    return; // No banks selected, don't show anything
  }
  
  // Check if current domain matches any benefits
  const availableBenefits = [];
  
  for (const bank of selectedBanks) {
    const bankBenefits = BENEFITS_DATABASE[bank] || [];
    
    const today = new Date().toISOString().slice(0, 10);

    for (const benefit of bankBenefits) {
      if (benefit.expires && benefit.expires < today) continue;

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

function showBenefitNotification(benefits) {
  const existingNotification = document.getElementById('bank-benefit-notification');
  if (existingNotification) {
    existingNotification.remove();
  }

  const closeBtn = el('button', {
    className: 'notification-close',
    'aria-label': 'Zapri obvestilo',
    type: 'button',
    textContent: '×'
  });

  const header = el('div', { className: 'notification-header' },
    el('div', null,
      el('div', { className: 'notification-eyebrow', textContent: 'Bank benefit found' }),
      el('span', { className: 'notification-title', textContent: 'Popust na voljo' })
    ),
    closeBtn
  );

  const body = el('div', { className: 'notification-body' });

  benefits.forEach((benefit, index) => {
    const item = el('div', { className: 'benefit-item' + (index > 0 ? ' benefit-divider' : '') },
      el('div', { className: 'benefit-bank', textContent: benefit.bank }),
      el('div', { className: 'benefit-discount', textContent: benefit.discount })
    );

    if (benefit.code) {
      const copyBtn = el('button', {
        className: 'copy-button',
        type: 'button',
        textContent: 'Kopiraj'
      });
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(benefit.code).then(() => {
          copyBtn.textContent = '✓ Kopirano';
          copyBtn.classList.add('copied');
          setTimeout(() => {
            copyBtn.textContent = 'Kopiraj';
            copyBtn.classList.remove('copied');
          }, 2000);
        });
      });

      item.appendChild(el('div', { className: 'benefit-code' },
        el('span', { className: 'code-label', textContent: 'Koda:' }),
        el('span', { className: 'code-value', textContent: benefit.code }),
        copyBtn
      ));
    }

    if (benefit.conditions) {
      item.appendChild(el('div', { className: 'benefit-conditions', textContent: benefit.conditions }));
    }

    if (benefit.link) {
      const link = el('a', {
        className: 'benefit-link',
        href: benefit.link,
        target: '_blank',
        rel: 'noopener noreferrer',
        textContent: 'Odpri vir'
      });
      item.appendChild(el('div', { className: 'benefit-actions' }, link));
    }

    body.appendChild(item);
  });

  const notification = el('div', { className: 'bank-benefit-notification', id: 'bank-benefit-notification' },
    header,
    body
  );

  closeBtn.addEventListener('click', () => notification.remove());

  document.body.appendChild(notification);

  setTimeout(() => {
    if (document.getElementById('bank-benefit-notification')) {
      notification.style.opacity = '0';
      setTimeout(() => notification.remove(), 300);
    }
  }, 15000);
}

async function init() {
  const sessionKey = `benefit-shown:${getCurrentDomain()}`;
  if (sessionStorage.getItem(sessionKey)) {
    return;
  }

  let response;
  try {
    response = await EXT.runtime.sendMessage({ action: 'getBenefits' });
  } catch (_) {
    return;
  }

  if (!response || !response.benefits) {
    return;
  }

  BENEFITS_DATABASE = response.benefits;

  await checkForBenefits();

  sessionStorage.setItem(sessionKey, '1');
}

// Run when page is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
