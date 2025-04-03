import { IconProps } from '../icon.types'
const Keypad = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M256,400a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
      <path d="M256,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
      <path d="M256,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
      <path d="M256,16a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
      <path d="M384,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
      <path d="M384,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
      <path d="M384,16a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
      <path d="M128,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
      <path d="M128,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
      <path d="M128,16a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" />
    </svg>
  )
}
export default Keypad
