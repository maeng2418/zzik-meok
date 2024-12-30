import browser from 'webextension-polyfill'

console.log('Hello from the background!')

browser.runtime.onInstalled.addListener((details) => {
  console.log('Extension installed:', details)
})

// @ts-ignore
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // @ts-ignore
  if (message.type === 'GREETING') {
    // @ts-ignore
    console.log('Message received in background:', message.message)
    // @ts-ignore
    sendResponse({ reply: 'Hello from Background Script!' })
  }
})
