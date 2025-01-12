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
    <main>
      <RouterProvider router={router} />
    </main>
  )
}

export default App
