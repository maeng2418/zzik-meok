import { IconProps } from '../icon.types'
const HelpCircleOutline = ({
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
        d="M256,80A176,176,0,1,0,432,256,176,176,0,0,0,256,80Z"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeMiterlimit: 10,
          strokeWidth: 32,
        }}
      />
      <path
        d="M200,202.29s.84-17.5,19.57-32.57C230.68,160.77,244,158.18,256,158c10.93-.14,20.69,1.67,26.53,4.45,10,4.76,29.47,16.38,29.47,41.09,0,26-17,37.81-36.37,50.8S251,281.43,251,296"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeMiterlimit: 10,
          strokeWidth: 28,
        }}
      />
      <circle cx={250} cy={348} r={20} />
    </svg>
  )
}
export default HelpCircleOutline
