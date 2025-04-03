import { IconProps } from '../icon.types'
const GridSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M240,240H32V32H240Z" />
      <path d="M480,240H272V32H480Z" />
      <path d="M240,480H32V272H240Z" />
      <path d="M480,480H272V272H480Z" />
    </svg>
  )
}
export default GridSharp
