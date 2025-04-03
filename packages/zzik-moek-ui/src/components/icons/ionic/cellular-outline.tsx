import { IconProps } from '../icon.types'
const CellularOutline = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <rect
        x={416}
        y={96}
        width={64}
        height={320}
        rx={8}
        ry={8}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <rect
        x={288}
        y={176}
        width={64}
        height={240}
        rx={8}
        ry={8}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <rect
        x={160}
        y={240}
        width={64}
        height={176}
        rx={8}
        ry={8}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <rect
        x={32}
        y={304}
        width={64}
        height={112}
        rx={8}
        ry={8}
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
export default CellularOutline
