import {
  StyledBlog,
  BlogHeading,
  BlogContainer,
  BlogContainerGroupA,
  BlogContainerGroupB
} from './Blog.styles'
import { Article } from '../../components'

const Blog = () => (
  <StyledBlog>
    <BlogHeading>
      <h1>A lot is happening, <br /> We are blogging about it.</h1>
    </BlogHeading>
    <BlogContainer>
      <BlogContainerGroupA>
        <Article 
          imgUrl='/assets/blog01.png' 
          date='Sep 26, 2021' 
          text='GPT-3 and Open  AI is the future. Let us exlore how it is?' 
        />
      </BlogContainerGroupA>
      <BlogContainerGroupB>
        <Article 
          imgUrl='/assets/blog02.png' 
          date='Sep 26, 2021' 
          text='GPT-3 and Open  AI is the future. Let us exlore how it is?' 
        />
        <Article 
          imgUrl='/assets/blog03.png' 
          date='Sep 26, 2021' 
          text='GPT-3 and Open  AI is the future. Let us exlore how it is?' 
        />
        <Article 
          imgUrl='/assets/blog04.png' 
          date='Sep 26, 2021' 
          text='GPT-3 and Open  AI is the future. Let us exlore how it is?' 
        />
        <Article 
          imgUrl='/assets/blog05.png' 
          date='Sep 26, 2021' 
          text='GPT-3 and Open  AI is the future. Let us exlore how it is?' 
        />
      </BlogContainerGroupB>
    </BlogContainer>
  </StyledBlog>
)

export default Blog
