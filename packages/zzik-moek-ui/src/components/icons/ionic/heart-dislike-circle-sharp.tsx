import { IconProps } from '../icon.types'
const HeartDislikeCircleSharp = ({
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
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm63.73,310.36L136.59,176.06l22.74-22.51L342.52,335.91Zm-63.51,4.86c-35.36-25-66.31-51.92-74.91-62.4-20-24.37-29.58-49.4-29.3-76.5a58.27,58.27,0,0,1,.85-9.31l130.21,129.4C279.64,347,266.86,355.86,256.22,363.22Zm74.47-62.4-.31.38L197.33,169a53.8,53.8,0,0,1,10.21-1,59.34,59.34,0,0,1,44.1,19.41L256,192l4.36-4.6A59.34,59.34,0,0,1,304.46,168c30.31,0,55.22,25.27,55.53,56.33C360.27,251.42,350.68,276.45,330.69,300.82Z" />
    </svg>
  )
}
export default HeartDislikeCircleSharp
