import { IconProps } from '../icon.types'
const CloudCircleSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M256,48C141.13,48,48,141.13,48,256s93.13,208,208,208,208-93.13,208-208S370.87,48,256,48Zm70,280H196c-33,0-60-23-60-56,0-34.21,26-53,56-56,7.28-23.9,29.5-48,64-48,36.5,0,67.55,27.23,72,72,21.49,1.12,48,14.09,48,44C376,314.28,353.5,328,326,328Z" />
    </svg>
  )
}
export default CloudCircleSharp
