import styled from 'styled-components'
import { mixin } from '../../styles'

const StyledBrand = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  ${mixin.sectionPadding};

  div {
    flex: 1;
    max-width: 150px;
    min-width: 120px;
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
`

export { StyledBrand }