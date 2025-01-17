import { IconProps } from '../icon.types'
const AppsOutline = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
        x={64}
        y={64}
        width={80}
        height={80}
        rx={40}
        ry={40}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeMiterlimit: 10,
          strokeWidth: 32,
        }}
      />
      <rect
        x={216}
        y={64}
        width={80}
        height={80}
        rx={40}
        ry={40}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeMiterlimit: 10,
          strokeWidth: 32,
        }}
      />
      <rect
        x={368}
        y={64}
        width={80}
        height={80}
        rx={40}
        ry={40}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeMiterlimit: 10,
          strokeWidth: 32,
        }}
      />
      <rect
        x={64}
        y={216}
        width={80}
        height={80}
        rx={40}
        ry={40}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeMiterlimit: 10,
          strokeWidth: 32,
        }}
      />
      <rect
        x={216}
        y={216}
        width={80}
        height={80}
        rx={40}
        ry={40}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeMiterlimit: 10,
          strokeWidth: 32,
        }}
      />
      <rect
        x={368}
        y={216}
        width={80}
        height={80}
        rx={40}
        ry={40}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeMiterlimit: 10,
          strokeWidth: 32,
        }}
      />
      <rect
        x={64}
        y={368}
        width={80}
        height={80}
        rx={40}
        ry={40}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeMiterlimit: 10,
          strokeWidth: 32,
        }}
      />
      <rect
        x={216}
        y={368}
        width={80}
        height={80}
        rx={40}
        ry={40}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeMiterlimit: 10,
          strokeWidth: 32,
        }}
      />
      <rect
        x={368}
        y={368}
        width={80}
        height={80}
        rx={40}
        ry={40}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeMiterlimit: 10,
          strokeWidth: 32,
        }}
      />
    </svg>
  )
}
export default AppsOutline
