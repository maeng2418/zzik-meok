import { IconProps } from '../icon.types'
const HappySharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M414.39,97.61A224,224,0,1,0,97.61,414.39,224,224,0,1,0,414.39,97.61ZM328,208a24,24,0,1,1-24,24A23.94,23.94,0,0,1,328,208Zm-144,0a24,24,0,1,1-24,24A23.94,23.94,0,0,1,184,208Zm72.05,176c-45.42,0-83.75-29.49-95.72-69.83C159.29,310.65,158,304,158,304H354s-1.31,6.69-2.33,10.17C339.89,354.53,301.47,384,256.05,384Z" />
    </svg>
  )
}
export default HappySharp
