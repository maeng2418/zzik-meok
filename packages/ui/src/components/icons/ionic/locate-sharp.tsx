import { IconProps } from '../icon.types'
const LocateSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <line
        x1={256}
        y1={96}
        x2={256}
        y2={56}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'square',
          strokeLinejoin: 'round',
          strokeWidth: 48,
        }}
      />
      <line
        x1={256}
        y1={456}
        x2={256}
        y2={416}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'square',
          strokeLinejoin: 'round',
          strokeWidth: 48,
        }}
      />
      <path
        d="M256,112A144,144,0,1,0,400,256,144,144,0,0,0,256,112Z"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'square',
          strokeLinejoin: 'round',
          strokeWidth: 48,
        }}
      />
      <line
        x1={416}
        y1={256}
        x2={456}
        y2={256}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'square',
          strokeLinejoin: 'round',
          strokeWidth: 48,
        }}
      />
      <line
        x1={56}
        y1={256}
        x2={96}
        y2={256}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'square',
          strokeLinejoin: 'round',
          strokeWidth: 48,
        }}
      />
    </svg>
  )
}
export default LocateSharp
