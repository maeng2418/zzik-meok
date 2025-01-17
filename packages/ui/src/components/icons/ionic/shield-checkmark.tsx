import { IconProps } from '../icon.types'
const ShieldCheckmark = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M479.07,111.36a16,16,0,0,0-13.15-14.74c-86.5-15.52-122.61-26.74-203.33-63.2a16,16,0,0,0-13.18,0C168.69,69.88,132.58,81.1,46.08,96.62a16,16,0,0,0-13.15,14.74c-3.85,61.11,4.36,118.05,24.43,169.24A349.47,349.47,0,0,0,129,393.11c53.47,56.73,110.24,81.37,121.07,85.73a16,16,0,0,0,12,0c10.83-4.36,67.6-29,121.07-85.73A349.47,349.47,0,0,0,454.64,280.6C474.71,229.41,482.92,172.47,479.07,111.36Zm-131,75.11-110.8,128A16,16,0,0,1,225.86,320h-.66a16,16,0,0,1-11.2-4.57l-49.2-48.2a16,16,0,1,1,22.4-22.86l37,36.29L323.9,165.53a16,16,0,0,1,24.2,20.94Z" />
    </svg>
  )
}
export default ShieldCheckmark
