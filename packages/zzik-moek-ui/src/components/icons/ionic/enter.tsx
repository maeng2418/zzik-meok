import { IconProps } from '../icon.types'
const Enter = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M160,136V240H313.37l-52.68-52.69a16,16,0,0,1,22.62-22.62l80,80a16,16,0,0,1,0,22.62l-80,80a16,16,0,0,1-22.62-22.62L313.37,272H160V376a56.06,56.06,0,0,0,56,56H424a56.06,56.06,0,0,0,56-56V136a56.06,56.06,0,0,0-56-56H216A56.06,56.06,0,0,0,160,136Z" />
      <path d="M48,240a16,16,0,0,0,0,32H160V240Z" />
    </svg>
  )
}
export default Enter
