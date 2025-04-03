import { IconProps } from '../icon.types'
const PaperPlaneSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <polygon points="496 16 15.88 208 195 289 448 64 223 317 304 496 496 16" />
    </svg>
  )
}
export default PaperPlaneSharp
