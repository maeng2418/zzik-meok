import { IconProps } from '../icon.types'
const NavigateSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <polygon points="480 32 32 240 272 240 272 480 480 32" />
    </svg>
  )
}
export default NavigateSharp
