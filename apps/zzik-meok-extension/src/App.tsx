import GlobalErrorHandler from '@/components/global-error-handler'
import ThemeProvider from '@/components/theme-provider'
import Routes from '@/constants/routes'
import { ApiError } from '@/hooks/use-api-error'
import { apiService } from '@/utils/api-service'
import { isWebExtension } from '@/utils/webextension'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { createBrowserRouter, createMemoryRouter, RouterProvider } from 'react-router'

const router = isWebExtension ? createMemoryRouter(Routes) : createBrowserRouter(Routes)

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        const [url, params] = queryKey
        if (typeof url !== 'string') {
          throw new Error('Invalid QueryKey')
        }

        const response = await apiService.get(`${url}`, {
          ...(params as object),
        })
        const hasDataProperty =
          typeof response === 'object' && response !== null && 'data' in response

        return hasDataProperty ? response.data : response
      },
      // React Query v5에서 에러를 Error Boundary로 전파하는 설정
      throwOnError: true,
    },
    mutations: {
      // React Query v5에서 에러를 Error Boundary로 전파하는 설정
      throwOnError: true,
    },
  },
})

// API 상태 코드별 에러 처리기
const statusHandlers: Partial<
  Record<number, (error: ApiError, reset: () => void) => React.ReactNode>
> = {
  401: (error, reset) => (
    <div className="flex flex-col items-center justify-center p-4 min-h-40">
      <h2 className="text-lg font-semibold mb-2">로그인이 필요합니다</h2>
      <p className="text-sm text-muted-foreground mb-2">로그인 페이지로 이동해주세요</p>
      <button
        className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md"
        onClick={reset}
      >
        로그인 페이지로 이동
      </button>
    </div>
  ),
  403: (error, reset) => (
    <div className="flex flex-col items-center justify-center p-4 min-h-40">
      <h2 className="text-lg font-semibold mb-2">접근 권한이 없습니다</h2>
      <p className="text-sm text-muted-foreground mb-2">{error.message}</p>
      <button
        className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md"
        onClick={reset}
      >
        이전 페이지로 이동
      </button>
    </div>
  ),
}

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <GlobalErrorHandler
        statusHandlers={statusHandlers}
        onError={(error, info) => {
          console.error('앱 레벨에서 에러가 발생했습니다:', error, info)
        }}
      >
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </GlobalErrorHandler>
    </ThemeProvider>
  )
}

export default App
