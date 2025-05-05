import { runWithBrowser } from '@/utils/webextension'
import { Cookie } from '@zzik-meok/utils/client'
import { useEffect, useState } from 'react'

/**
 * 사용자 인증 상태를 확인하는 훅
 * @returns {boolean} 로그인 상태
 */
export const useCheckAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await runWithBrowser(
          async (browser) => {
            // 브라우저 확장 프로그램에서는 storage.local에서 토큰 확인
            const result = await browser.storage.local.get(['access_token'])
            setIsAuthenticated(!!result.access_token)
            setIsLoading(false)
          },
          async () => {
            // 일반 웹에서는 쿠키에서 토큰 확인
            const accessToken = await Cookie.get('access_token')
            setIsAuthenticated(!!accessToken)
            setIsLoading(false)
          },
        )
      } catch (error) {
        console.error('인증 확인 중 오류 발생:', error)
        setIsAuthenticated(false)
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  return { isAuthenticated, isLoading }
}
