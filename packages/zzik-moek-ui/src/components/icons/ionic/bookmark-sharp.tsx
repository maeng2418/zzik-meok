import { IconProps } from '../icon.types'
const BookmarkSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M416,480,256,357.41,96,480V32H416Z" />
    </svg>
  )
}
export default BookmarkSharp
