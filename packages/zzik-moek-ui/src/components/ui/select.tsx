'use client'

import { cn } from '@/lib/utils'
import { extractClasses } from '@/utils'
import * as SelectPrimitive from '@radix-ui/react-select'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'
import { ComponentProps, ReactNode, useId, useMemo } from 'react'
import { FieldError } from 'react-hook-form'
import { Label } from './label'

type SelectProps = ComponentProps<'select'> & {
  label?: ReactNode
  error?: FieldError
  placeholder?: string
  options: {
    group?: string
    label: string
    value: string
  }[]
  value?: string
  onChange: (event: Event, value?: string) => void
}

const SelectTrigger = ({
  className,
  children,
  ref,
  ...props
}: ComponentProps<typeof SelectPrimitive.Trigger>) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      'flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-slate-800 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300',
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
)
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = ({
  className,
  ref,
  ...props
}: ComponentProps<typeof SelectPrimitive.ScrollUpButton>) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
)
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = ({
  className,
  ref,
  ...props
}: ComponentProps<typeof SelectPrimitive.ScrollDownButton>) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
)
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName

const SelectContent = ({
  className,
  children,
  position = 'popper',
  ref,
  ...props
}: ComponentProps<typeof SelectPrimitive.Content>) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white text-slate-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50',
        position === 'popper' &&
          'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        className,
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          'p-1',
          position === 'popper' &&
            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
)
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = ({
  className,
  ref,
  ...props
}: ComponentProps<typeof SelectPrimitive.Label>) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn('px-2 py-1.5 text-sm font-semibold', className)}
    {...props}
  />
)
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = ({
  className,
  children,
  ref,
  ...props
}: ComponentProps<typeof SelectPrimitive.Item>) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50',
      className,
    )}
    {...props}
  >
    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
)
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = ({
  className,
  ref,
  ...props
}: ComponentProps<typeof SelectPrimitive.Separator>) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800', className)}
    {...props}
  />
)
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

const Select = ({
  name,
  label,
  id: idProp,
  error,
  className,
  value,
  options,
  placeholder,
  onChange,
}: SelectProps) => {
  const id = useId()
  const fontSizeClasses = extractClasses(className, 'text-')

  const optionItems = useMemo(() => {
    const UNGROUPED_KEY = '$$UNGROUPED$$'

    if (options.some((option) => option.group)) {
      const groupItems = options.reduce(
        (acc: Record<string, { label: string; value: string }[]>, { group, label, value }) => {
          if (group) {
            if (!acc[group]) {
              acc[group] = [{ label, value }]
            }
            acc[group].push({ label, value })
          } else {
            if (!acc[UNGROUPED_KEY]) {
              acc[UNGROUPED_KEY] = []
            }
            acc[UNGROUPED_KEY].push({ label, value })
          }

          return acc
        },
        {},
      )
      return Object.entries(groupItems).map(([group, items]) => {
        if (group === UNGROUPED_KEY) {
          return items.map(({ label, value }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))
        }

        return (
          <SelectPrimitive.Group key={group}>
            <SelectLabel>{group}</SelectLabel>
            {items.map(({ label, value }) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectPrimitive.Group>
        )
      })
    }

    return options.map(({ value, label }) => (
      <SelectItem key={value} value={value}>
        {label}
      </SelectItem>
    ))
  }, [options])

  const handleChange = (value: string) => {
    // Event.target은 읽기 전용이므로 직접 수정할 수 없습니다.
    // 대신 CustomEvent를 사용하여 detail 속성에 필요한 정보를 전달합니다.
    const customEvent = new CustomEvent('change', {
      bubbles: true,
      detail: {
        value: value || '',
        name: name || '',
      },
    })

    // 원본 이벤트 대신 커스텀 이벤트와 필요한 속성을 포함한 객체를 전달합니다.
    onChange({
      ...customEvent,
      target: {
        value: value || '',
        name: name || '',
      } as HTMLSelectElement,
    })
  }

  return (
    <div>
      {label && (
        <Label htmlFor={idProp || id} className={cn('font-medium', fontSizeClasses)}>
          {label}
        </Label>
      )}
      <SelectPrimitive.Root onValueChange={handleChange} defaultValue={value}>
        <SelectTrigger>
          <SelectPrimitive.Value placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>{optionItems}</SelectContent>
      </SelectPrimitive.Root>
      {error?.message && (
        <p className={cn('mt-1 text-red-500', fontSizeClasses)}>{error.message}</p>
      )}
    </div>
  )
}

export { Select }
