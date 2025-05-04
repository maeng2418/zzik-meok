import GlobalErrorHandler from '@/components/global-error-handler'
import DefaultLayout from '@/components/layout'
import CreateCategoryPage from '@/pages/create-category-page'
import HomePage from '@/pages/home-page'
import LoginPage from '@/pages/login-page'
import SignUpPage from '@/pages/sign-up-page'
import ZzikMeokPage from '@/pages/zzik-meok-page'
import { RouteObject } from 'react-router'
import URLMap from './url-map'

const Pages: RouteObject[] = [
  {
    element: <GlobalErrorHandler />,
    children: [
      {
        element: <DefaultLayout />,
        children: [
          {
            path: URLMap.HOME,
            element: <HomePage />,
          },
          {
            path: URLMap.LOGIN,
            element: <LoginPage />,
          },
          {
            path: URLMap.SIGN_UP,
            element: <SignUpPage />,
          },
          {
            path: URLMap.ZZIK_MEOK,
            element: <ZzikMeokPage />,
          },
          {
            path: URLMap.CREATE_CATEGORY,
            element: <CreateCategoryPage />,
          },
        ],
      },
    ],
  },
] as const

export default Pages
