import { ReactNode } from 'react'


export type CardProps = {
  className?: string
  title: string
  children: ReactNode
  href: string
}

const _Card = ({ className, title, children, href }: CardProps) => {
  return (
    <a
      className={className}
      href={`${href}?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo"`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <h2>
        {title} <span>-&gt;</span>
      </h2>
      <p>{children}</p>
    </a>
  )
}

export default _Card
