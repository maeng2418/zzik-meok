import { IconProps } from '../icon.types'
const ListCircle = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM168,350a24,24,0,1,1,24-24A24,24,0,0,1,168,350Zm0-71a24,24,0,1,1,24-24A24,24,0,0,1,168,279Zm0-73a24,24,0,1,1,24-24A24,24,0,0,1,168,206ZM352,341H224a16,16,0,0,1,0-32H352a16,16,0,0,1,0,32Zm0-71H224a16,16,0,0,1,0-32H352a16,16,0,0,1,0,32Zm0-72H224a16,16,0,0,1,0-32H352a16,16,0,0,1,0,32Z" />
    </svg>
  )
}
export default ListCircle
