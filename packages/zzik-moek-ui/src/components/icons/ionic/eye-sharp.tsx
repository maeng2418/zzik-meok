import { IconProps } from '../icon.types'
const EyeSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <circle cx={256} cy={256} r={64} />
      <path d="M394.82,141.18C351.1,111.2,304.31,96,255.76,96c-43.69,0-86.28,13-126.59,38.48C88.52,160.23,48.67,207,16,256c26.42,44,62.56,89.24,100.2,115.18C159.38,400.92,206.33,416,255.76,416c49,0,95.85-15.07,139.3-44.79C433.31,345,469.71,299.82,496,256,469.62,212.57,433.1,167.44,394.82,141.18ZM256,352a96,96,0,1,1,96-96A96.11,96.11,0,0,1,256,352Z" />
    </svg>
  )
}
export default EyeSharp
