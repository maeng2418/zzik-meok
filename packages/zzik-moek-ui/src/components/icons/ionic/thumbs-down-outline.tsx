import { IconProps } from '../icon.types'
const ThumbsDownOutline = ({
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
        d="M192,53.84S208,48,256,48s74,16,96,32h64a64,64,0,0,1,64,64v48a64,64,0,0,1-64,64H386a32.34,32.34,0,0,0-27.37,15.4S350,290.19,324,335.22,248,448,240,464c-29,0-43-22-34-47.71,10.28-29.39,23.71-54.38,27.46-87.09.54-4.78-3.14-12-8-12L96,307"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <path
        d="M96,241l80,2c20,1.84,32,12.4,32,30h0c0,17.6-14,28.84-32,30l-80,4c-17.6,0-32-16.4-32-34v-.17A32,32,0,0,1,96,241Z"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeMiterlimit: 10,
          strokeWidth: 32,
        }}
      />
      <path
        d="M64,176l112,2c18,.84,32,12.41,32,30h0c0,17.61-14,28.86-32,30L64,240a32.1,32.1,0,0,1-32-32h0A32.1,32.1,0,0,1,64,176Z"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeMiterlimit: 10,
          strokeWidth: 32,
        }}
      />
      <path
        d="M112,48l64,3c21,1.84,32,11.4,32,29h0c0,17.6-14.4,30-32,30l-64,2A32.09,32.09,0,0,1,80,80h0A32.09,32.09,0,0,1,112,48Z"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeMiterlimit: 10,
          strokeWidth: 32,
        }}
      />
      <path
        d="M80,112l96,2c19,.84,32,12.4,32,30h0c0,17.6-13,28.84-32,30l-96,2a32.09,32.09,0,0,1-32-32h0A32.09,32.09,0,0,1,80,112Z"
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
export default ThumbsDownOutline
