import { IconProps } from '../icon.types'
const RainySharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M364,336H130c-29.5,0-54.92-7.83-73.53-22.64C35.23,296.44,24,271.35,24,240.8c0-26.66,10.08-49.8,29.14-66.91,15.24-13.68,36.17-23.21,59-26.84h0c.06,0,.08,0,.09-.05,6.44-39,23.83-72.09,50.31-95.68A140.24,140.24,0,0,1,256,16c30.23,0,58.48,9.39,81.71,27.17a142.69,142.69,0,0,1,45.36,60.66c29.41,4.82,54.72,17.11,73.19,35.54C477,160.11,488,187.71,488,219.2c0,32.85-13.13,62.87-37,84.52C428.11,324.54,397.2,336,364,336Zm19-232.18Z" />
      <rect
        x={87.16}
        y={386}
        width={89.69}
        height={32}
        transform="translate(-275.7 288.83) rotate(-56.31)"
      />
      <rect
        x={122.31}
        y={410}
        width={147.38}
        height={32}
        transform="translate(-267.17 352.77) rotate(-56.31)"
      />
      <rect
        x={247.16}
        y={386}
        width={89.69}
        height={32}
        transform="translate(-204.46 421.96) rotate(-56.31)"
      />
      <rect
        x={282.31}
        y={410}
        width={147.38}
        height={32}
        transform="translate(-195.93 485.9) rotate(-56.31)"
      />
    </svg>
  )
}
export default RainySharp
