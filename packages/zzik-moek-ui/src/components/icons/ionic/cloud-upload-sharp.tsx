import { IconProps } from '../icon.types'
const CloudUploadSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M473.66,210c-16.56-12.3-37.7-20.75-59.52-24-6.62-39.18-24.21-72.67-51.3-97.45C334.15,62.25,296.21,47.79,256,47.79c-35.35,0-68,11.08-94.37,32.05a149.61,149.61,0,0,0-45.32,60.49c-29.94,4.6-57.12,16.68-77.39,34.55C13.46,197.33,0,227.24,0,261.39c0,34.52,14.49,66,40.79,88.76,25.12,21.69,58.94,33.64,95.21,33.64H240V230.42l-48,48-22.63-22.63L256,169.17l86.63,86.62L320,278.42l-48-48V383.79H396c31.34,0,59.91-8.8,80.45-24.77,23.26-18.1,35.55-44,35.55-74.83C512,254.25,498.74,228.58,473.66,210Z" />
      <rect x={240} y={383.79} width={32} height={80.41} />
    </svg>
  )
}
export default CloudUploadSharp
