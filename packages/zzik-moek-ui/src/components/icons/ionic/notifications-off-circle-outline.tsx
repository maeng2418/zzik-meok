import { IconProps } from '../icon.types'
const NotificationsOffCircleOutline = ({
  size = 24,
  tabIndex = -1,
  focusable = false,
  ...props
}: IconProps) => {
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
      <path
        d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeMiterlimit: 10,
          strokeWidth: 32,
        }}
      />
      <path d="M220.24,352a4,4,0,0,0-4,4.42C218.49,375.14,235.11,384,256,384s37.5-8.86,39.73-27.58a4,4,0,0,0-4-4.42Z" />
      <path d="M352,378a15.93,15.93,0,0,1-11.84-5.24l-192-212a16,16,0,0,1,23.68-21.52l192,212A16,16,0,0,1,352,378Z" />
      <path d="M174.68,232.21c0,53.33-11.54,61.46-27.87,80.8-6.77,8-.65,23,11.19,23H276.83a4,4,0,0,0,2.95-6.7l-98-106.87a4,4,0,0,0-6.94,2.52C174.74,227.29,174.68,229.71,174.68,232.21Z" />
      <path d="M365.2,313c-16.33-19.34-27.86-27.47-27.86-80.8,0-48.86-25.78-66.23-47-74.67a11.39,11.39,0,0,1-6.34-6.68C280.29,138.6,269.88,128,256,128s-24.31,10.6-28,22.86a11.35,11.35,0,0,1-6.33,6.68c-1.28.51-2.57,1.05-3.88,1.63a4,4,0,0,0-1.3,6.36L361,323.21a4,4,0,0,0,6.94-2.95A12,12,0,0,0,365.2,313Z" />
    </svg>
  )
}
export default NotificationsOffCircleOutline
