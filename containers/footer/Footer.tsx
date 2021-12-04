import { 
  StyledFooter,
  FooterHeading,
  FooterBtn,
  FooterLinks,
  FooterLinksLogo,
  FooterLinksDiv,
  FooterCopyright
} from './Footer.styles'

const Footer = () => (
  <StyledFooter>
    <FooterHeading>
      <h1>Do you want to step in to the future before others</h1>
    </FooterHeading>

    <FooterBtn>
      <p>Request Early Access</p>
    </FooterBtn>

    <FooterLinks>
      <FooterLinksLogo>
        <img 
          src='/assets/logo.svg' 
          alt='gpt3_logo' 
        />
        <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
      </FooterLinksLogo>
      <FooterLinksDiv>
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </FooterLinksDiv>
      <FooterLinksDiv>
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </FooterLinksDiv>
      <FooterLinksDiv>
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </FooterLinksDiv>
    </FooterLinks>

    <FooterCopyright>
      <p>@2021 GPT-3. All rights reserved.</p>
    </FooterCopyright>
  </StyledFooter>
)

export default Footer
