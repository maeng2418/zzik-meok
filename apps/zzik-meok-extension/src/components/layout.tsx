import ZzikMeokIcon from '@/assets/images/icon.svg?react'
import ZzikMeokLogoDark from '@/assets/images/logo-dark.svg?react'
import ZzikMeokLogoLight from '@/assets/images/logo-light.svg?react'
import { ApiError } from '@/hooks/use-api-error'
import useTheme from '@/hooks/use-theme'
import { Outlet } from 'react-router'
import GlobalErrorHandler from './global-error-handler'
import ModeToggle from './mode-toggle'

const Layout = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

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

  return (
    <GlobalErrorHandler
      statusHandlers={statusHandlers}
      onError={(error, info) => {
        console.error('앱 레벨에서 에러가 발생했습니다:', error, info)
      }}
    >
      <div className="relative">
        <div className="fixed top-4 right-4">
          <ModeToggle />
        </div>
        <div className="flex flex-col justify-center items-center">
          <ZzikMeokIcon
            id="icon"
            className="w-[161.45px] h-[144px] mb-3 will-change-[filter] transition-[filter] duration-300"
          />
          <div>
            {isDark ? (
              <ZzikMeokLogoDark
                id="logo"
                className="w-[280px] h-auto mx-auto mb-[32px] will-change-[filter] transition-[filter] duration-300"
              />
            ) : (
              <ZzikMeokLogoLight
                id="logo"
                className="w-[280px] h-auto mx-auto mb-[32px] will-change-[filter] transition-[filter] duration-300"
              />
            )}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Outlet />
        </div>
      </div>
    </GlobalErrorHandler>
  )
}

export default Layout
