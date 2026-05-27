// background.js — Service worker (Chrome) / background page (Firefox).
// In Chrome MV3 we run in a service worker, where importScripts() is needed
// to bring in benefits.js. In Firefox MV3 the background page loads
// benefits.js via the manifest's background.scripts array, so BENEFITS_DATABASE
// is already defined and importScripts isn't available.

const EXT = typeof browser !== 'undefined' ? browser : chrome;

if (typeof importScripts === 'function') {
  importScripts('benefits.js');
}

// Listen for messages from content script
EXT.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getBenefits') {
    sendResponse({ benefits: BENEFITS_DATABASE });
  }
  return true;
});

// Initialize default settings on install
EXT.runtime.onInstalled.addListener(() => {
  EXT.storage.sync.get(['selectedBanks']).then((result) => {
    if (!result.selectedBanks) {
      // Set default to empty array - user needs to select banks
      return EXT.storage.sync.set({ selectedBanks: [] });
    }
    return undefined;
  });
});
