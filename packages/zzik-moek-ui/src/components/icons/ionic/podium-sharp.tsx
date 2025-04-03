import { IconProps } from '../icon.types'
const PodiumSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <rect x={160} y={32} width={192} height={448} />
      <rect x={384} y={192} width={112} height={288} />
      <rect x={16} y={128} width={112} height={352} />
    </svg>
  )
}
export default PodiumSharp
