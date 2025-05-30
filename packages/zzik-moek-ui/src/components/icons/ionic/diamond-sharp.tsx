import { IconProps } from '../icon.types'
const DiamondSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <polygon points="396.31 32 264 32 348.19 144.26 396.31 32" />
      <polygon points="115.69 32 163.81 144.26 248 32 115.69 32" />
      <polygon points="256 74.67 192 160 320 160 256 74.67" />
      <polygon points="422.95 51.06 376.26 160 488 160 422.95 51.06" />
      <polygon points="89.05 51.06 23 160 135.74 160 89.05 51.06" />
      <polygon points="146.68 192 24 192 246.8 480 247.33 480 146.68 192" />
      <polygon points="365.32 192 264.67 480 265.2 480 488 192 365.32 192" />
      <polygon points="329.39 192 182.61 192 256 400 329.39 192" />
    </svg>
  )
}
export default DiamondSharp
