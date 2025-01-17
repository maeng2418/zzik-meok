import { IconProps } from '../icon.types'
const SchoolSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <polygon points="256 370.43 96 279 96 377.42 256 466.3 416 377.42 416 279 256 370.43" />
      <polygon points="512.25 192 256 45.57 -0.25 192 256 338.43 464 219.57 464 384 512 384 512 192.14 512.25 192" />
    </svg>
  )
}
export default SchoolSharp
