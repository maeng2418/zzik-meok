import { IconProps } from '../icon.types'
const HeartDislikeSharp = ({
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
      <polygon points="32 64.45 421.47 454.39 444.31 431.92 54.85 42 32 64.45" />
      <path d="M62.67,192.91c-.56,55.63,19.77,106.94,62.16,156.88C165.08,397.21,219.39,429.46,262.3,458l9,6,9-6c18.49-12.3,39.1-25.3,59.79-39.89L71.74,149.28A114.62,114.62,0,0,0,62.67,192.91Z" />
      <path d="M417.83,349.79c42.39-49.94,62.72-101.25,62.16-156.88-.63-62-50.61-112.54-111.43-112.54-48.26,0-80.35,28-97.23,48.17-16.88-20.2-49-48.17-97.23-48.17A108.24,108.24,0,0,0,142.84,85l270,270.48C414.55,353.59,416.21,351.7,417.83,349.79Z" />
    </svg>
  )
}
export default HeartDislikeSharp
