import { IconProps } from '../icon.types'
const SubwaySharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M392,16H120A24,24,0,0,0,96,40V376a24,24,0,0,0,24,24H392a24,24,0,0,0,24-24V40A24,24,0,0,0,392,16ZM208,64h95.55c8.61,0,16,6.62,16.43,15.23A16,16,0,0,1,304,96H208.45c-8.61,0-16-6.62-16.43-15.23A16,16,0,0,1,208,64ZM179.47,351.82a32,32,0,1,1,28.35-28.35A32,32,0,0,1,179.47,351.82Zm160,0a32,32,0,1,1,28.35-28.35A32,32,0,0,1,339.47,351.82ZM384,144v64H128V144Z" />
      <polygon points="298 416 329.37 448 182.63 448 214 416 170 416 89.43 496 134.63 496 150.63 480 361.37 480 377.37 496 422.67 496 343 416 298 416" />
    </svg>
  )
}
export default SubwaySharp
