import { IconProps } from '../icon.types'
const PrismSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
  return (
    <svg
      id="icons"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      height={size}
      width={size}
      tabIndex={tabIndex}
      focusable={focusable}
      fill="currentColor"
      {...props}
    >
      <path d="M256,16,16,352,256,496,496,352Zm-20,96.82V437.35L73.73,340Z" />
    </svg>
  )
}
export default PrismSharp
