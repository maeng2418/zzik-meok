import AuthRoute from '@/components/auth-route'
import GlobalErrorHandler from '@/components/global-error-handler'
import DefaultLayout from '@/components/layout'
import NoAuthRoute from '@/components/no-auth-route'
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
          // 인증이 필요하지 않은 라우트 (로그인 상태일 경우 ZzikMeokPage로 리다이렉션)
          {
            element: <NoAuthRoute />,
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
            ],
          },
          // 인증이 필요한 라우트 (로그인되지 않은 경우 LoginPage로 리다이렉션)
          {
            element: <AuthRoute />,
            children: [
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
    ],
  },
] as const

export default Pages
