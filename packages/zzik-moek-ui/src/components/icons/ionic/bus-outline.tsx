import { IconProps } from '../icon.types'
const BusOutline = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
        x={80}
        y={112}
        width={352}
        height={192}
        rx={32}
        ry={32}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <rect
        x={80}
        y={304}
        width={352}
        height={128}
        rx={32}
        ry={32}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <path
        d="M400,112H112A32.09,32.09,0,0,1,80,80h0a32.09,32.09,0,0,1,32-32H400a32.09,32.09,0,0,1,32,32h0A32.09,32.09,0,0,1,400,112Z"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <path
        d="M144,432v22a10,10,0,0,1-10,10H106a10,10,0,0,1-10-10V432Z"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <path
        d="M416,432v22a10,10,0,0,1-10,10H378a10,10,0,0,1-10-10V432Z"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <circle
        cx={368}
        cy={368}
        r={16}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <circle
        cx={144}
        cy={368}
        r={16}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <line
        x1={256}
        y1={112}
        x2={256}
        y2={304}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <line
        x1={80}
        y1={80}
        x2={80}
        y2={368}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <line
        x1={432}
        y1={80}
        x2={432}
        y2={368}
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
export default BusOutline
