import { IconProps } from '../icon.types'
const PrintSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M400,96V56a8,8,0,0,0-8-8H120a8,8,0,0,0-8,8V96" />
      <rect
        x={152}
        y={264}
        width={208}
        height={160}
        rx={4}
        ry={4}
        style={{
          fill: 'none',
        }}
      />
      <rect
        x={152}
        y={264}
        width={208}
        height={160}
        rx={4}
        ry={4}
        style={{
          fill: 'none',
        }}
      />
      <path d="M408,112H104a56,56,0,0,0-56,56V376a8,8,0,0,0,8,8h56v72a8,8,0,0,0,8,8H392a8,8,0,0,0,8-8V384h56a8,8,0,0,0,8-8V168A56,56,0,0,0,408,112ZM360,420a4,4,0,0,1-4,4H156a4,4,0,0,1-4-4V268a4,4,0,0,1,4-4H356a4,4,0,0,1,4,4ZM394,207.92a24,24,0,1,1,22-22A24,24,0,0,1,394,207.92Z" />
    </svg>
  )
}
export default PrintSharp
