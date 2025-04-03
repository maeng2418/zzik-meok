import { IconProps } from '../icon.types'
const Ban = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <circle
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={48}
        cx={256}
        cy={256}
        r={200}
      />
      <line
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={48}
        x1={114.58}
        y1={114.58}
        x2={397.42}
        y2={397.42}
      />
    </svg>
  )
}
export default Ban
