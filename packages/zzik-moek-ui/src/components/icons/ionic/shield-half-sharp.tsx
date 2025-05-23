import { IconProps } from '../icon.types'
const ShieldHalfSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
  return (
    <svg
      id="icons"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      height={size}
      width={size}
      tabIndex={tabIndex}
      focusable={focusable}
      fill="currentColor"
      {...props}
    >
      <path d="M256,32C174,69.06,121.38,86.46,32,96c0,77.59,5.27,133.36,25.29,184.51a348.86,348.86,0,0,0,71.43,112.41C178.32,445.58,232.89,473.32,256,480c23.11-6.68,77.68-34.42,127.28-87.08a348.86,348.86,0,0,0,71.43-112.41C474.73,229.36,480,173.59,480,96,390.62,86.46,338,69.06,256,32ZM417.47,265.93a309.18,309.18,0,0,1-63.31,99.56C316,406,276.65,428.31,256,437.36V75.8c38.75,17,68.73,28.3,97.93,36.89a613.12,613.12,0,0,0,85.6,18.52C437.81,191.43,431.17,230.9,417.47,265.93Z" />
    </svg>
  )
}
export default ShieldHalfSharp
