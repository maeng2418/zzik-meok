import { IconProps } from '../icon.types'
const PizzaSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M442.3,67.82h0C383.92,44.72,317.78,32,256,32c-63.57,0-129.8,12.51-186.56,35.25C49.18,75.48,42,80,42,80l22,44,37.53-16.14C147.58,89.53,199.19,80,256.51,80,314,80,364.6,89.23,411.26,108.25h0L448,124l22-44S463,76,442.3,67.82Z" />
      <ellipse
        cx={320.48}
        cy={207.99}
        rx={31.97}
        ry={32.03}
        transform="translate(-53.23 287.42) rotate(-44.98)"
        style={{
          fill: 'none',
        }}
      />
      <ellipse
        cx={192.48}
        cy={191.99}
        rx={31.97}
        ry={32.03}
        transform="translate(-79.38 192.25) rotate(-44.98)"
        style={{
          fill: 'none',
        }}
      />
      <ellipse
        cx={256.48}
        cy={319.99}
        rx={31.97}
        ry={32.03}
        transform="translate(-151.13 274.96) rotate(-44.98)"
        style={{
          fill: 'none',
        }}
      />
      <path d="M409.66,140.85C364.15,122.52,308.16,112,256,112A425,425,0,0,0,102.3,140.9c-.25.1-9.24,4.23-19,8.71,7.46,16.22,18,39.16,22.2,48.33L256,480,429.74,149.16l-19.92-8.24ZM224.41,194.07a32,32,0,1,1-34-34A32.12,32.12,0,0,1,224.41,194.07Zm64,128a32,32,0,1,1-34-34A32.12,32.12,0,0,1,288.41,322.07Zm64-112a32,32,0,1,1-34-34A32.12,32.12,0,0,1,352.41,210.07Z" />
    </svg>
  )
}
export default PizzaSharp
