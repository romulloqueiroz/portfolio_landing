import styled from 'styled-components'
import { color, device, mixin } from '../../styles'

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${color.footer};

  ${mixin.sectionPadding};
`

const FooterHeading = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-weight: 800;
    font-size: 64px;
    line-height: 75px;

    ${mixin.gradientText};

    @media ${device.tabletL} {
      font-size: 44px;
      line-height: 50px;
    }

    @media ${device.mobile} {
      font-size: 34px;
      line-height: 42px;
    }

    @media ${device.mobileS} {
      font-size: 27px;
      line-height: 38px;
    }
  }
`

const FooterBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border: 1px solid ${color.white};
  text-align: center;
  margin-bottom: 10rem;
  cursor: pointer;

  p {
    font-size: 18px;
    line-height: 21px;
    color: ${color.white};
    word-spacing: 2px;

    @media ${device.mobile} {
      font-size: 14px;
      line-height: 20px;
    }
  }
`

const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  text-align: left;

  div {
    width: 250px;
    margin: 1rem;

    @media ${device.mobile} {
      margin: 1rem 0;
    }
  }
`

const FooterLinksLogo = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 12px;
    line-height: 15px;
    color: ${color.white};
  }

  img {
    width: 118px;
    height: 30px;
    margin-bottom: 1rem;
  }
`

const FooterLinksDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  h4 {
    font-size: 14px;
    line-height: 17px;
    color: ${color.white};
    margin-bottom: 0.9rem;
  }

  p {
    font-size: 12px;
    line-height: 15px;
    color: ${color.white};
    margin: 0.5rem 0;
    cursor: pointer;
  }
`

const FooterCopyright = styled.div`
  margin-top: 2rem;
  text-align: center;
  width: 100%;

  p {
    font-size: 12px;
    line-height: 15px;
    color: ${color.white};
  }
`

export { 
  StyledFooter,
  FooterHeading,
  FooterBtn,
  FooterLinks,
  FooterLinksLogo,
  // StyledImage,
  FooterLinksDiv,
  FooterCopyright
}