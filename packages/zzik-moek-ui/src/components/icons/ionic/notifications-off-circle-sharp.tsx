import { IconProps } from '../icon.types'
const NotificationsOffCircleSharp = ({
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
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM144,308l28-36V239.7a131.83,131.83,0,0,1,2.34-25.42L285.92,336H144Zm112.18,76C233.6,384,216,373.75,216,352h80C295.7,373.37,278.55,384,256.18,384Zm93.48-3.74-211-227,23.68-21.52,211,227ZM368,330.85l-.32-.38,0,0,0,0L212.18,160.84A73.4,73.4,0,0,1,228,155.43L232,128h48l4,27.43c40,8.92,56,44,56,84.27V272l28,36Z" />
    </svg>
  )
}
export default NotificationsOffCircleSharp
