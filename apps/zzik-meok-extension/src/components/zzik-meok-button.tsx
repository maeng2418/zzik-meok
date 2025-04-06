import URLMap from '@/constants/url-map'
import { runWithBrowser } from '@/utils/webextension'
import { toURL } from '@zzik-meok/utils/client'
import { useNavigate } from 'react-router'

const ZzikMeokButton = () => {
  const navigate = useNavigate()

  // 메시지를 백그라운드로 전송
  const sendMessageToBackground = () => {
    runWithBrowser(
      (browser) => {
        browser.tabs.query({ active: true, currentWindow: true }).then(([currentTab]) => {
          navigate(toURL(URLMap.ZZIK_MEOK, {}, { markingUrl: currentTab?.url }))
        })
      },
      () => {
        navigate(toURL(URLMap.ZZIK_MEOK, {}, { markingUrl: window.location.pathname }))
      },
    )
  }

  return (
    <button
      id="zzik-meok-button"
      className="shadow-[0_1px_#ffffffbf_inset] flex justify-center items-center gap-2 text-white text-base not-italic font-semibold leading-6 transition-all duration-[0.2s] ease-[ease-in-out] w-fit cursor-pointer px-[18px] py-[10px] rounded-lg border-[none]"
      onClick={sendMessageToBackground}
    >
      찍먹하기
    </button>
  )
}

export default ZzikMeokButton
