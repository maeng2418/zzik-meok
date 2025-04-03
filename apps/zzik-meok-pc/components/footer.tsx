import { ComponentProps } from 'react'
import { cn } from '../../../packages/zzik-moek-ui/src'

const Footer = ({ className, ...props }: ComponentProps<'footer'>) => {
  return (
    <footer
      className={cn('row-start-3 flex gap-6 flex-wrap items-center justify-center', className)}
      {...props}
    />
  )
}

export default Footer
