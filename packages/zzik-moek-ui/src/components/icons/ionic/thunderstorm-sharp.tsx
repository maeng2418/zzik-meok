import { IconProps } from '../icon.types'
const ThunderstormSharp = ({
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
      <path d="M405.84,136.9A151.25,151.25,0,0,0,358.24,55a153,153,0,0,0-241.81,51.86C60.5,110.16,16,156.65,16,213.33,16,272.15,63.91,320,122.8,320h72.31L176,416h48v80L336,352H292.49l8-32H404.33a91.56,91.56,0,0,0,1.51-183.1Z" />
      <rect
        x={65.17}
        y={360}
        width={85.67}
        height={32}
        transform="translate(-276.6 304.44) rotate(-63.43)"
      />
      <rect
        x={94.11}
        y={432}
        width={67.78}
        height={32}
        transform="translate(-329.95 362.13) rotate(-63.43)"
      />
      <rect
        x={345.17}
        y={360}
        width={85.67}
        height={32}
        transform="translate(-121.83 554.88) rotate(-63.43)"
      />
      <rect
        x={374.11}
        y={432}
        width={67.78}
        height={32}
        transform="translate(-175.17 612.57) rotate(-63.43)"
      />
    </svg>
  )
}
export default ThunderstormSharp
