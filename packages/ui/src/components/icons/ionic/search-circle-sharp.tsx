import { IconProps } from '../icon.types'
const SearchCircleSharp = ({
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
      <path d="M256,64C150.13,64,64,150.13,64,256s86.13,192,192,192,192-86.13,192-192S361.87,64,256,64Zm80,294.63-54.15-54.15a88.08,88.08,0,1,1,22.63-22.63L358.63,336Z" />
      <circle cx={232} cy={232} r={56} />
    </svg>
  )
}
export default SearchCircleSharp
