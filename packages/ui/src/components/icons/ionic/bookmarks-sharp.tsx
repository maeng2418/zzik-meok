import { IconProps } from '../icon.types'
const BookmarksSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <polygon points="112 0 112 48 416 48 416 416 464 448 464 0 112 0" />
      <polygon points="48 80 48 512 216 388 384 512 384 80 48 80" />
    </svg>
  )
}
export default BookmarksSharp
