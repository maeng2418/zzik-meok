import { IconProps } from '../icon.types'
const BatteryHalf = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
        x={32}
        y={144}
        width={400}
        height={224}
        rx={45.7}
        ry={45.7}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'square',
          strokeMiterlimit: 10,
          strokeWidth: 32,
        }}
      />
      <rect
        x={85.69}
        y={198.93}
        width={154.31}
        height={114.13}
        rx={4}
        ry={4}
        style={{
          stroke: 'currentColor',
          strokeLinecap: 'square',
          strokeMiterlimit: 10,
          strokeWidth: 32,
        }}
      />
      <line
        x1={480}
        y1={218.67}
        x2={480}
        y2={293.33}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeMiterlimit: 10,
          strokeWidth: 32,
        }}
      />
    </svg>
  )
}
export default BatteryHalf
