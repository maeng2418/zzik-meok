import { IconProps } from '../icon.types'
const IdCardSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
  return (
    <svg
      id="icons"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      height={size}
      width={size}
      tabIndex={tabIndex}
      focusable={focusable}
      fill="currentColor"
      {...props}
    >
      <path d="M408,16H104A24,24,0,0,0,80,40V472a24,24,0,0,0,24,24H408a24,24,0,0,0,24-24V40A24,24,0,0,0,408,16ZM346.9,312.77a43,43,0,1,1-40.71-40.71A43,43,0,0,1,346.9,312.77ZM192,64H320V96H192ZM384,448H224V423.4c0-32.72,53.27-49.21,80-49.21s80,16.49,80,49.21Z" />
    </svg>
  )
}
export default IdCardSharp
