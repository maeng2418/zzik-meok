import { IconProps } from '../icon.types'
const LockOpenSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M420,192H198V111.25a58.08,58.08,0,0,1,99.07-41.07A59.4,59.4,0,0,1,314,112h38a96,96,0,1,0-192,0v80H92a12,12,0,0,0-12,12V484a12,12,0,0,0,12,12H420a12,12,0,0,0,12-12V204A12,12,0,0,0,420,192Z" />
    </svg>
  )
}
export default LockOpenSharp
