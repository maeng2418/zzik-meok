import { IconProps } from '../icon.types'
const MagnetOutline = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
        d="M421.83,293.82A144,144,0,0,0,218.18,90.17"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeMiterlimit: 10,
          strokeWidth: 32,
        }}
      />
      <path
        d="M353.94,225.94a48,48,0,0,0-67.88-67.88"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeMiterlimit: 10,
          strokeWidth: 32,
        }}
      />
      <line
        x1={192}
        y1={464}
        x2={192}
        y2={416}
        style={{
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeMiterlimit: 10,
          strokeWidth: 32,
        }}
      />
      <line
        x1={90.18}
        y1={421.82}
        x2={124.12}
        y2={387.88}
        style={{
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeMiterlimit: 10,
          strokeWidth: 32,
        }}
      />
      <line
        x1={48}
        y1={320}
        x2={96}
        y2={320}
        style={{
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeMiterlimit: 10,
          strokeWidth: 32,
        }}
      />
      <path
        d="M286.06,158.06,172.92,271.19a32,32,0,0,1-45.25,0L105,248.57a32,32,0,0,1,0-45.26L218.18,90.17"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <path
        d="M421.83,293.82,308.69,407a32,32,0,0,1-45.26,0l-22.62-22.63a32,32,0,0,1,0-45.26L353.94,225.94"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <line
        x1={139.6}
        y1={169.98}
        x2={207.48}
        y2={237.87}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <line
        x1={275.36}
        y1={305.75}
        x2={343.25}
        y2={373.63}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
    </svg>
  )
}
export default MagnetOutline
