import styled from 'styled-components'
import { color, gradient, shadow } from '../../styles'


const ContainerFeature = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  margin: 1rem;

  @media screen and (max-width: 550px) {
    margin: 1rem 0;
  }
`

const ContainerFeatureTitle = styled.div`
  flex: 1;
  max-width: 180px;
  margin-right: 2rem;

  h1 {
    font-weight: 800;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.04em;
    color: ${color.white};

    @media screen and (max-width: 550px) {
      font-size: 14px;
      line-height: 22px;
    }
  }

  div {
    width: 38px;
    height: 3px;
    background: ${gradient.bar};
    box-shadow: ${shadow.feature};
    margin-bottom: 0.25rem; 
  }
` 

const ContainerFeatureText = styled.div`
  flex: 2;
  max-width: 390px;
  display: flex;

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: ${color.text};

    @media screen and (max-width: 550px) {
      font-size: 12px;
      line-height: 20px;
    }
  }
`

export { ContainerFeature, ContainerFeatureTitle, ContainerFeatureText }