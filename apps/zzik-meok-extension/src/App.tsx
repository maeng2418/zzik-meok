import ThemeProvider from '@/components/theme-provider'
import Routes from '@/constants/routes'
import { isWebExtension } from '@/utils/webextension'
import { createBrowserRouter, createMemoryRouter, RouterProvider } from 'react-router'

const router = isWebExtension ? createMemoryRouter(Routes) : createBrowserRouter(Routes)

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
