import { IconProps } from '../icon.types'
const HandRightOutline = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
        d="M432,320V144a32,32,0,0,0-32-32h0a32,32,0,0,0-32,32V256"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <path
        d="M368,256V80a32,32,0,0,0-32-32h0a32,32,0,0,0-32,32V240"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <path
        d="M240,241V96a32,32,0,0,0-32-32h0a32,32,0,0,0-32,32V320"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <path
        d="M304,240V48a32,32,0,0,0-32-32h0a32,32,0,0,0-32,32V240"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <path
        d="M432,320c0,117.4-64,176-152,176s-123.71-39.6-144-88L83.33,264c-6.66-18.05-3.64-34.79,11.87-43.6h0c15.52-8.82,35.91-4.28,44.31,11.68L176,320"
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
export default HandRightOutline
