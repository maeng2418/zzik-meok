import { IconProps } from '../icon.types'
const BulbSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <rect x={208} y={464} width={96} height={32} />
      <rect x={192} y={416} width={128} height={32} />
      <path d="M369.42,62.69C339.35,32.58,299.07,16,256,16A159.62,159.62,0,0,0,96,176c0,46.62,17.87,90.23,49,119.64l4.36,4.09C167.37,316.57,192,339.64,192,360v40h48V269.11L195.72,244,214,217.72,256,240l41.29-22.39,19.1,25.68-44.39,26V400h48V360c0-19.88,24.36-42.93,42.15-59.77l4.91-4.66C399.08,265,416,223.61,416,176A159.16,159.16,0,0,0,369.42,62.69Z" />
    </svg>
  )
}
export default BulbSharp
