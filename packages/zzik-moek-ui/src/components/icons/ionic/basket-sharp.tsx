import { IconProps } from '../icon.types'
const BasketSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M339.2,217.6,256,106.67,172.8,217.6l-25.6-19.2,96-128a16,16,0,0,1,25.6,0l96,128Z" />
      <path d="M441.59,192H70.41a12,12,0,0,0-11.68,14.77L112.59,434H399.41l53.86-227.23A12,12,0,0,0,441.59,192ZM256,351.66A37.71,37.71,0,1,1,293.89,314,37.88,37.88,0,0,1,256,351.66Z" />
    </svg>
  )
}
export default BasketSharp
