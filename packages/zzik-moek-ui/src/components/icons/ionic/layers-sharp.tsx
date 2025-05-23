import { IconProps } from '../icon.types'
const LayersSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <polygon points="480 150 256 48 32 150 256 254 480 150" />
      <polygon points="255.71 392.95 110.9 326.75 32 362 256 464 480 362 401.31 326.7 255.71 392.95" />
      <path d="M480,256l-75.53-33.53L256.1,290.6,107.33,222.43,32,256,256,358,480,256S480,256,480,256Z" />
    </svg>
  )
}
export default LayersSharp
