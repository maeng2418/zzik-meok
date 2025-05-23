import { IconProps } from '../icon.types'
const CutSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M480,128H432L233.06,198.46l-59.13-31.59a72.16,72.16,0,1,0-25.69,41.47l52.2,31.72L192,277l-43.64,26.76a71.74,71.74,0,1,0,24.79,38L480,160ZM103.48,192a40,40,0,1,1,40-40A40,40,0,0,1,103.48,192Zm0,208a40,40,0,1,1,40-40A40,40,0,0,1,103.48,400Zm152-144a16,16,0,1,1,16-16A16,16,0,0,1,255.48,256Z" />
      <polygon points="343.79 259.87 260.05 308.05 432 368 479.99 368 480 336 343.79 259.87" />
    </svg>
  )
}
export default CutSharp
