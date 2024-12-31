import { ReactNode } from 'react'

export type CodeProps = {
  children: ReactNode
  className?: string
}

const Code = ({ children, className }: CodeProps) => {
  return <code className={className}>{children}</code>
}

export default Code
