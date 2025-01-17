import { IconProps } from '../icon.types'
const FilterSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <rect x={16} y={120} width={480} height={48} />
      <rect x={96} y={232} width={320} height={48} />
      <rect x={192} y={344} width={128} height={48} />
    </svg>
  )
}
export default FilterSharp
