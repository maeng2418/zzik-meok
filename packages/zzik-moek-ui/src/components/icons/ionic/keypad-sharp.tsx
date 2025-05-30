import { IconProps } from '../icon.types'
const KeypadSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <rect x={80} y={16} width={96} height={96} rx={8} ry={8} />
      <rect x={208} y={16} width={96} height={96} rx={8} ry={8} />
      <rect x={336} y={16} width={96} height={96} rx={8} ry={8} />
      <rect x={80} y={144} width={96} height={96} rx={8} ry={8} />
      <rect x={208} y={144} width={96} height={96} rx={8} ry={8} />
      <rect x={336} y={144} width={96} height={96} rx={8} ry={8} />
      <rect x={80} y={272} width={96} height={96} rx={8} ry={8} />
      <rect x={208} y={272} width={96} height={96} rx={8} ry={8} />
      <rect x={208} y={400} width={96} height={96} rx={8} ry={8} />
      <rect x={336} y={272} width={96} height={96} rx={8} ry={8} />
    </svg>
  )
}
export default KeypadSharp
