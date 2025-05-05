import { Cookie, CookieAttributes } from '@zzik-meok/utils/client'
import { runWithBrowser } from './webextension'

/**
 * 토큰을 저장하는 함수
 * @param accessToken 액세스 토큰
 * @param refreshToken 리프레시 토큰 (선택)
 */
export const saveTokens = async (accessToken: string, refreshToken?: string) => {
  await runWithBrowser(
    (browser) => {
      browser.storage.local.set({
        access_token: accessToken,
        refresh_token: refreshToken,
      })
    },
    () => {
      const isSecure = process.env.NODE_ENV === 'production'
      const options: CookieAttributes = {
        expires: 365,
        secure: isSecure,
        sameSite: 'strict',
      }
      Cookie.set('access_token', accessToken, options)
      if (refreshToken) {
        Cookie.set('refresh_token', refreshToken, options)
      }
    },
  )
}

/**
 * 로그아웃 함수 (토큰 삭제)
 */
export const clearTokens = async () => {
  await runWithBrowser(
    (browser) => {
      browser.storage.local.remove(['access_token', 'refresh_token'])
    },
    () => {
      Cookie.remove('access_token')
      Cookie.remove('refresh_token')
    },
  )
}
