import styled from 'styled-components'
import type { NextPage } from 'next'
import { 
  Navbar,
  Brand, 
  CTA 
} from '../components'
import { 
  Header, 
  WhatGPT3,
  Features, 
  Possibility, 
  Blog, 
  Footer 
} from '../containers'
import { backgrounds } from '../styles'

const Home: NextPage = () => (
  <>
    <Nav>
      <Navbar />
      <Header />
    </Nav>
    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </>
)

const Nav = styled.div`
  background: ${backgrounds.default};
`

export default Home