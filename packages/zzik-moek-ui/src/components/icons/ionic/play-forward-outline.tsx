import { IconProps } from '../icon.types'
const PlayForwardOutline = ({
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
      <path
        d="M32,145.52v221c0,13.28,13,21.72,23.63,15.35l188.87-113c9.24-5.53,9.24-20.07,0-25.6l-188.87-113C45,123.8,32,132.24,32,145.52Z"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeMiterlimit: 10,
          strokeWidth: 32,
        }}
      />
      <path
        d="M260.57,145.52v221c0,13.28,13,21.72,23.63,15.35l188.87-113c9.24-5.53,9.24-20.07,0-25.6l-188.87-113C273.56,123.8,260.57,132.24,260.57,145.52Z"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeMiterlimit: 10,
          strokeWidth: 32,
        }}
      />
    </svg>
  )
}
export default PlayForwardOutline
