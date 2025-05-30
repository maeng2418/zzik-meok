import { IconProps } from '../icon.types'
const FlameSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M394.24,197.56a300.67,300.67,0,0,0-53.38-90C301.2,61.65,240,32,192,32c19,70-14.36,117.12-44.79,163.77C122,234.36,96,274.27,96,320c0,88.22,71.78,160,160,160s160-71.78,160-160C416,276.7,408.68,235.51,394.24,197.56ZM288.33,418.69C278,429.69,265.05,432,256,432s-22-2.31-32.33-13.31S208,390.24,208,368c0-25.14,8.82-44.28,17.34-62.78,6.48-14.07,14.66-27.22,15.11-44.49,11.3,5.88,23.67,16.91,34.54,31.28,18.17,24,29,52.42,29,76C304,390.24,298.58,407.77,288.33,418.69Z" />
    </svg>
  )
}
export default FlameSharp
