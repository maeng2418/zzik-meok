import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { ChevronRight, MoreHorizontal } from 'lucide-react'
import { ComponentProps, ReactNode } from 'react'

const Breadcrumb = ({
  ref,
  ...props
}: ComponentProps<'nav'> & {
  separator?: ReactNode
}) => <nav ref={ref} aria-label="breadcrumb" {...props} />
Breadcrumb.displayName = 'Breadcrumb'

const BreadcrumbList = ({ className, ref, ...props }: ComponentProps<'ol'>) => (
  <ol
    ref={ref}
    className={cn(
      'flex flex-wrap items-center gap-1.5 break-words text-sm text-slate-500 sm:gap-2.5 dark:text-slate-400',
      className,
    )}
    {...props}
  />
)
BreadcrumbList.displayName = 'BreadcrumbList'

const BreadcrumbItem = ({ className, ref, ...props }: ComponentProps<'li'>) => (
  <li ref={ref} className={cn('inline-flex items-center gap-1.5', className)} {...props} />
)
BreadcrumbItem.displayName = 'BreadcrumbItem'

const BreadcrumbLink = ({
  asChild,
  className,
  ref,
  ...props
}: ComponentProps<'a'> & {
  asChild?: boolean
}) => {
  const Comp = asChild ? Slot : 'a'

  return (
    <Comp
      ref={ref}
      className={cn('transition-colors hover:text-slate-950 dark:hover:text-slate-50', className)}
      {...props}
    />
  )
}
BreadcrumbLink.displayName = 'BreadcrumbLink'

const BreadcrumbPage = ({ className, ref, ...props }: ComponentProps<'span'>) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn('font-normal text-slate-950 dark:text-slate-50', className)}
    {...props}
  />
)
BreadcrumbPage.displayName = 'BreadcrumbPage'

const BreadcrumbSeparator = ({ children, className, ...props }: ComponentProps<'li'>) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn('[&>svg]:w-3.5 [&>svg]:h-3.5', className)}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
)
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator'

const BreadcrumbEllipsis = ({ className, ...props }: ComponentProps<'span'>) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
)
BreadcrumbEllipsis.displayName = 'BreadcrumbElipssis'

export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
}
