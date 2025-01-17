import { IconProps } from '../icon.types'
const CalendarOutline = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      height={size}
      width={size}
      tabIndex={tabIndex}
      focusable={focusable}
      fill="currentColor"
      {...props}
    >
      <rect
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={32}
        x={48}
        y={80}
        width={416}
        height={384}
        rx={48}
      />
      <circle cx={296} cy={232} r={24} />
      <circle cx={376} cy={232} r={24} />
      <circle cx={296} cy={312} r={24} />
      <circle cx={376} cy={312} r={24} />
      <circle cx={136} cy={312} r={24} />
      <circle cx={216} cy={312} r={24} />
      <circle cx={136} cy={392} r={24} />
      <circle cx={216} cy={392} r={24} />
      <circle cx={296} cy={392} r={24} />
      <line
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={32}
        strokeLinecap="round"
        x1={128}
        y1={48}
        x2={128}
        y2={80}
      />
      <line
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={32}
        strokeLinecap="round"
        x1={384}
        y1={48}
        x2={384}
        y2={80}
      />
      <line
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={32}
        x1={464}
        y1={160}
        x2={48}
        y2={160}
      />
    </svg>
  )
}
export default CalendarOutline
