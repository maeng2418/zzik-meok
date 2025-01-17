import { IconProps } from '../icon.types'
const VolumeMediumSharp = ({
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
      <polygon points="157.65 176.1 64 176.1 64 335.9 157.65 335.9 288 440 288 72 157.65 176.1" />
      <path
        d="M352,320c9.74-19.41,16-40.81,16-64,0-23.51-6-44.4-16-64"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'square',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <path
        d="M400,368c19.48-34,32-64,32-112s-12-77.7-32-112"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'square',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
    </svg>
  )
}
export default VolumeMediumSharp
