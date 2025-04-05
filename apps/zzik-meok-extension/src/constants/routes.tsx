import DefaultLayout from '@/components/layout'
import HomePage from '@/pages/HomePage'
import ZzikMeokPage from '@/pages/ZzikMeokPage'
import { RouteObject } from 'react-router'
import URLMap from './url-map'

const Pages: RouteObject[] = [
  {
    element: <DefaultLayout />,
    children: [
      {
        path: URLMap.HOME,
        element: <HomePage />,
      },
      {
        path: URLMap.ZZIK_MEOK,
        element: <ZzikMeokPage />,
      },
    ],
  },
] as const

export default Pages
