import { IconProps } from '../icon.types'
const Watch = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <rect x={136} y={136} width={240} height={240} rx={56} ry={56} />
      <path d="M336,96V32a16,16,0,0,0-16-16H192a16,16,0,0,0-16,16V96a80.09,80.09,0,0,0-80,80V336a80.09,80.09,0,0,0,80,80v64a16,16,0,0,0,16,16H320a16,16,0,0,0,16-16V416a80.09,80.09,0,0,0,80-80V176A80.09,80.09,0,0,0,336,96Zm56,224a72.08,72.08,0,0,1-72,72H192a72.08,72.08,0,0,1-72-72V192a72.08,72.08,0,0,1,72-72H320a72.08,72.08,0,0,1,72,72Z" />
    </svg>
  )
}
export default Watch
