import { IconProps } from '../icon.types'
const FilterCircleOutline = ({
  size = 24,
  tabIndex = -1,
  focusable = false,
  ...props
}: IconProps) => {
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
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth={32}
        strokeMiterlimit={10}
        d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z"
      />
      <line
        fill="none"
        stroke="currentColor"
        strokeWidth={32}
        strokeLinecap="round"
        strokeLinejoin="round"
        x1={144}
        y1={208}
        x2={368}
        y2={208}
      />
      <line
        fill="none"
        stroke="currentColor"
        strokeWidth={32}
        strokeLinecap="round"
        strokeLinejoin="round"
        x1={176}
        y1={272}
        x2={336}
        y2={272}
      />
      <line
        fill="none"
        stroke="currentColor"
        strokeWidth={32}
        strokeLinecap="round"
        strokeLinejoin="round"
        x1={224}
        y1={336}
        x2={288}
        y2={336}
      />
    </svg>
  )
}
export default FilterCircleOutline
