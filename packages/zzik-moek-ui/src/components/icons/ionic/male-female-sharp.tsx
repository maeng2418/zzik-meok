import { IconProps } from '../icon.types'
const MaleFemaleSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M330,16V60h42.89l-37.1,37.09A157.67,157.67,0,0,0,216,42C128.88,42,58,112.88,58,200c0,79.66,59.26,145.72,136,156.46V394H144v44h50v58h44V438h50V394H238V356.46c76.74-10.74,136-76.8,136-156.46a157.23,157.23,0,0,0-14-64.93l44-44V134h44V16ZM216,314A114,114,0,1,1,330,200,114.13,114.13,0,0,1,216,314Z" />
    </svg>
  )
}
export default MaleFemaleSharp
