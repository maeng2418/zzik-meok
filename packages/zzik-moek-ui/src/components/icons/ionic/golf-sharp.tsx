import { IconProps } from '../icon.types'
const GolfSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M240,16V191.66c0,.23,0,.47,0,.7V320.47q8-.47,16-.47t16,.47V202.3L448,112Z" />
      <path d="M462.91,457.5c-8.54-42.85-35-78.74-76.62-103.8C353.86,334.15,313.76,322.4,272,320v95.79H240V320c-41.79,2.4-81.89,14.15-114.32,33.7-41.59,25.06-68.08,60.95-76.62,103.8-2,9.81-.68,38.5-.68,38.5H463.59S464.87,467.31,462.91,457.5Z" />
    </svg>
  )
}
export default GolfSharp
