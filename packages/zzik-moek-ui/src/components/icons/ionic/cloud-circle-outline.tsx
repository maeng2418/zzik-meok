import { IconProps } from '../icon.types'
const CloudCircleOutline = ({
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
      <path d="M333.88,240.59a8,8,0,0,1-6.66-6.66C320.68,192.78,290.82,168,256,168c-32.37,0-53.93,21.22-62.48,43.58a7.92,7.92,0,0,1-6.16,5c-27.67,4.35-50.82,22.56-51.35,54.3-.52,31.53,25.51,57.11,57,57.11H326c27.5,0,50-13.72,50-44C376,256.77,354,243.58,333.88,240.59Z" />
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
export default CloudCircleOutline
