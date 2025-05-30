import { IconProps } from '../icon.types'
const BoatOutline = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
        d="M461.93,261.05c-2-4.76-6.71-7.83-11.67-9.49L263.08,177.08a23.78,23.78,0,0,0-14.17,0l-187,74.52c-5,1.56-9.83,4.77-11.81,9.53s-2.94,9.37-1,15.08L95.63,395.36A7.46,7.46,0,0,0,103.1,400c26.69-1.68,50.31-15.23,68.38-32.5a7.66,7.66,0,0,1,10.49,0C201.29,386,227,400,256,400s54.56-14,73.88-32.54a7.67,7.67,0,0,1,10.5,0c18.07,17.28,41.69,30.86,68.38,32.54a7.45,7.45,0,0,0,7.46-4.61l46.7-119.16C464.9,271.45,463.91,265.82,461.93,261.05Z"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeMiterlimit: 10,
          strokeWidth: 32,
        }}
      />
      <path d="M416,473.14a6.84,6.84,0,0,0-3.56-6c-27.08-14.55-51.77-36.82-62.63-48a10.05,10.05,0,0,0-12.72-1.51c-50.33,32.42-111.61,32.44-161.95.05a10.09,10.09,0,0,0-12.82,1.56c-10.77,11.28-35.19,33.3-62.43,47.75A7.15,7.15,0,0,0,96,472.72a6.73,6.73,0,0,0,7.92,7.15c20.85-4.18,41-13.68,60.2-23.83a8.71,8.71,0,0,1,8-.06A185.14,185.14,0,0,0,340,456a8.82,8.82,0,0,1,8.09.06c19.1,10,39.22,19.59,60,23.8a6.72,6.72,0,0,0,7.95-6.71Z" />
      <path
        d="M320,96V72a24.07,24.07,0,0,0-24-24H216a24.07,24.07,0,0,0-24,24V96"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <path
        d="M416,233V144a48.14,48.14,0,0,0-48-48H144a48.14,48.14,0,0,0-48,48v92"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <line
        x1={256}
        y1={183.6}
        x2={256}
        y2={396.45}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
    </svg>
  )
}
export default BoatOutline
