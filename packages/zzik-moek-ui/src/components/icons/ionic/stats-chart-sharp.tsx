import { IconProps } from '../icon.types'
const StatsChartSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M128,496H48V304h80Z" />
      <path d="M352,496H272V208h80Z" />
      <path d="M464,496H384V96h80Z" />
      <path d="M240,496H160V16h80Z" />
    </svg>
  )
}
export default StatsChartSharp
