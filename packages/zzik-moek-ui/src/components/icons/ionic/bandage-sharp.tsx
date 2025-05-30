import { IconProps } from '../icon.types'
const BandageSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M27.71,337.1a40,40,0,0,0,0,56.54l90.65,90.65h0a40,40,0,0,0,56.54,0l75.1-75.1L102.81,262Z" />
      <path d="M496,147.1a39.87,39.87,0,0,0-11.75-28.38l-91-91a40.14,40.14,0,0,0-56.75,0L264,100.28,411.72,248l72.53-72.53A39.85,39.85,0,0,0,496,147.1Z" />
      <path d="M273.06,386.19l116-116L241.77,123l-116,116Zm19.63-141.5a16,16,0,1,1,0,22.62A16,16,0,0,1,292.69,244.69Zm-48-48a16,16,0,1,1,0,22.62A16,16,0,0,1,244.69,196.69Zm0,96a16,16,0,1,1,0,22.62A16,16,0,0,1,244.69,292.69Zm-25.38-48a16,16,0,1,1-22.62,0A16,16,0,0,1,219.31,244.69Z" />
    </svg>
  )
}
export default BandageSharp
