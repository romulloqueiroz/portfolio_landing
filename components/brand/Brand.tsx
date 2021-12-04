import { StyledBrand } from './Brand.styles'
import Image from 'next/image'

const Brand = () => (
  <StyledBrand>
    <div>
      <Image 
        src='/assets/google.png' 
        alt='google' 
        width='100%'
        height={27}
      />
    </div>
    <div>
      <Image 
        src='/assets/slack.png' 
        alt='slack' 
        width='100%'
        height={27}
      />
    </div>
    <div>
      <Image 
        src='/assets/atlassian.png' 
        alt='atlassian' 
        width='100%'
        height={27}
      />
    </div>
    <div>
      <Image 
        src='/assets/dropbox.png' 
        alt='dropbox' 
        width='100%'
        height={27}
      />
    </div>
    <div>
      <Image 
        src='/assets/shopify.png' 
        alt='shopify' 
        width='100%'
        height={27}
      />
    </div>
  </StyledBrand>
)

export default Brand