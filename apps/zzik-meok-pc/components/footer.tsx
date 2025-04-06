import { cn } from '@zzik-meok/ui'
import { ComponentProps } from 'react'

const Footer = ({ className, ...props }: ComponentProps<'footer'>) => {
  return (
    <footer
      className={cn('row-start-3 flex gap-6 flex-wrap items-center justify-center', className)}
      {...props}
    />
  )
}

export default Footer
