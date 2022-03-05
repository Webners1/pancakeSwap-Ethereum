import { Svg, SvgProps } from '@pancakeswap/uikit'

const GradientLogo: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0  48" {...props}>
      <image
        href="https://gateway.pinata.cloud/ipfs/QmcWA7DBcQk7f15CKs9uZga1SjcWYcVkKrKs71eA6BRyun/shaolindragon2.png"
        width="48"
        height="48"
     
      />
    </Svg>
  )
}

export default GradientLogo
