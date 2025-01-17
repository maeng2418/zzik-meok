import { IconProps } from '../icon.types'
const HandLeftOutline = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
        d="M80,320V144a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32V256"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <path
        d="M144,256V80a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32V240"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <path
        d="M272,241V96a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32V320"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <path
        d="M208,240V48a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32V240"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <path
        d="M80,320c0,117.4,64,176,152,176s123.71-39.6,144-88l52.71-144c6.66-18.05,3.64-34.79-11.87-43.6h0c-15.52-8.82-35.91-4.28-44.31,11.68L336,320"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
    </svg>
  )
}
export default HandLeftOutline
