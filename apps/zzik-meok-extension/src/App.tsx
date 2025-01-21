import ThemeProvider from '@/components/theme-provider'
import AboutPage from '@/pages/AboutPage'
import HomePage from '@/pages/HomePage'
import { isWebExtension } from '@/utils/webextension'
import { createBrowserRouter, createMemoryRouter, RouteObject, RouterProvider } from 'react-router'

const Pages: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
] as const

const router = isWebExtension ? createMemoryRouter(Pages) : createBrowserRouter(Pages)

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
