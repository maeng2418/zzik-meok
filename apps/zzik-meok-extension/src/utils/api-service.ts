import { ApiError } from '@/hooks/use-api-error'
import { KyService } from '@zzik-meok/utils/client/browser'

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
      (request) => {
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
      (error) => {
        // KY 에러를 ApiError 형식으로 변환
        const apiError = new Error(error.message) as ApiError
        apiError.name = 'ApiError'
        apiError.status = error.response?.status
        apiError.response = error.response

        // 응답 본문이 있는 경우 파싱 시도
        if (error.response) {
          try {
            // 응답을 복제하여 사용 (Response는 한 번만 읽을 수 있음)
            error.response
              .clone()
              .json()
              .then((data) => {
                apiError.data = data
              })
              .catch(() => {
                // JSON 파싱 실패 시 처리하지 않음
              })
          } catch (e) {
            // 파싱 오류 무시
          }
        }

        return apiError
      },
    ],
  },
})
