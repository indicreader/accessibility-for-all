// Background script for Chrome Accessibility Companion
chrome.runtime.onInstalled.addListener(() => {
  const defaultState = {
    fontSizeDelta: 0,
    highContrast: 'off', // 'off', 'high-contrast', 'inverted', 'grayscale', 'dark-mono'
    dyslexicFont: false,
    adhdMode: false,
    largeCursor: false,
    speechActive: false,
    highlightLinks: false,
    highlightHeadings: false,
    keyboardHelper: false,
    stopAnimations: false,
    readingRuler: false,
    imageHide: false,
    lineHeightDelta: 0,
    letterSpacingDelta: 0,
    voiceCommands: false
  };

  chrome.storage.local.set({ accessibilityState: defaultState }, () => {
    console.log('Universal Accessibility Companion - Initialized with default settings.');
  });
});
