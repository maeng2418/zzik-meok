import { IconProps } from '../icon.types'
const EyeOffSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <rect
        x={240.44}
        y={0.03}
        width={31.11}
        height={511.95}
        transform="translate(-106.04 256) rotate(-45)"
      />
      <path d="M259.34,192.09l60.57,60.57A64.07,64.07,0,0,0,259.34,192.09Z" />
      <path d="M252.66,319.91l-60.57-60.57A64.07,64.07,0,0,0,252.66,319.91Z" />
      <path d="M256,352a96,96,0,0,1-92.6-121.34L94.33,161.58C66.12,187.42,39.24,221.14,16,256c26.42,44,62.56,89.24,100.2,115.18C159.38,400.92,206.33,416,255.76,416A233.47,233.47,0,0,0,335,402.2l-53.61-53.6A95.84,95.84,0,0,1,256,352Z" />
      <path d="M256,160a96,96,0,0,1,92.6,121.34L419.26,352c29.15-26.25,56.07-61.56,76.74-96-26.38-43.43-62.9-88.56-101.18-114.82C351.1,111.2,304.31,96,255.76,96a222.92,222.92,0,0,0-78.21,14.29l53.11,53.11A95.84,95.84,0,0,1,256,160Z" />
    </svg>
  )
}
export default EyeOffSharp
