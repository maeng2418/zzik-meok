import { IconProps } from '../icon.types'
const LeafSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M150.38,253.68l21.94-23.3,11.65,11c73.63,69.36,147.51,111.56,234.45,133.07,11.73-32,12.77-67.22,2.64-101.58-13.44-45.59-44.74-85.31-90.49-114.86-40.25-26-76.6-32.09-115.09-38.54-21.12-3.54-43-7.2-66.85-14.43C104.85,91.76,58.94,52.3,58.48,51.91L33.4,30.15,32,63.33c-.1,2.56-2.42,63.57,14.22,147.77,17.58,89,50.24,155.85,97.07,198.63,38,34.69,87.62,53.9,136.93,53.9A185.88,185.88,0,0,0,308,461.56c41.72-6.32,76.43-27.27,96-57.75-89.5-23.28-165.95-67.55-242-139.16Z" />
      <path d="M467.43,384.19c-16.83-2.59-33.13-5.84-49-9.77A158.49,158.49,0,0,1,406.3,400.1c-.74,1.25-1.51,2.49-2.29,3.71a583.43,583.43,0,0,0,58.55,12l15.82,2.44,4.86-31.63Z" />
    </svg>
  )
}
export default LeafSharp
