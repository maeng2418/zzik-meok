import { IconProps } from '../icon.types'
const Stop = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M392,432H120a40,40,0,0,1-40-40V120a40,40,0,0,1,40-40H392a40,40,0,0,1,40,40V392A40,40,0,0,1,392,432Z" />
    </svg>
  )
}
export default Stop
