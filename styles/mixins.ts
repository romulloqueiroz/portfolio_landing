import { css } from 'styled-components'
import { gradient } from '.'

const sectionPadding = css`
  padding: 4rem 6rem;

  @media screen and (max-width: 700px) {
    padding: 4rem;
  }

  @media screen and (max-width: 550px) {
    padding: 4rem 2rem;
  }
`

const sectionMargin = css`
  margin: 4rem 6rem;

  @media screen and (max-width: 700px) {
    margin: 4rem;
  }

  @media screen and (max-width: 550px) {
    margin: 4rem 2rem;
  }
`

const gradientText = css`
  background: ${gradient.text};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const exportObj = { 
  sectionPadding,
  sectionMargin,
  gradientText
}

export default exportObj