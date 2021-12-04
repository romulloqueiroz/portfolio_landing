import { 
  StyledHeader, 
  HeaderContent, 
  HeaderContentInput, 
  HeaderContentPeople, 
  HeaderImage
} from './Header.styles'
import Image from 'next/image'

const Header = () => (
  <StyledHeader id='home'>
    <HeaderContent>
      <h1>Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

      <HeaderContentInput>
        <input type='email' placeholder='Your Email Address' />
        <button type='button'>Get Started</button>
      </HeaderContentInput>

      <HeaderContentPeople>
        <Image 
          src='/assets/people.png' 
          alt='people' 
          width='181.79px'
          height='38px' 
        /> 
        <p>1,600 people requested access a visit in last 24 hours</p>
      </HeaderContentPeople>
    </HeaderContent>

    <HeaderImage>
      <Image 
        src='/assets/ai.png' 
        alt='ai' 
        layout='fill' 
      />
    </HeaderImage>
  </StyledHeader>
)

export default Header
