import { IconProps } from '../icon.types'
const Happy = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M414.39,97.61A224,224,0,1,0,97.61,414.39,224,224,0,1,0,414.39,97.61ZM184,208a24,24,0,1,1-24,24A23.94,23.94,0,0,1,184,208ZM351.67,314.17c-12,40.3-50.2,69.83-95.62,69.83s-83.62-29.53-95.72-69.83A8,8,0,0,1,168.16,304H343.85A8,8,0,0,1,351.67,314.17ZM328,256a24,24,0,1,1,24-24A23.94,23.94,0,0,1,328,256Z" />
    </svg>
  )
}
export default Happy
