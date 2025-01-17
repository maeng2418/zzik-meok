import { IconProps } from '../icon.types'
const BatteryHalfSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M17,384H449V128H17ZM49,160H417V352H49Z" />
      <rect x={70.69} y={182.92} width={185.31} height={146.16} />
      <rect x={465} y={202.67} width={32} height={106.67} />
    </svg>
  )
}
export default BatteryHalfSharp
