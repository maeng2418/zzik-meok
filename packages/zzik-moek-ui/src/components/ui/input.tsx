import { cn } from '@/lib/utils'
import { extractClasses } from '@/utils'
import { ComponentProps, ReactNode } from 'react'
import { FieldError } from 'react-hook-form'
import { Label } from './label'

type InputProps = ComponentProps<'input'> & {
  label?: ReactNode
  error?: FieldError
}

const Input = ({ className, type, ref, id, label, error, ...props }: InputProps) => {
  const fontSizeClasses = extractClasses(className, 'text-')

  return (
    <div>
      {label && (
        <Label htmlFor={id} className={cn('font-medium', fontSizeClasses)}>
          {label}
        </Label>
      )}
      <input
        type={type}
        className={cn(
          'flex h-9 w-full rounded-md border  bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-slate-950 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-slate-800 dark:file:text-slate-50 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300',
          error ? 'border-red-500' : 'border-slate-200',
          className,
        )}
        ref={ref}
        {...props}
      />
      {error?.message && (
        <p className={cn('mt-1 text-red-500', fontSizeClasses)}>{error.message}</p>
      )}
    </div>
  )
}
Input.displayName = 'Input'

export { Input }
