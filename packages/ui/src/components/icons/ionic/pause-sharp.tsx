import { IconProps } from '../icon.types'
const PauseSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M224,432H144V80h80Z" />
      <path d="M368,432H288V80h80Z" />
    </svg>
  )
}
export default PauseSharp
