import { Feature } from '../../components'
import { features } from './Features.data'
import { 
  StyledFeatures,
  FeatureHeading,
  FeaturesContainer
} from './Features.styles'

const Features = () => (
  <StyledFeatures id='features'>
    <FeatureHeading>
      <h1>The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </FeatureHeading>
    <FeaturesContainer>
      {features.map(({ title, text }, idx) => (
        <Feature 
          key={title + idx} 
          title={title} 
          text={text} 
        />
      ))}
    </FeaturesContainer>
  </StyledFeatures>
)

export default Features
