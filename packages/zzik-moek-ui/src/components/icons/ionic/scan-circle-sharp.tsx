import { IconProps } from '../icon.types'
const ScanCircleSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM232,368H188a44.05,44.05,0,0,1-44-44V280h32v44a12,12,0,0,0,12,12h44Zm0-192H188a12,12,0,0,0-12,12v44H144V188a44.05,44.05,0,0,1,44-44h44ZM368,324a44.05,44.05,0,0,1-44,44H280V336h44a12,12,0,0,0,12-12V280h32Zm0-92H336V188a12,12,0,0,0-12-12H280V144h44a44.05,44.05,0,0,1,44,44Z" />
    </svg>
  )
}
export default ScanCircleSharp
