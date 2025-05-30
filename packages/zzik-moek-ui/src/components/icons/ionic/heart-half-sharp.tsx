import { IconProps } from '../icon.types'
const HeartHalfSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M352.92,64c-48.11,0-80.1,28-96.92,48.21C239.18,92,207.19,64,159.08,64,98.46,64,48.63,114.54,48,176.65c-.56,55.68,19.71,107,62,157,40.12,47.46,94.25,79.75,137,108.32l9,6,9-6c42.78-28.57,96.91-60.86,137-108.32,42.25-50,62.52-101.35,62-157C463.37,114.54,413.54,64,352.92,64Zm24.67,249c-31.78,37.6-74.68,65.75-112.52,90.59l-9.07,6V162.23l24.59-29.54C294.53,116,318.38,96,352.92,96c43.15,0,78.62,36.32,79.07,81a178.63,178.63,0,0,1-12.69,68.59C410.27,268.43,396.63,290.5,377.59,313Z" />
    </svg>
  )
}
export default HeartHalfSharp
