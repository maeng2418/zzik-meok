import { IconProps } from '../icon.types'
const ThumbsDownSharp = ({ size = 24, tabIndex = -1, focusable = false, ...props }: IconProps) => {
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
      <path d="M56,320l156.05,12-23,89.4c-6.08,26.6.7,41.87,22.39,48.62l34.69,9.85a4,4,0,0,0,4.4-1.72l129-202.34a8,8,0,0,1,6.81-3.81H496V64H378.39a48,48,0,0,1-15.18-2.46l-76.3-25.43A80,80,0,0,0,261.61,32H83.68c-19,0-31.5,13.52-35.23,32.16L16,206.42V280C16,302.06,34,318,56,320Z" />
      <path
        d="M378.45,273.93A15.84,15.84,0,0,1,386,272h0a15.93,15.93,0,0,0-7.51,1.91Z"
        style={{
          fill: 'none',
        }}
      />
      <path
        d="M337.86,343.22l-.13.22a2.53,2.53,0,0,1,.13-.22c20.5-35.51,30.36-55,33.82-62h0C368.21,288.28,358.34,307.73,337.86,343.22Z"
        style={{
          fill: 'none',
        }}
      />
      <path d="M372.66,279.16l-1,2a16.29,16.29,0,0,1,6.77-7.26A16.48,16.48,0,0,0,372.66,279.16Z" />
    </svg>
  )
}
export default ThumbsDownSharp
