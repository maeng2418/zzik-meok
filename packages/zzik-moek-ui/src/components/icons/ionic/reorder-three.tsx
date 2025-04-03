import { IconProps } from '../icon.types'
const ReorderThree = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
        y1={256}
        x2={410}
        y2={256}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 44,
        }}
      />
      <line
        x1={102}
        y1={176}
        x2={410}
        y2={176}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 44,
        }}
      />
      <line
        x1={102}
        y1={336}
        x2={410}
        y2={336}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 44,
        }}
      />
    </svg>
  )
}
export default ReorderThree
