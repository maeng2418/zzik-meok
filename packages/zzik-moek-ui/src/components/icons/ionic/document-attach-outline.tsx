import { IconProps } from '../icon.types'
const DocumentAttachOutline = ({
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
        d="M208,64h66.75a32,32,0,0,1,22.62,9.37L438.63,214.63A32,32,0,0,1,448,237.25V432a48,48,0,0,1-48,48H192a48,48,0,0,1-48-48V304"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <path
        d="M288,72V192a32,32,0,0,0,32,32H440"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <path
        d="M160,80V232a23.69,23.69,0,0,1-24,24c-12,0-24-9.1-24-24V88c0-30.59,16.57-56,48-56s48,24.8,48,55.38V226.13c0,43-27.82,77.87-72,77.87s-72-34.86-72-77.87V144"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeMiterlimit: 10,
          strokeWidth: 32,
        }}
      />
    </svg>
  )
}
export default DocumentAttachOutline
