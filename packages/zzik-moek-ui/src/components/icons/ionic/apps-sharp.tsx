import { IconProps } from '../icon.types'
const AppsSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <rect x={48} y={48} width={112} height={112} rx={8} ry={8} />
      <rect x={200} y={48} width={112} height={112} rx={8} ry={8} />
      <rect x={352} y={48} width={112} height={112} rx={8} ry={8} />
      <rect x={48} y={200} width={112} height={112} rx={8} ry={8} />
      <rect x={200} y={200} width={112} height={112} rx={8} ry={8} />
      <rect x={352} y={200} width={112} height={112} rx={8} ry={8} />
      <rect x={48} y={352} width={112} height={112} rx={8} ry={8} />
      <rect x={200} y={352} width={112} height={112} rx={8} ry={8} />
      <rect x={352} y={352} width={112} height={112} rx={8} ry={8} />
    </svg>
  )
}
export default AppsSharp
