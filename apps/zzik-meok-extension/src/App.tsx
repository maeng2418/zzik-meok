import ThemeProvider from '@/components/theme-provider'
import Routes from '@/constants/routes'
import { apiService } from '@/utils/api-service'
import { isWebExtension } from '@/utils/webextension'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
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

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
