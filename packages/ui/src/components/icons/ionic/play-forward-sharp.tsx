import { IconProps } from '../icon.types'
const PlayForwardSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <polygon points="16 400 256 256 16 112 16 400" />
      <polygon points="256 400 496 256 256 112 256 400" />
    </svg>
  )
}
export default PlayForwardSharp
