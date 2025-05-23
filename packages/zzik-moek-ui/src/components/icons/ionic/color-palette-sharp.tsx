import { IconProps } from '../icon.types'
const ColorPaletteSharp = ({
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
      <path d="M416,352c-12.6-.84-21-4-28-12-14-16-14-36,5.49-52.48l32.82-29.14c50.27-44.41,50.27-117.21,0-161.63C389.26,64.14,339.54,48,287.86,48c-60.34,0-123.39,22-172,65.11-90.46,80-90.46,210.92,0,290.87,45,39.76,105.63,59.59,165.64,60h1.84c60,0,119.07-19.5,161.2-56.77C464,390,464,385,444.62,355.56,440,348,431,353,416,352ZM112,208a32,32,0,1,1,32,32A32,32,0,0,1,112,208Zm40,135a32,32,0,1,1,32-32A32,32,0,0,1,152,343Zm40-199a32,32,0,1,1,32,32A32,32,0,0,1,192,144Zm64,271a48,48,0,1,1,48-48A48,48,0,0,1,256,415Zm72-239a32,32,0,1,1,32-32A32,32,0,0,1,328,176Z" />
    </svg>
  )
}
export default ColorPaletteSharp
