import { IconProps } from '../icon.types'
const CameraSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <circle cx={256} cy={272} r={64} />
      <path d="M456,144H373c-3,0-6.72-1.94-9.62-5l-27.28-42.8C325,80,320,80,302,80H210c-18,0-24,0-34.07,16.21L148.62,139c-2.22,2.42-5.34,5-8.62,5V128a8,8,0,0,0-8-8H92a8,8,0,0,0-8,8v16H56a24,24,0,0,0-24,24V408a24,24,0,0,0,24,24H456a24,24,0,0,0,24-24V168A24,24,0,0,0,456,144ZM260.51,367.9a96,96,0,1,1,91.39-91.39A96.11,96.11,0,0,1,260.51,367.9Z" />
    </svg>
  )
}
export default CameraSharp
