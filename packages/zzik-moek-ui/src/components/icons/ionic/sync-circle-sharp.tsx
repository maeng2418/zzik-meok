import { IconProps } from '../icon.types'
const SyncCircleSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M256,48C141.13,48,48,141.13,48,256s93.13,208,208,208,208-93.13,208-208S370.87,48,256,48Zm0,320a112.19,112.19,0,0,1-111.27-98.23l-8.86,8.86L113.24,256l46-46,47.55,45.48-22.12,23.12-7.2-6.88a80.26,80.26,0,0,0,138.48,37.5l23.77,21.41A112.82,112.82,0,0,1,256,368Zm96.79-66L305.24,256.5l22.12-23.12,6.86,6.55A80.2,80.2,0,0,0,196,202.64l-23.82-21.37A112.18,112.18,0,0,1,367,242.49l9.11-9.12L398.76,256Z" />
    </svg>
  )
}
export default SyncCircleSharp
