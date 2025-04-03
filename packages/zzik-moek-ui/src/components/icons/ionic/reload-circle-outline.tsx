import { IconProps } from '../icon.types'
const ReloadCircleOutline = ({
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
      <path
        d="M341.54,197.85l-11.37-13.23a103.37,103.37,0,1,0,22.71,105.84"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeMiterlimit: 10,
          strokeWidth: 32,
        }}
      />
      <path d="M367.32,162a8.44,8.44,0,0,0-6,2.54l-59.54,59.54a8.61,8.61,0,0,0,6.09,14.71h59.54a8.62,8.62,0,0,0,8.62-8.62V170.61a8.61,8.61,0,0,0-8.68-8.63Z" />
    </svg>
  )
}
export default ReloadCircleOutline
