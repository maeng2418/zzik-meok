import { IconProps } from '../icon.types'
const Clipboard = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M368,48H356.59a8,8,0,0,1-7.44-5.08A42.18,42.18,0,0,0,309.87,16H202.13a42.18,42.18,0,0,0-39.28,26.92A8,8,0,0,1,155.41,48H144a64,64,0,0,0-64,64V432a64,64,0,0,0,64,64H368a64,64,0,0,0,64-64V112A64,64,0,0,0,368,48Zm-48.13,64H192.13a16,16,0,0,1,0-32H319.87a16,16,0,0,1,0,32Z" />
    </svg>
  )
}
export default Clipboard
