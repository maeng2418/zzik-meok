import { IconProps } from '../icon.types'
const SaveSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M380.44,32H64A32,32,0,0,0,32,64V448a32,32,0,0,0,32,32H448a32.09,32.09,0,0,0,32-32V131.56ZM112,176V112H304v64ZM335.91,355.76a80,80,0,1,1-83.66-83.67A80.21,80.21,0,0,1,335.91,355.76Z" />
    </svg>
  )
}
export default SaveSharp
