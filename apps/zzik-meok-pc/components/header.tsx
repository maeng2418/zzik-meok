'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { ComponentProps } from 'react'
import { cn } from '../../../packages/zzik-moek-ui/src'
import ModeToggle from './mode-toggle'

const Header = ({ className, ...props }: ComponentProps<'header'>) => {
  const { theme } = useTheme()

  const isDark = theme === 'dark'

  return (
    <header
      className={cn(
        'flex justify-center px-6 py-3 border-grid sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
        className,
      )}
      {...props}
    >
      <nav className="flex justify-between items-center w-full max-w-screen-2xl ">
        <Link href="/">
          <Image
            src={isDark ? '/images/logo-dark.svg' : '/images/logo.svg'}
            width={200}
            height={100}
            alt="logo"
            priority
          />
        </Link>
        <ModeToggle />
      </nav>
    </header>
  )
}

export default Header
