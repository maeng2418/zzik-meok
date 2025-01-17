import { IconProps } from '../icon.types'
const CaretBackCircle = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M48,256c0,114.87,93.13,208,208,208s208-93.13,208-208S370.87,48,256,48,48,141.13,48,256Zm252-74.14V330.14a16,16,0,0,1-26.23,12.29L184.68,268.3a16,16,0,0,1,0-24.6l89.09-74.13A16,16,0,0,1,300,181.86Z" />
    </svg>
  )
}
export default CaretBackCircle
