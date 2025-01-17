import { IconProps } from '../icon.types'
const AmericanFootballSharp = ({
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
      <path d="M120.9,120.51c-44.75,44.56-67.29,101.05-78.64,145.9L244.57,467.85c45.05-11.3,101.78-33.74,146.53-78.3s67.29-101.05,78.64-145.91L267.43,42.21C222.38,53.51,165.65,76,120.9,120.51Zm259,257.83h0Zm-45-224.2,22.52,22.42-33.78,33.63,22.52,22.42L323.55,255,301,232.61,278.52,255,301,277.45l-22.51,22.42L256,277.45l-22.52,22.42L256,322.29l-22.52,22.42L211,322.29l-33.78,33.63L154.67,333.5l33.78-33.63-22.52-22.42L188.45,255,211,277.45,233.48,255,211,232.61l22.51-22.42L256,232.61l22.52-22.42L256,187.77l22.52-22.42L301,187.77Z" />
      <path d="M478.48,198.41C485.85,143.65,464,48.05,464,48.05S367.86,26.17,312.86,33.51c-2.54.33-5.21.72-8,1.14L477.33,206.36C477.76,203.6,478.14,200.94,478.48,198.41Z" />
      <path d="M33.52,311.65C26.15,366.41,48.05,464,48.05,464s60,16,99.86,16a391.92,391.92,0,0,0,51.23-3.45c2.54-.33,5.21-.72,8-1.15L34.67,303.7C34.24,306.46,33.86,309.12,33.52,311.65Z" />
    </svg>
  )
}
export default AmericanFootballSharp
