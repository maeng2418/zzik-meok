import { IconProps } from '../icon.types'
const NavigateCircleOutline = ({
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
      <path d="M336.76,161,150.23,243.35c-10.47,4.8-6.95,20.67,4.57,20.67H244a4,4,0,0,1,4,4V357.2c0,11.52,16,15,20.78,4.56L351,175.24A10.73,10.73,0,0,0,336.76,161Z" />
      <path
        d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeMiterlimit: 10,
          strokeWidth: 32,
        }}
      />
    </svg>
  )
}
export default NavigateCircleOutline
