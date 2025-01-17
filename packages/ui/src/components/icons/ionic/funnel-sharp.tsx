import { IconProps } from '../icon.types'
const FunnelSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <polygon points="0 48 192 288 192 416 320 464 320 288 512 48 0 48" />
    </svg>
  )
}
export default FunnelSharp
