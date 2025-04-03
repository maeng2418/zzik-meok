import { IconProps } from '../icon.types'
const BrushOutline = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
        d="M452.37,59.63h0a40.49,40.49,0,0,0-57.26,0L184,294.74c23.08,4.7,46.12,27.29,49.26,49.26L452.37,116.89A40.49,40.49,0,0,0,452.37,59.63Z"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <path
        d="M138,336c-29.88,0-54,24.5-54,54.86,0,23.95-20.88,36.57-36,36.57C64.56,449.74,92.82,464,120,464c39.78,0,72-32.73,72-73.14C192,360.5,167.88,336,138,336Z"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
    </svg>
  )
}
export default BrushOutline
