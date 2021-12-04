import styled from 'styled-components'
import { color, device } from '../../styles'

const BlogContainerArticle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${color.footer};
`

const BlogContainerArticleImage = styled.div`
  width: 100%;
  height: 100%;
  background: ${color.bg};
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }
`

const BlogContainerArticleContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  height: 100%;

  p {
    font-size: 11.65px;
    font-weight: 700;
    line-height: 35px;
    color: ${color.white};

    &:last-child {
      cursor: pointer;
    }
  }

  h3 {
    font-size: 25.11px;
    font-weight: 800;
    line-height: 30.30px;
    color: ${color.white};
    margin-bottom: 5rem;
    cursor: pointer;

    @media ${device.mobile} {
      font-size: 18px;
      line-height: 25p;
    }
  }
`

export { 
  BlogContainerArticle,
  BlogContainerArticleImage,
  BlogContainerArticleContent
}