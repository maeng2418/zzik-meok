import { IconProps } from '../icon.types'
const Menu = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <line
        x1={88}
        y1={152}
        x2={424}
        y2={152}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeMiterlimit: 10,
          strokeWidth: 48,
        }}
      />
      <line
        x1={88}
        y1={256}
        x2={424}
        y2={256}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeMiterlimit: 10,
          strokeWidth: 48,
        }}
      />
      <line
        x1={88}
        y1={360}
        x2={424}
        y2={360}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeMiterlimit: 10,
          strokeWidth: 48,
        }}
      />
    </svg>
  )
}
export default Menu
