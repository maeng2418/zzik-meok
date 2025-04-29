import { cn } from '@/lib/utils'
import { extractClasses } from '@/utils'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'
import { ComponentProps, ReactNode } from 'react'
import { Label } from './label'

type CheckboxProps = ComponentProps<typeof CheckboxPrimitive.Root> & {
  label?: ReactNode
}

const Checkbox = ({ className, ref, label, id, ...props }: CheckboxProps) => {
  const fontSizeClasses = extractClasses(className, 'text-')

  return (
    <div className="flex items-center gap-2">
      <CheckboxPrimitive.Root
        ref={ref}
        id={id}
        className={cn(
          'peer h-4 w-4 shrink-0 rounded-sm border border-slate-200 border-slate-900 shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-slate-900 data-[state=checked]:text-slate-50 dark:border-slate-800 dark:border-slate-50 dark:focus-visible:ring-slate-300 dark:data-[state=checked]:bg-slate-50 dark:data-[state=checked]:text-slate-900',
          className,
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          className={cn('flex items-center justify-center text-current')}
        >
          <Check className="h-4 w-4" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {label && (
        <Label htmlFor={id} className={cn('font-medium', fontSizeClasses)}>
          {label}
        </Label>
      )}
    </div>
  )
}
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
