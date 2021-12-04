import styled from 'styled-components'
import { color, mixin, device } from '../../styles'

const StyledPossibility = styled.div`
  display: flex;
  flex-direction: row;

  ${mixin.sectionPadding};

  @media ${device.desktopS} {
    flex-direction: column;
  }
`

const PossibilityImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 2rem;
  position: relative;

  @media ${device.desktopS} {
    margin: 1rem 0;
  }

  img {
    width: 100%;
    height: 100%;

    @media ${device.tablet} { 
      width: 100%;
      height: 100%;
    }
  }
`

const PossibilityContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;

  @media ${device.desktopS} {
    margin-top: 2rem;
  }

  h1 {
    font-weight: 800;
    font-size: 34px;
    line-height: 45px;
    margin: 1rem 0;

    ${mixin.gradientText};
  }
  
  h4 {
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    color: ${color.lightBlue};

    &:last-child {
      color: ${color.subtext};
    }
  }

  p {
    color: ${color.text};
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    margin-bottom: 2rem;
  }
`

export {
  StyledPossibility,
  PossibilityImage,
  PossibilityContent
}