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

  console.info('[bank-benefits] selected banks:', selectedBanks);

  if (selectedBanks.length === 0) {
    console.info('[bank-benefits] no banks selected — open the popup and pick some');
    return;
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
  
  console.info('[bank-benefits] matched benefits on', currentDomain, ':', availableBenefits.length);

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

  // The header is now a tight attribution row: a tiny "ugodnost" mark + close.
  // Each benefit block below names its own bank.
  const header = el('div', { className: 'notification-header' },
    el('div', { className: 'notification-eyebrow', textContent: 'Ugodnost' }),
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

  // Belt-and-suspenders: set critical positioning inline so the notification
  // is visible even if notification.css fails to apply for some reason.
  notification.style.cssText = [
    'position:fixed',
    'top:20px',
    'right:20px',
    'width:360px',
    'max-width:calc(100vw - 32px)',
    'z-index:2147483647',
    'background:#ffffff',
    'color:#0e0e0f',
    'border:1px solid #d4d4d6',
    'border-radius:10px',
    'box-shadow:0 16px 32px -16px rgba(10,10,15,0.22),0 2px 6px rgba(10,10,15,0.08)',
    'font-family:ui-sans-serif,system-ui,sans-serif',
    'font-size:14px',
    'line-height:1.5'
  ].join(';');

  closeBtn.addEventListener('click', () => notification.remove());

  document.body.appendChild(notification);
  console.info('[bank-benefits] notification rendered for', window.location.hostname);

  setTimeout(() => {
    if (document.getElementById('bank-benefit-notification')) {
      notification.style.opacity = '0';
      setTimeout(() => notification.remove(), 300);
    }
  }, 15000);
}

async function init() {
  const sessionKey = `benefit-shown:${getCurrentDomain()}`;
  console.info('[bank-benefits] init on', getCurrentDomain());
  if (sessionStorage.getItem(sessionKey)) {
    console.info('[bank-benefits] already shown this session, skipping');
    return;
  }

  let response;
  try {
    response = await EXT.runtime.sendMessage({ action: 'getBenefits' });
  } catch (err) {
    console.warn('[bank-benefits] runtime.sendMessage failed:', err);
    return;
  }

  if (!response || !response.benefits) {
    console.warn('[bank-benefits] no benefits in response:', response);
    return;
  }

  BENEFITS_DATABASE = response.benefits;
  console.info('[bank-benefits] loaded benefits database, banks:', Object.keys(BENEFITS_DATABASE).length);

  await checkForBenefits();

  sessionStorage.setItem(sessionKey, '1');
}

// Run when page is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
