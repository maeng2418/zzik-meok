import { Cookie } from '@zzik-meok/utils/client'
import { HTTPError, KyService, ServerError } from '@zzik-meok/utils/client/browser'
import { runWithBrowser } from './webextension'

export const apiService = new KyService({
  prefixUrl: import.meta.env.VITE_API_SERVER_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  credentials: 'include',
  hooks: {
    beforeRequest: [
      async (request) => {
        await runWithBrowser(
          async (browser) => {
            const { access_token } = await browser.storage.local.get('access_token')
            if (access_token) {
              request.headers.set('Authorization', `Bearer ${access_token}`)
            }
          },
          () => {
            const access_token = Cookie.get('access_token')
            if (access_token) {
              request.headers.set('Authorization', `Bearer ${access_token}`)
            }
          },
        )
        // Add any custom logic before the request is sent
        console.log('Request:', request)
      },
    ],
    afterResponse: [
      (_request, _options, response) => {
        // Add any custom logic after the response is received
        console.log('Response:', response)
      },
    ],
    beforeError: [
      async (error: HTTPError) => {
        // 응답 본문이 있는 경우 파싱 시도
        if (error.response) {
          // 응답을 복제하여 사용 (Response는 한 번만 읽을 수 있음)
          const data = await error.response.clone().json()
          return new ServerError(
            error.response,
            error.request,
            error.options,
            data.code,
            data.reason,
          )
        }

        return new ServerError(
          error.response,
          error.request,
          error.options,
          'UNKNOWN',
          error.message,
        )
      },
    ],
  },
})
