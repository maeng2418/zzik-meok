import { IconProps } from '../icon.types'
const EyedropSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M480,96.22a63.84,63.84,0,0,0-18.95-45.61,65,65,0,0,0-45.71-19h-.76a61.78,61.78,0,0,0-44.22,19.09l-74.88,74.88L261.6,91.72l-34.07,33.91-33.85,34,44,44L32,409.37V480h70.63l205.7-205.71L352,317.94l11.31-11.19c.11-.1,10.42-10.31,22.79-22.68l33.85-34-33.89-33.89L461,141.23A63.18,63.18,0,0,0,480,96.22ZM245,292.35,219.65,267l40.68-40.69,25.38,25.38Z" />
    </svg>
  )
}
export default EyedropSharp
