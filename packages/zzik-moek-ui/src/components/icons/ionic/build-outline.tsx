import { IconProps } from '../icon.types'
const BuildOutline = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
        d="M393.87,190a32.1,32.1,0,0,1-45.25,0l-26.57-26.57a32.09,32.09,0,0,1,0-45.26L382.19,58a1,1,0,0,0-.3-1.64c-38.82-16.64-89.15-8.16-121.11,23.57-30.58,30.35-32.32,76-21.12,115.84a31.93,31.93,0,0,1-9.06,32.08L64,380a48.17,48.17,0,1,0,68,68L285.86,281a31.93,31.93,0,0,1,31.6-9.13C357,282.46,402,280.47,432.18,250.68c32.49-32,39.5-88.56,23.75-120.93a1,1,0,0,0-1.6-.26Z"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeMiterlimit: 10,
          strokeWidth: 32,
        }}
      />
      <circle cx={96} cy={416} r={16} />
    </svg>
  )
}
export default BuildOutline
