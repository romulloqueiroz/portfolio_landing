import {
  StyledPossibility,
  PossibilityImage,
  PossibilityContent
} from './Possibility.styles'

const Possibility = () => (
  <StyledPossibility>
    <PossibilityImage>
      <img 
        src='/assets/possibility.png'
        alt='possibility' 
      />
    </PossibilityImage>
    <PossibilityContent>
      <h4>Request Early Access to Get Started</h4>
      <h1>The possibilities are <br /> beyond your imagination</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      <h4>Request Early Access to Get Started</h4>
    </PossibilityContent>
  </StyledPossibility>
)

export default Possibility