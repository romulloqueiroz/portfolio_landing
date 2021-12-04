import styled from 'styled-components'
import { mixin, device } from '../../styles'
import { BlogContainerArticle, BlogContainerArticleImage } from '../../components/article/Article.styles'

const StyledBlog = styled.div`
  display: flex;
  flex-direction: column;  

  ${mixin.sectionPadding};
`

const BlogHeading = styled.div`
  width: 100%;
  text-align: left;
  margin-bottom: 5rem;

  h1 {
    font-size: 62px;
    line-height: 75px;
    font-weight: 800;

    ${mixin.gradientText};

    @media ${device.tablet} {
      font-size: 46px;
      line-height: 52px;
    }

    @media ${device.mobile} {
      font-size: 34px;
      line-height: 42px;
    }
  }
`

const BlogContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media ${device.desktop} {
    flex-direction: column-reverse;
  }
`

const BlogContainerGroupA = styled.div`
  flex: 0.75;
  margin-right: 2rem;

  @media ${device.desktop} {
    margin: 2rem 0;
  }

  ${BlogContainerArticle} {
    @media ${device.desktop} {
      width: 48%;
    }
    @media ${device.tablet} {
      width: 100%;
    }
  }

  ${BlogContainerArticleImage} {
    @media ${device.desktop} {
      height: 250px;
    }
  }
`

const BlogContainerGroupB = styled.div`
  flex: 1;
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;

  @media ${device.tablet} {
    grid-template-columns: repeat(1, 1fr);
  }
`

export {
  StyledBlog,
  BlogHeading,
  BlogContainer,
  BlogContainerGroupA,
  BlogContainerGroupB
}