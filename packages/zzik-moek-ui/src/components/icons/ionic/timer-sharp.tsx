import { IconProps } from '../icon.types'
const TimerSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M256,48C141.12,48,48,141.12,48,256s93.12,208,208,208,208-93.12,208-208S370.88,48,256,48Zm0,384C159,432,80,353.05,80,256a174.55,174.55,0,0,1,53.87-126.72L279,233l-19,30L135,172c-13,23-26.7,46-26.7,84,0,81.44,66.26,147.7,147.7,147.7S403.7,337.44,403.7,256c0-76.67-58.72-139.88-133.55-147V164h-28.3V79.89c4.24.07,8.94.11,14.15.11C353.05,80,432,159,432,256S353.05,432,256,432Z" />
    </svg>
  )
}
export default TimerSharp
