import { IconProps } from '../icon.types'
const HeadsetOutline = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path
        d="M83,384c-13-33-35-93.37-35-128C48,141.12,149.33,48,256,48s208,93.12,208,208c0,34.63-23,97-35,128"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <path
        d="M108.39,270.13l-13.69,8h0C64.47,295.83,63,350.54,91.32,400.33s75.87,75.81,106.1,58.12h0l13.69-8a16.16,16.16,0,0,0,5.78-21.87L130,276A15.74,15.74,0,0,0,108.39,270.13Z"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeMiterlimit: 10,
          strokeWidth: 32,
        }}
      />
      <path
        d="M403.61,270.13l13.69,8h0c30.23,17.69,31.74,72.4,3.38,122.19s-75.87,75.81-106.1,58.12h0l-13.69-8a16.16,16.16,0,0,1-5.78-21.87L382,276A15.74,15.74,0,0,1,403.61,270.13Z"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeMiterlimit: 10,
          strokeWidth: 32,
        }}
      />
    </svg>
  )
}
export default HeadsetOutline
