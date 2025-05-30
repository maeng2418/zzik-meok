import { IconProps } from '../icon.types'
const DiamondOutline = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
  return (
    <svg
      id="icons"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      height={size}
      width={size}
      tabIndex={tabIndex}
      focusable={focusable}
      fill="currentColor"
      {...props}
    >
      <path
        d="M35.42,188.21,243.17,457.67a16.17,16.17,0,0,0,25.66,0L476.58,188.21a16.52,16.52,0,0,0,.95-18.75L407.06,55.71A16.22,16.22,0,0,0,393.27,48H118.73a16.22,16.22,0,0,0-13.79,7.71L34.47,169.46A16.52,16.52,0,0,0,35.42,188.21Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <line
        x1={48}
        y1={176}
        x2={464}
        y2={176}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <polyline
        points="400 64 352 176 256 48"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <polyline
        points="112 64 160 176 256 48"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <line
        x1={256}
        y1={448}
        x2={160}
        y2={176}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <line
        x1={256}
        y1={448}
        x2={352}
        y2={176}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </svg>
  )
}
export default DiamondOutline
