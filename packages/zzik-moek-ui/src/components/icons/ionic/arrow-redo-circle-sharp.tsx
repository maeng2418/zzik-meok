import { IconProps } from '../icon.types'
const ArrowRedoCircleSharp = ({
  size = 24,
  tabIndex = -1,
  focusable = false,
  ...props
}: IconProps) => {
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
      <path d="M48,256c0,114.87,93.13,208,208,208s208-93.13,208-208S370.87,48,256,48,48,141.13,48,256Zm98,88c0-68.13,22.67-137.14,119.17-137.14V152L366,248,265.17,344V289.14C198.48,289.14,173.85,308.43,146,344Z" />
    </svg>
  )
}
export default ArrowRedoCircleSharp
