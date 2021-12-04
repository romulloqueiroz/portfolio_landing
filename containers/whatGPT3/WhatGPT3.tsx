import { StyledWhatGPT3, WhatGPT3Feature, WhatGPT3Heading, WhatGPT3Container } from './WhatGPT3.styles'
import { Feature } from '../../components'
import { features } from './WhatGPT3.data'

const WhatGPT3 = () => (
  <StyledWhatGPT3>
    <WhatGPT3Feature>
      <Feature 
        title={features[0].title} 
        text={features[0].description}
      />
    </WhatGPT3Feature>
    <WhatGPT3Heading>
      <h1>The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </WhatGPT3Heading>
    <WhatGPT3Container>
      {
        features.slice(1).map(({ title, description }, idx) => (
          <Feature
            key={title + idx}
            title={title}
            text={description}
          />
        ))
      }
    </WhatGPT3Container>
  </StyledWhatGPT3>
)

export default WhatGPT3