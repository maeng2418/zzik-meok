import browser from 'webextension-polyfill'

console.log('Hello from the background!')

browser.runtime.onInstalled.addListener((details) => {
  console.log('Extension installed:', details)
})

browser.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
  const { type, message } = msg as { type: string; message: string }
  if (type === 'GREETING') {
    console.log('Message received in background:', message)
    sendResponse({ reply: 'Hello from Background Script!' })
  }
  return true
})
