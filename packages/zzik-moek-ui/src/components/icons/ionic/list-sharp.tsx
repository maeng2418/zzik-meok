import { IconProps } from '../icon.types'
const ListSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
        x1={144}
        y1={144}
        x2={464}
        y2={144}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinejoin: 'round',
          strokeWidth: 48,
        }}
      />
      <line
        x1={144}
        y1={256}
        x2={464}
        y2={256}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinejoin: 'round',
          strokeWidth: 48,
        }}
      />
      <line
        x1={144}
        y1={368}
        x2={464}
        y2={368}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinejoin: 'round',
          strokeWidth: 48,
        }}
      />
      <rect
        x={64}
        y={128}
        width={32}
        height={32}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'square',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <rect
        x={64}
        y={240}
        width={32}
        height={32}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'square',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <rect
        x={64}
        y={352}
        width={32}
        height={32}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'square',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
    </svg>
  )
}
export default ListSharp
