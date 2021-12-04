import styled, { css } from 'styled-components'
import { color } from '../../styles'
import Image from 'next/image'

const pStyles = css`
  color: ${color.white};
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  text-transform: capitalize;
  margin: 0 1rem;
  cursor: pointer;
`

const buttonStyles = css`
  padding: 0.5rem 1rem;
  color: #fff;
  background: #FF4820;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
`

const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 6rem;

  @media screen and (max-width: 700px) {
    padding: 2rem 4rem;
  }

  @media screen and (max-width: 550px) {
    padding: 2rem;
  }
`

const NavbarLinks = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const NavbarLinksLogo = styled.div`
  margin-right: 2rem;
`

const StyledImage = styled(Image)`
  width: 62.56px;
  height: 16.02px;
`

const NavbarLinksContainer = styled.div`
  display: flex;
  flex-direction: row;

  p {
    ${pStyles};
  }

  @media screen and (max-width: 1050px) {
    display: none;
  }
`

const NavbarSign = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  p {
    ${pStyles};
  }

  button {
    ${buttonStyles};
  }

  @media screen and (max-width: 550px) {
    display: none;
  }
`

const NavbarMenu = styled.div`
  margin-left: 1rem;
  display: none;
  position: relative;

  svg {
    cursor: pointer;
  }

  @media screen and (max-width: 1050px) {
    display: flex;
  }
`

const NavbarMenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  
  text-align: end;
  background: ${color.footer};
  padding: 2rem;
  position: absolute;
  right: 0;
  top: 40px;
  margin-top: 1rem;
  min-width: 210px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0,0, 0,0.2);

  p {
    ${pStyles};
    margin: 1rem 0;
  }

  button {
    ${buttonStyles};
  }

  @media screen and (max-width: 550px) {
    top: 20px;
  }
`

const NavbarMenuContainerLinksSign = styled.div`
  display: none;

  @media screen and (max-width: 550px) {
    display: block;
  }
`

export { 
  StyledNavbar, 
  NavbarLinks, 
  NavbarLinksLogo, 
  StyledImage,
  NavbarLinksContainer, 
  NavbarSign, 
  NavbarMenu, 
  NavbarMenuContainer,
  NavbarMenuContainerLinksSign 
}