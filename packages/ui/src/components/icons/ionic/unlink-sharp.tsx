import { IconProps } from '../icon.types'
const UnlinkSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path
        d="M200.66,352H144a96,96,0,0,1,0-192h55.41"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={48}
      />
      <path
        d="M312.59,160H368a96,96,0,0,1,0,192H311.34"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={48}
      />
    </svg>
  )
}
export default UnlinkSharp
