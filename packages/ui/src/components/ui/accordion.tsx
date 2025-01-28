import { cn } from '@/lib/utils'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { ComponentProps } from 'react'

const Accordion = AccordionPrimitive.Root

const AccordionItem = ({
  className,
  ref,
  ...props
}: ComponentProps<typeof AccordionPrimitive.Item>) => (
  <AccordionPrimitive.Item ref={ref} className={cn('border-b', className)} {...props} />
)
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = ({
  className,
  children,
  ref,
  ...props
}: ComponentProps<typeof AccordionPrimitive.Trigger>) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180',
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200 dark:text-slate-400" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
)
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = ({
  className,
  children,
  ref,
  ...props
}: ComponentProps<typeof AccordionPrimitive.Content>) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn('pb-4 pt-0', className)}>{children}</div>
  </AccordionPrimitive.Content>
)
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
