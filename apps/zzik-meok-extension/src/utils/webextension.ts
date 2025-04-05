import type { Browser } from 'webextension-polyfill'

declare global {
  interface Window {
    chrome: Browser
    browser: Browser
  }
}

export const isChromeExtension =
  typeof window.chrome !== 'undefined' && typeof window.chrome.runtime !== 'undefined'

export const isFirefoxExtension =
  typeof window.browser !== 'undefined' && typeof window.browser.runtime !== 'undefined'

export const isWebExtension = isChromeExtension || isFirefoxExtension

export const runWithBrowser = async (
  extensionCallback: (browser: Browser) => void,
  browserCallback?: () => void,
) => {
  try {
    if (!isWebExtension) {
      browserCallback?.()
      return
    }

    const { default: browser } = await import('webextension-polyfill')
    extensionCallback(browser)
  } catch (error) {
    console.error('Failed to load webextension-polyfill:', error)
  }
}
