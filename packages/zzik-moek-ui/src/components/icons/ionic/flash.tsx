import { IconProps } from '../icon.types'
const Flash = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M194.82,496a18.36,18.36,0,0,1-18.1-21.53l0-.11L204.83,320H96a16,16,0,0,1-12.44-26.06L302.73,23a18.45,18.45,0,0,1,32.8,13.71c0,.3-.08.59-.13.89L307.19,192H416a16,16,0,0,1,12.44,26.06L209.24,489A18.45,18.45,0,0,1,194.82,496Z" />
    </svg>
  )
}
export default Flash
