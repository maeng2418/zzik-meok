import { IconProps } from '../icon.types'
const CalculatorSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M416,48a16,16,0,0,0-16-16H112A16,16,0,0,0,96,48V464a16,16,0,0,0,16,16H400a16,16,0,0,0,16-16ZM192,432H144V384h48Zm0-80H144V304h48Zm0-80H144V224h48Zm88,160H232V384h48Zm0-80H232V304h48Zm0-80H232V224h48Zm88,160H320V304h48Zm0-160H320V224h48Zm0-96H144V80H368Z" />
    </svg>
  )
}
export default CalculatorSharp
