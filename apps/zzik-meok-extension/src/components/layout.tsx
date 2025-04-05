import ZzikMeokIcon from '@/assets/images/icon.svg?react'
import ZzikMeokLogoDark from '@/assets/images/logo-dark.svg?react'
import ZzikMeokLogoLight from '@/assets/images/logo-light.svg?react'
import useTheme from '@/hooks/use-theme'
import { Outlet } from 'react-router'
import ModeToggle from './mode-toggle'

const Layout = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className="relative">
      <div className="fixed top-4 right-4">
        <ModeToggle />
      </div>
      <div className="flex flex-col justify-center items-center">
        <a
          href="https://vite.dev"
          target="_blank"
          rel="noreferrer noopener"
          className="font-medium text-[#646cff] hover:text-[#535bf2]"
        >
          <ZzikMeokIcon
            id="icon"
            className="w-[161.45px] h-[144px] mb-3 will-change-[filter] transition-[filter] duration-300"
          />
        </a>
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
  )
}

export default Layout
