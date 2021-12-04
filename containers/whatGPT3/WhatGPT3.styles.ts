import styled from 'styled-components'
import { 
  color, 
  backgrounds, 
  shadow, 
  mixin 
} from '../../styles'

import { 
  ContainerFeature, 
  ContainerFeatureText 
} from '../../components/feature/Feature.styles'

const StyledWhatGPT3 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: ${color.footer};
  background: ${backgrounds.whatGPT3};
  filter: ${shadow.whatGPT3};

  ${mixin.sectionMargin};
`

const WhatGPT3Feature = styled.div`
  display: flex;
  margin: 0;

  ${ContainerFeature} {
    margin: 0;

    @media screen and (max-width: 650px) {
      flex-direction: column;
    }
  }

  ${ContainerFeatureText} {
    max-width: 700px;

    @media screen and (max-width: 650px) {
      margin-top: 0.5rem;
    }
  }
`

const WhatGPT3Heading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 4rem 0 2rem;

  @media screen and (max-width: 850px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 0rem;
  }

  h1 {
    font-size: 34px;
    line-height: 45px;
    font-weight: 800;
    max-width: 510px;

    ${mixin.gradientText};

    @media screen and (max-width: 650px) {
      font-size: 28px;
      line-height: 40px;
    }
  }

  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    color: ${color.subtext};
    cursor: pointer;

    @media screen and (max-width: 850px) {
      margin-top: 1rem;
    }
  }
`

const WhatGPT3Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 2rem;

  ${ContainerFeature} {
    flex: 1;
    margin: 1rem;
    min-width: 210px;
    display: unset;
    flex-direction: column;

    @media screen and (max-width: 350px) {
      margin: 1rem 0;
      min-width: 100%;
    }
  }

  ${ContainerFeatureText} {
    margin-top: 0.5rem;
  }
`

export { 
  StyledWhatGPT3, 
  WhatGPT3Feature, 
  WhatGPT3Heading, 
  WhatGPT3Container 
}
