import { IconProps } from '../icon.types'
const CodeWorkingSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <circle
        cx={256}
        cy={256}
        r={26}
        style={{
          stroke: 'currentColor',
          strokeLinecap: 'square',
          strokeMiterlimit: 10,
          strokeWidth: 10,
        }}
      />
      <circle
        cx={346}
        cy={256}
        r={26}
        style={{
          stroke: 'currentColor',
          strokeLinecap: 'square',
          strokeMiterlimit: 10,
          strokeWidth: 10,
        }}
      />
      <circle
        cx={166}
        cy={256}
        r={26}
        style={{
          stroke: 'currentColor',
          strokeLinecap: 'square',
          strokeMiterlimit: 10,
          strokeWidth: 10,
        }}
      />
      <polyline
        points="160 368 32 256 160 144"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'square',
          strokeMiterlimit: 10,
          strokeWidth: 42,
        }}
      />
      <polyline
        points="352 368 480 256 352 144"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'square',
          strokeMiterlimit: 10,
          strokeWidth: 42,
        }}
      />
    </svg>
  )
}
export default CodeWorkingSharp
