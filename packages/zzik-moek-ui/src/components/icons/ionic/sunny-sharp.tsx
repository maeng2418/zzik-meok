import { IconProps } from '../icon.types'
const SunnySharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <rect x={234} y={26} width={44} height={92} />
      <rect x={234} y={394} width={44} height={92} />
      <rect
        x={340.11}
        y={103.89}
        width={92}
        height={44}
        transform="translate(24.07 309.89) rotate(-45)"
      />
      <rect
        x={79.89}
        y={364.11}
        width={92}
        height={44}
        transform="translate(-236.14 202.1) rotate(-45)"
      />
      <rect x={394} y={234} width={92} height={44} />
      <rect x={26} y={234} width={92} height={44} />
      <rect
        x={364.11}
        y={340.11}
        width={44}
        height={92}
        transform="translate(-159.93 386.11) rotate(-45)"
      />
      <rect
        x={103.89}
        y={79.89}
        width={44}
        height={92}
        transform="translate(-52.15 125.89) rotate(-45)"
      />
      <path d="M256,358A102,102,0,1,1,358,256,102.12,102.12,0,0,1,256,358Z" />
    </svg>
  )
}
export default SunnySharp
