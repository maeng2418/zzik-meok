import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {}

const Button = ({ ...props }: ButtonProps) => {
  return <button {...props} className="bg-blue-500" />
}

export default Button
