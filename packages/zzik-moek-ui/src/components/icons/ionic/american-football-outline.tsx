import { IconProps } from '../icon.types'
const AmericanFootballOutline = ({
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
      <ellipse
        cx={256}
        cy={256}
        rx={267.57}
        ry={173.44}
        transform="translate(-106.04 256) rotate(-45)"
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <line
        x1={334.04}
        y1={177.96}
        x2={177.96}
        y2={334.04}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <line
        x1={278.3}
        y1={278.3}
        x2={233.7}
        y2={233.7}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <line
        x1={322.89}
        y1={233.7}
        x2={278.3}
        y2={189.11}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <line
        x1={456.68}
        y1={211.4}
        x2={300.6}
        y2={55.32}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <line
        x1={211.4}
        y1={456.68}
        x2={55.32}
        y2={300.6}
        style={{
          fill: 'none',
          stroke: 'currentColor',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 32,
        }}
      />
      <line
        x1={233.7}
        y1={322.89}
        x2={189.11}
        y2={278.3}
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
export default AmericanFootballOutline
