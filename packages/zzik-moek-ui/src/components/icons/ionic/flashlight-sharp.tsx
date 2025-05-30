import { IconProps } from '../icon.types'
const FlashlightSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <polygon points="330 16 287.32 58.7 453.3 224.68 496 182 330 16" />
      <ellipse
        cx={224.68}
        cy={287.3}
        rx={20.03}
        ry={19.96}
        style={{
          fill: 'none',
        }}
      />
      <path d="M429.21,243.85,268,82.59,249.65,168,16,402l94,94L344.23,262.2Zm-189,56.07a20,20,0,1,1,0-25.25A20,20,0,0,1,240.19,299.92Z" />
    </svg>
  )
}
export default FlashlightSharp
