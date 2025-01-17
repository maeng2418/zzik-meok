import { IconProps } from '../icon.types'
const FilmOutline = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
        x={48}
        y={96}
        width={416}
        height={320}
        rx={28}
        ry={28}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <rect
        x={384}
        y={336}
        width={80}
        height={80}
        rx={28}
        ry={28}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <rect
        x={384}
        y={256}
        width={80}
        height={80}
        rx={28}
        ry={28}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <rect
        x={384}
        y={176}
        width={80}
        height={80}
        rx={28}
        ry={28}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <rect
        x={384}
        y={96}
        width={80}
        height={80}
        rx={28}
        ry={28}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <rect
        x={48}
        y={336}
        width={80}
        height={80}
        rx={28}
        ry={28}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <rect
        x={48}
        y={256}
        width={80}
        height={80}
        rx={28}
        ry={28}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <rect
        x={48}
        y={176}
        width={80}
        height={80}
        rx={28}
        ry={28}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <rect
        x={48}
        y={96}
        width={80}
        height={80}
        rx={28}
        ry={28}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <rect
        x={128}
        y={96}
        width={256}
        height={160}
        rx={28}
        ry={28}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <rect
        x={128}
        y={256}
        width={256}
        height={160}
        rx={28}
        ry={28}
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
export default FilmOutline
