import { IconProps } from '../icon.types'
const Scan = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
        d="M342,444h46a56,56,0,0,0,56-56V342"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 44,
        }}
      />
      <path
        d="M444,170V124a56,56,0,0,0-56-56H342"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 44,
        }}
      />
      <path
        d="M170,444H124a56,56,0,0,1-56-56V342"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 44,
        }}
      />
      <path
        d="M68,170V124a56,56,0,0,1,56-56h46"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 44,
        }}
      />
    </svg>
  )
}
export default Scan
