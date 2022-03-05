import { Svg, SvgProps } from '@pancakeswap/uikit'

export const SlideSvgLight: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 1660 339" {...props}>
      
      <defs>
       
      </defs>
    </Svg>
  )
}

export const SlideSvgDark: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 1660 339" {...props}>
      <path
        d="M804 166.523C520.5 166.523 267.5 290.022 0 304V338.5H1660V0C1358.83 0 1104 166.523 804 166.523Z"
        fill="url(#paint0_linear_dark)"
      />
      <defs>
        <linearGradient id="paint0_linear_dark" x1="830" y1="83.5" x2="830" y2="338.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#08060B" stopOpacity="0.2" />
          <stop offset="0.545554" stopColor="#08060B" stopOpacity="0.5" />
          <stop offset="1" stopColor="#08060B" />
        </linearGradient>
      </defs>
    </Svg>
  )
}
