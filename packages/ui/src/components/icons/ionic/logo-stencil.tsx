import { IconProps } from '../icon.types'
const LogoStencil = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 512 512"
      tabIndex={tabIndex}
      focusable={focusable}
      fill="currentColor"
      {...props}
    >
      <path d="M188.8,334.07H386.13L279.47,448H83.2Z" />
      <path d="M512,199H106.61L0,313H405.39Z" />
      <path d="M232.2,64H428.8L322.62,177.93H125.87Z" />
    </svg>
  )
}
export default LogoStencil
