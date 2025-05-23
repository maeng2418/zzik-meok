import { IconProps } from '../icon.types'
const ApertureSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <polygon points="216 48 345.49 176.18 345.49 48 216 48" />
      <polygon points="181.47 58.38 80 134 256 134 181.47 58.38" />
      <polygon points="336 344 464 344 464 216 336 344" />
      <polygon points="454 182 378 80 378 256 454 182" />
      <polygon points="48 166 48 294 176 166 48 166" />
      <polygon points="330 454 432 378 256 378 330 454" />
      <polygon points="58 330 134 432 134 256 58 330" />
      <path d="M345.49,222.12l-55.55-55.46H222.06l-55.55,55.46v67.76l55.62,55.52c.44,0,.88-.06,1.33-.06h66.48l55.55-55.46Z" />
      <polygon points="165.98 336.09 166 464 294 464 165.98 336.09" />
    </svg>
  )
}
export default ApertureSharp
