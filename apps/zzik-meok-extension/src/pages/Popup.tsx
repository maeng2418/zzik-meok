import zzikmeokLogo from '@/assets/images/icon.svg'
import { runWithBrowser } from '@/utils/webextension'
import { useState } from 'react'
import './Popup.css'

const Popup = () => {
  const [messageFromBackground, setMessageFromBackground] = useState('')
  const [currentUrl, setCurrentUrl] = useState('')

  // 메시지를 백그라운드로 전송
  const sendMessageToBackground = () => {
    runWithBrowser((browser) => {
      browser.runtime.sendMessage({ type: 'GREETING', message: 'Hello from App!' }).then((res) => {
        const response = res as { reply: string } | undefined
        if (response && response.reply) {
          setMessageFromBackground(response.reply)
        }
      })

      browser.tabs.query({ active: true, currentWindow: true }).then(([currentTab]) => {
        console.log(currentTab)
        setCurrentUrl(currentTab?.url || '')
      })
    })
  }

  return (
    <>
      <div className="flex justify-center">
        <a
          href="https://vite.dev"
          target="_blank"
          rel="noreferrer noopener"
          className="font-medium text-[#646cff] hover:text-[#535bf2]"
        >
          <img
            src={zzikmeokLogo}
            id="logo"
            className="w-[161.45px] h-[144px] p-3 will-change-[filter] transition-[filter] duration-300"
            alt="Vite logo"
          />
        </a>
      </div>
      <h1 className=" font-medium text-[48px] leading-[1.1] mx-auto my-[32px]">ZZIK MEOK</h1>
      <div className="flex flex-col items-center justify-center">
        <button
          id="zzikmeok-button"
          className="shadow-[0_1px_#ffffffbf_inset] flex justify-center items-center gap-2 text-white text-base not-italic font-semibold leading-6 transition-all duration-[0.2s] ease-[ease-in-out] w-fit cursor-pointer px-[18px] py-[10px] rounded-lg border-[none]"
          onClick={sendMessageToBackground}
        >
          찍먹하기
        </button>
        {messageFromBackground && <p>Response from Background: {messageFromBackground}</p>}
        {currentUrl && <p>currentUrl: {currentUrl}</p>}
      </div>
    </>
  )
}

export default Popup
