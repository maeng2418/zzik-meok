import { IconProps } from '../icon.types'
const TransgenderSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M480,448.94l-48.94-49.08L464,366.92l-31.1-31.11L400,368.71,376.45,345.1a149.64,149.64,0,0,0-.1-178.45l59.55-59.56V144h44V32h-112V76h36.87l-59.55,59.55a149.65,149.65,0,0,0-178.59,0L159.08,128l33-33L161,63.88l-33,33L107.09,76H144V32H32V144H76V107.09L96.87,128l-33,33L95,192.05l33-33,7.56,7.57A149.18,149.18,0,0,0,106,255.94c0,82.69,67.27,150,150,150a149.12,149.12,0,0,0,89.44-29.67l23.51,23.58L335.81,432.9,366.92,464l33-33,48.9,49Zm-330-193a106,106,0,1,1,106,106A106.09,106.09,0,0,1,150,255.94Z" />
    </svg>
  )
}
export default TransgenderSharp
