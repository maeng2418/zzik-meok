import { IconProps } from '../icon.types'
const AlbumsSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <rect x={128} y={64} width={256} height={32} />
      <rect x={96} y={112} width={320} height={32} />
      <path d="M464,448H48V160H464Z" />
    </svg>
  )
}
export default AlbumsSharp
