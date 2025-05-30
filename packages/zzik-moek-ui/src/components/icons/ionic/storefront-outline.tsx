import { IconProps } from '../icon.types'
const StorefrontOutline = ({
  size = 24,
  tabIndex = -1,
  focusable = false,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      height={size}
      width={size}
      tabIndex={tabIndex}
      focusable={focusable}
      fill="currentColor"
      {...props}
    >
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        x1={448}
        y1={448}
        x2={448}
        y2={240}
      />
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        x1={64}
        y1={240}
        x2={64}
        y2={448}
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M382.47,48H129.53C107.74,48,88.06,60,79.6,78.46L36.3,173c-14.58,31.81,9.63,67.85,47.19,69q1,0,2,0c31.4,0,56.85-25.18,56.85-52.23,0,27,25.46,52.23,56.86,52.23S256,218.62,256,189.77c0,27,25.45,52.23,56.85,52.23s56.86-23.38,56.86-52.23c0,28.85,25.45,52.23,56.85,52.23q1,0,1.95,0c37.56-1.17,61.77-37.21,47.19-69L432.4,78.46C423.94,60,404.26,48,382.47,48Z"
      />
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        x1={32}
        y1={464}
        x2={480}
        y2={464}
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M136,288h80a24,24,0,0,1,24,24v88a0,0,0,0,1,0,0H112a0,0,0,0,1,0,0V312A24,24,0,0,1,136,288Z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M288,464V312a24,24,0,0,1,24-24h64a24,24,0,0,1,24,24V464"
      />
    </svg>
  )
}
export default StorefrontOutline
