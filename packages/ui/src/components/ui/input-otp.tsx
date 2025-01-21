'use client'

import { cn } from '@/lib/utils'
import { OTPInput, OTPInputContext, RenderProps } from 'input-otp'
import { Minus } from 'lucide-react'
import { ComponentProps, useContext } from 'react'

const InputOTP = ({
  className,
  containerClassName,
  ref,
  ...props
}: ComponentProps<typeof OTPInput>) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      'flex items-center gap-2 has-[:disabled]:opacity-50',
      containerClassName,
    )}
    className={cn('disabled:cursor-not-allowed', className)}
    {...props}
  />
)

InputOTP.displayName = 'InputOTP'

const InputOTPGroup = ({ className, ref, ...props }: ComponentProps<'div'>) => (
  <div ref={ref} className={cn('flex items-center', className)} {...props} />
)

InputOTPGroup.displayName = 'InputOTPGroup'

const InputOTPSlot = ({
  index,
  className,
  ref,
  ...props
}: ComponentProps<'div'> & { index: number }) => {
  const inputOTPContext = useContext<RenderProps>(OTPInputContext)
  const { char, hasFakeCaret, isActive } = {
    isActive: false,
    char: null,
    hasFakeCaret: false,
    ...inputOTPContext.slots[index],
  }

  return (
    <div
      ref={ref}
      className={cn(
        'relative flex h-9 w-9 items-center justify-center border-y border-r border-slate-200 text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md dark:border-slate-800',
        isActive && 'z-10 ring-1 ring-slate-950 dark:ring-slate-300',
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-slate-950 duration-1000 dark:bg-slate-50" />
        </div>
      )}
    </div>
  )
}

InputOTPSlot.displayName = 'InputOTPSlot'

const InputOTPSeparator = ({ ref, ...props }: ComponentProps<'div'>) => (
  <div ref={ref} role="separator" {...props}>
    <Minus />
  </div>
)

InputOTPSeparator.displayName = 'InputOTPSeparator'

export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot }
