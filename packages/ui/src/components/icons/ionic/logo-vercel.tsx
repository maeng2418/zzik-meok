import { IconProps } from '../icon.types'
const LogoVercel = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      height={size}
      width={size}
      tabIndex={tabIndex}
      focusable={focusable}
      fill="currentColor"
      {...props}
    >
      <path fillRule="evenodd" d="M256,48,496,464H16Z" />
    </svg>
  )
}
export default LogoVercel
