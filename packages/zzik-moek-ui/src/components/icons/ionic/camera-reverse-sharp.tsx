import { IconProps } from '../icon.types'
const CameraReverseSharp = ({
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
      <path d="M456,144H373c-3,0-6.72-1.94-9.62-5L336.07,96.21C326,80,320,80,302,80H210c-18,0-23,0-34.07,16.21L148.62,139c-2.22,2.42-5.34,5-8.62,5V128a8,8,0,0,0-8-8H92a8,8,0,0,0-8,8v16H56a24,24,0,0,0-24,24V408a24,24,0,0,0,24,24H456a24,24,0,0,0,24-24V168A24,24,0,0,0,456,144ZM256,368c-47.82,0-87.76-34.23-95-80H117.37L176,229.37,234.63,288H194a64.07,64.07,0,0,0,102.63,33.49L320,343l-3.68,3.72A96.64,96.64,0,0,1,256,368Zm80-53.84L277.11,256H318a64.26,64.26,0,0,0-103-33.36L192,200l3.14-2.45A96.19,96.19,0,0,1,255.76,176c47.85,0,87,34.19,94.24,80h44.92Z" />
    </svg>
  )
}
export default CameraReverseSharp
