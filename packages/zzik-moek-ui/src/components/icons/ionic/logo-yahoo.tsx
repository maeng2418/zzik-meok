import { IconProps } from '../icon.types'
const LogoYahoo = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M410.32,37.13c-13.56,0-27-.93-39.12-5.13L256,218.67,140.8,32c-12.12,4.2-24.84,5.13-38.4,5.13C89.08,37.13,75.88,36.08,64,32L217.6,280.15V480c12-4.08,25-5.13,38.4-5.13s26.4,1.05,38.4,5.13V280.5L448,32C436.12,36,423.64,37.13,410.32,37.13Z" />
    </svg>
  )
}
export default LogoYahoo
