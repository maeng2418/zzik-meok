import { IconProps } from '../icon.types'
const LogoMicrosoft = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
  return (
    <svg
      id="icons"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      height={size}
      width={size}
      tabIndex={tabIndex}
      focusable={focusable}
      fill="currentColor"
      {...props}
    >
      <path d="M31.87,30.58H244.7V243.39H31.87Z" />
      <path d="M266.89,30.58H479.7V243.39H266.89Z" />
      <path d="M31.87,265.61H244.7v212.8H31.87Z" />
      <path d="M266.89,265.61H479.7v212.8H266.89Z" />
    </svg>
  )
}
export default LogoMicrosoft
