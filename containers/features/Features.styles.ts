import styled from 'styled-components'
import { color, mixin } from '../../styles'

const StyledFeatures = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  ${mixin.sectionPadding};

  @media screen and (max-width: 990px) {
    flex-direction: column;
  }
`

const FeatureHeading = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  text-align: left;
  margin-right: 5rem;

  h1 {
    font-size: 34px;
    line-height: 45px;
    font-weight: 800;
    font-family: var(--font-family);

    ${mixin.gradientText};

    @media screen and (max-width: 550px) {
      font-size: 28px;
      line-height: 38px;
    }
  }

  p {
    color: ${color.subtext};
    font-size: 16px;
    line-height: 30px;
    font-weight: 500;
    margin-top: 2rem;
  }

  @media screen and (max-width: 990px) {
    margin: 0 0 2rem 0;
  }
`

const FeaturesContainer = styled.div`
  flex: 1.5;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`

export { 
  StyledFeatures,
  FeatureHeading,
  FeaturesContainer
}