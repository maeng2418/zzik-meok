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
  retry: {
    limit: 3,
    methods: ['get', 'post', 'put', 'update', 'delete'],
    statusCodes: [408, 500, 502, 503, 504],
  },
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
      (error: HTTPError) => {
        // 응답 본문이 있는 경우 파싱 시도
        if (error.response) {
          try {
            // 응답을 복제하여 사용 (Response는 한 번만 읽을 수 있음)
            error.response
              .clone()
              .json()
              .then((data) => {
                return new ServerError(
                  error.response,
                  error.request,
                  error.options,
                  data.code,
                  data.reason,
                )
              })
              .catch(() => {
                // JSON 파싱 실패 시 처리하지 않음
              })
          } catch (e) {
            // 파싱 오류 무시
          }
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
