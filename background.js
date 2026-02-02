// background.js - Service worker for the extension

// Import benefits database
importScripts('benefits.js');

// Listen for messages from content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getBenefits') {
    sendResponse({ benefits: BENEFITS_DATABASE });
  }
  return true;
});

// Initialize default settings on install
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get(['selectedBanks'], (result) => {
    if (!result.selectedBanks) {
      // Set default to empty array - user needs to select banks
      chrome.storage.sync.set({ selectedBanks: [] });
    }
  });
});
