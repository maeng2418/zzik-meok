import { IconProps } from '../icon.types'
const ImagesSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <ellipse
        cx={373.14}
        cy={219.33}
        rx={46.29}
        ry={46}
        style={{
          fill: 'none',
        }}
      />
      <path d="M80,132V460a20,20,0,0,0,20,20H492a20,20,0,0,0,20-20V132a20,20,0,0,0-20-20H100A20,20,0,0,0,80,132Zm293.14,41.33a46,46,0,1,1-46.28,46A46.19,46.19,0,0,1,373.14,173.33Zm-261.41,276V353.85l122.76-110.2L328.27,337l-113,112.33Zm368.27,0H259l144.58-144L480,370.59Z" />
      <path d="M20,32A20,20,0,0,0,0,52V396a20,20,0,0,0,20,20H48V100A20,20,0,0,1,68,80H448V52a20,20,0,0,0-20-20Z" />
    </svg>
  )
}
export default ImagesSharp
