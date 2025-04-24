import { KyService } from '@zzik-meok/utils/client/browser'

export const apiService = new KyService({
  prefixUrl: import.meta.env.VITE_API_SERVER_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
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
  },
})
