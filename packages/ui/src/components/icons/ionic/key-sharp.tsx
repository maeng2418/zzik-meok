import { IconProps } from '../icon.types'
const KeySharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M218.1,167.2c0,13,0,25.6,4.1,37.4C179.1,255.2,54.7,399.1,54.7,399.1l2.9,36.3s34.8,33,40,28c15.4-15,24.8-25.2,24.8-25.2l7.24-43.35,47.11-3.47,3.78-46.8,49.63-.95.49-50.09,52.69,2.1,9-18.84c15.5,6.7,29.6,9.4,47.7,9.4,68.5,0,124-53.4,124-119.2S408.5,48,340,48,218.1,101.4,218.1,167.2ZM406.85,144A38.85,38.85,0,1,1,368,105.15,38.81,38.81,0,0,1,406.85,144Z" />
    </svg>
  )
}
export default KeySharp
