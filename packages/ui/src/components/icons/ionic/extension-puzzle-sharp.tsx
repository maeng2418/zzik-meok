import { IconProps } from '../icon.types'
const ExtensionPuzzleSharp = ({
  size = 24,
  tabIndex = -1,
  focusable = false,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      height={size}
      width={size}
      tabIndex={tabIndex}
      focusable={focusable}
      fill="currentColor"
      {...props}
    >
      <path d="M345.14,480H256V434.29a31.3,31.3,0,0,0-9.59-22.65c-7.67-7.56-18.83-11.81-30.57-11.64a44.38,44.38,0,0,0-28.45,10.67c-5.2,4.6-11.39,12.56-11.39,24.42V480H87.62A55.68,55.68,0,0,1,32,424.38V336H77.71c9.16,0,18.07-3.92,25.09-11A42.06,42.06,0,0,0,115,295.08C114.7,273.89,97.26,256,76.91,256H32V166.66a53.77,53.77,0,0,1,16.53-39A55.88,55.88,0,0,1,87.62,112h63.24V97.52A65.53,65.53,0,0,1,217.54,32c35.49.62,64.36,30.38,64.36,66.33V112h63.24A54.28,54.28,0,0,1,400,166.86V230.1h13.66c36.58,0,66.34,29,66.34,64.64,0,36.61-29.39,66.4-65.52,66.4H400v63.24C400,455.05,375.39,480,345.14,480Z" />
    </svg>
  )
}
export default ExtensionPuzzleSharp
