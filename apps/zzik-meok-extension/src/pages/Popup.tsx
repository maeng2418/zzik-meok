import { useState } from 'react'
import browser from 'webextension-polyfill'
import './Popup.css'

const Popup = () => {
  const [count, setCount] = useState(0)
  const [messageFromBackground, setMessageFromBackground] = useState('')

  // 메시지를 백그라운드로 전송
  const sendMessageToBackground = () => {
    if(!browser.runtime) return
    browser.runtime.sendMessage({ type: 'GREETING', message: 'Hello from App!' }).then((res) => {
      const response = res as { reply: string } | undefined
      if (response && response.reply) {
        setMessageFromBackground(response.reply)
      }
      return true
    })
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer noopener">
          Vite logo
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer noopener">
          logo react
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <h1>Chrome Extension with React</h1>
      <button onClick={sendMessageToBackground}>Send Message to Background</button>
      {messageFromBackground && <p>Response from Background: {messageFromBackground}</p>}
    </>
  )
}

export default Popup
