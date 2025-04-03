import { IconProps } from '../icon.types'
const CellularSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M496,432H400V80h96Z" />
      <path d="M368,432H272V160h96Z" />
      <path d="M240,432H144V224h96Z" />
      <path d="M112,432H16V288h96Z" />
    </svg>
  )
}
export default CellularSharp
