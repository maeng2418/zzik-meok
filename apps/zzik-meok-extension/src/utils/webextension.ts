import type { Browser } from 'webextension-polyfill'

declare global {
  interface Window {
    chrome: Browser
    browser: Browser
  }
}

export const runWithBrowser = async (callback: (browser: Browser) => void) => {
  try {
    const isChromeExtension =
      typeof window.chrome !== 'undefined' && typeof window.chrome.runtime !== 'undefined'
    const isFirefoxExtension =
      typeof window.browser !== 'undefined' && typeof window.browser.runtime !== 'undefined'

    if (!isChromeExtension && !isFirefoxExtension) return

    const { default: browser } = await import('webextension-polyfill')
    callback(browser)
  } catch (error) {
    console.error('Failed to load webextension-polyfill:', error)
  }
}
