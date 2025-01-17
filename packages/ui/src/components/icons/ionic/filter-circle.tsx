import { IconProps } from '../icon.types'
const FilterCircle = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm32,304H224a16,16,0,0,1,0-32h64a16,16,0,0,1,0,32Zm48-64H176a16,16,0,0,1,0-32H336a16,16,0,0,1,0,32Zm32-64H144a16,16,0,0,1,0-32H368a16,16,0,0,1,0,32Z" />
    </svg>
  )
}
export default FilterCircle
