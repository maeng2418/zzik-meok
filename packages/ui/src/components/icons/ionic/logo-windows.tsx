import { IconProps } from '../icon.types'
const LogoWindows = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M480,265H232V444l248,36V265Z" />
      <path d="M216,265H32V415l184,26.7V265Z" />
      <path d="M480,32,232,67.4V249H480V32Z" />
      <path d="M216,69.7,32,96V249H216V69.7Z" />
    </svg>
  )
}
export default LogoWindows
