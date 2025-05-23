import { IconProps } from '../icon.types'
const QrCodeSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <rect x={336} y={336} width={80} height={80} />
      <rect x={272} y={272} width={64} height={64} />
      <rect x={416} y={416} width={64} height={64} />
      <rect x={432} y={272} width={48} height={48} />
      <rect x={272} y={432} width={48} height={48} />
      <rect x={336} y={96} width={80} height={80} />
      <path d="M480,240H272V32H480ZM316,196H436V76H316Z" />
      <rect x={96} y={96} width={80} height={80} />
      <path d="M240,240H32V32H240ZM76,196H196V76H76Z" />
      <rect x={96} y={336} width={80} height={80} />
      <path d="M240,480H32V272H240ZM76,436H196V316H76Z" />
    </svg>
  )
}
export default QrCodeSharp
