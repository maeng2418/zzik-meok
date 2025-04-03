import { IconProps } from '../icon.types'
const SendSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M16,464,496,256,16,48V208l320,48L16,304Z" />
    </svg>
  )
}
export default SendSharp
