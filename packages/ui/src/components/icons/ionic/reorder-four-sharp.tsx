import { IconProps } from '../icon.types'
const ReorderFourSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
        x1={102}
        y1={304}
        x2={410}
        y2={304}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'square',
          strokeLinejoin: 'round',
          strokeWidth: 44,
        }}
      />
      <line
        x1={102}
        y1={208}
        x2={410}
        y2={208}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'square',
          strokeLinejoin: 'round',
          strokeWidth: 44,
        }}
      />
      <line
        x1={102}
        y1={112}
        x2={410}
        y2={112}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'square',
          strokeLinejoin: 'round',
          strokeWidth: 44,
        }}
      />
      <line
        x1={102}
        y1={400}
        x2={410}
        y2={400}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'square',
          strokeLinejoin: 'round',
          strokeWidth: 44,
        }}
      />
    </svg>
  )
}
export default ReorderFourSharp
