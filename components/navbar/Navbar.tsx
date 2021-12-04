import { useState } from 'react'
import { 
  StyledNavbar, 
  NavbarLinks,
  NavbarLinksLogo, 
  // StyledImage,
  NavbarLinksContainer, 
  NavbarSign, 
  NavbarMenu, 
  NavbarMenuContainer, 
  NavbarMenuContainerLinksSign 
} from './Navbar.styles'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { color } from '../../styles'
import Image from 'next/image'

const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#wgpt3'>What is GPT3?</a></p>
    <p><a href='#possibility'>Open AI</a></p>
    <p><a href='#features'>Case Studies</a></p>
    <p><a href='#blog'>Library</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <StyledNavbar>
      <NavbarLinks>
        <NavbarLinksLogo>
          <Image 
            src='/assets/logo.svg' 
            alt='logo' 
            // layout='fill' 
            width='62.56px'
            height='16.02px'
          />
        </NavbarLinksLogo>
        <NavbarLinksContainer>
          <Menu />
        </NavbarLinksContainer>
      </NavbarLinks>
      <NavbarSign>
        <p>Sign in</p>
        <button className='btn'>Sign up</button>
      </NavbarSign>
      <NavbarMenu>
        {
          toggleMenu ? 
            <RiCloseLine 
              color={color.white} 
              size={27} 
              onClick={() => setToggleMenu(false)} 
            /> 
          : 
            <RiMenu3Line 
              color={color.white} 
              size={27} 
              onClick={() => setToggleMenu(true)} 
            />
        }
        {
          toggleMenu && (
            <NavbarMenuContainer>
              <Menu />
              <NavbarMenuContainerLinksSign>
                <p>Sign in</p>
                <button className='btn'>Sign up</button>
              </NavbarMenuContainerLinksSign>
            </NavbarMenuContainer>
          )
        }
      </NavbarMenu>
    </StyledNavbar>
  )
}

export default Navbar
