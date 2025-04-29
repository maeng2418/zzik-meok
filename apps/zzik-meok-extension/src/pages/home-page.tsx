import URLMap from '@/constants/url-map'
import { runWithBrowser } from '@/utils/webextension'
import { Button } from '@zzik-meok/ui'
import { toURL } from '@zzik-meok/utils/client'
import { useNavigate } from 'react-router'

const HomePage = () => {
  const navigate = useNavigate()

  const goToLogin = () => {
    runWithBrowser(
      async (browser) => {
        await browser.tabs.query({ active: true, currentWindow: true })
        navigate(toURL(URLMap.LOGIN))
      },
      () => {
        navigate(toURL(URLMap.LOGIN))
      },
    )
  }
  return (
    <div>
      <Button onClick={goToLogin}>로그인</Button>
    </div>
  )
}

export default HomePage
