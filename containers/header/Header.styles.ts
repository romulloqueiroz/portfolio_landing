import styled from 'styled-components'
import { color, mixin } from '../../styles'

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1050px) {
    flex-direction: column;
  }

  ${mixin.sectionPadding};
`

const HeaderContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-right: 5rem;

  h1 {
    font-weight: 800;
    font-size: 62px;
    line-height: 75px;
    letter-spacing: -0.04em;
    ${mixin.gradientText};

    @media screen and (max-width: 650px) {
      font-size: 48px;
      line-height: 60px;
    }

    @media screen and (max-width: 490px) {
      font-size: 36px;
      line-height: 48px;
    }
  }

  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: ${color.text};
    margin-top: 1.5rem;

    @media screen and (max-width: 650px) {
      font-size: 16px;
      line-height: 24px;
    }

    @media screen and (max-width: 490px) {
      font-size: 14px;
      line-height: 24px;
    }
  }

  @media screen and (max-width: 1050px) {
    margin: 0 0 3rem;
  }
`

const HeaderContentInput = styled.div`
  width: 100%;
  margin: 2rem 0 1rem;
  display: flex;
  flex-direction: row;

  input {
    flex: 2;
    width: 100%;
    min-height: 50px;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    background: ${color.footer};
    border: 2px solid ${color.footer};
    padding: 0 1rem;
    outline: none;
    color: ${color.white};
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    @media screen and (max-width: 650px) {
      font-size: 16px;
      line-height: 24px;
    }

    @media screen and (max-width: 490px) {
      font-size: 12px;
      line-height: 16px;
    }
  }

  button {
    flex: 0.6;
    width: 100%;
    min-height: 50px;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    background: ${color.orange};
    border: 2px solid ${color.orange};
    padding: 0 1rem;
    color: ${color.white};
    cursor: pointer;
    outline: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;

    @media screen and (max-width: 650px) {
      font-size: 16px;
      line-height: 24px;
    }

    @media screen and (max-width: 490px) {
      font-size: 12px;
      line-height: 16px;
    }
  }
`

const HeaderContentPeople = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  margin-top: 2rem;

  p {
    margin: 0 0 0 1rem;
    font-weight: 500;
    font-size: 12px;
    line-height: 38px;
    color: ${color.white};
    text-align: center;

    @media screen and (max-width: 650px) {
      margin: 0;
    }
  }

  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`

const HeaderImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

export { 
  StyledHeader, 
  HeaderContent, 
  HeaderContentInput, 
  HeaderContentPeople, 
  HeaderImage
}