import { IconProps } from '../icon.types'
const ReloadCircleSharp = ({
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
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM376,238.77H287l36.88-36.88-5.6-6.51a87.38,87.38,0,1,0-62.94,148,87.55,87.55,0,0,0,82.42-58.25L343.13,270l30.17,10.67L368,295.8A119.4,119.4,0,1,1,255.38,136.62a118.34,118.34,0,0,1,86.36,36.95l.56.62,4.31,5L376,149.81Z" />
    </svg>
  )
}
export default ReloadCircleSharp
