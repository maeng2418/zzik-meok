import { IconProps } from '../icon.types'
const CheckmarkDoneSharp = ({
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
      <polyline
        points="465 127 241 384 149 292"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'square',
          strokeMiterlimit: 10,
          strokeWidth: 44,
        }}
      />
      <line
        x1={140}
        y1={385}
        x2={47}
        y2={292}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'square',
          strokeMiterlimit: 10,
          strokeWidth: 44,
        }}
      />
      <line
        x1={363}
        y1={127}
        x2={236}
        y2={273}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'square',
          strokeMiterlimit: 10,
          strokeWidth: 44,
        }}
      />
    </svg>
  )
}
export default CheckmarkDoneSharp
