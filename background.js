// background.js - Service worker for the extension

const EXT = typeof browser !== 'undefined' ? browser : chrome;

// Import benefits database
importScripts('benefits.js');

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
