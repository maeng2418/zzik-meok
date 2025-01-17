import { SVGProps } from 'react'

export type IconProps = SVGProps<SVGSVGElement> & {
  size?: string | number
  tabIndex?: number
  focusable?: boolean
}
