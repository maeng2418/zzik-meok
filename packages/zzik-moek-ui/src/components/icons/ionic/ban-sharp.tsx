import { IconProps } from '../icon.types'
const BanSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      height={size}
      width={size}
      tabIndex={tabIndex}
      focusable={focusable}
      fill="currentColor"
      {...props}
    >
      <path d="M414.39,97.61A224,224,0,1,0,97.61,414.39,224,224,0,1,0,414.39,97.61ZM432,256a175.09,175.09,0,0,1-35.8,106.26L149.74,115.8A175.09,175.09,0,0,1,256,80C353.05,80,432,159,432,256ZM80,256a175.09,175.09,0,0,1,35.8-106.26L362.26,396.2A175.09,175.09,0,0,1,256,432C159,432,80,353.05,80,256Z" />
    </svg>
  )
}
export default BanSharp
