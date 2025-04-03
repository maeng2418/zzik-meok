import { IconProps } from '../icon.types'
const EllipsisHorizontal = ({
  size = 24,
  tabIndex = -1,
  focusable = false,
  ...props
}: IconProps) => {
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
      <circle cx={256} cy={256} r={48} />
      <circle cx={416} cy={256} r={48} />
      <circle cx={96} cy={256} r={48} />
    </svg>
  )
}
export default EllipsisHorizontal
