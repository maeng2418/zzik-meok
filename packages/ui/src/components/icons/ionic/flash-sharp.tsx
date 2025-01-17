import { IconProps } from '../icon.types'
const FlashSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M432,208H288L320,16,80,304H224L192,496Z" />
    </svg>
  )
}
export default FlashSharp
