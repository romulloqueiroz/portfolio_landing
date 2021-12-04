import { 
  BlogContainerArticle,
  BlogContainerArticleImage,
  BlogContainerArticleContent
} from './Article.styles'

interface ArticleProps {
  imgUrl: string
  date: string
  text: string
}

const Article: React.FC<ArticleProps> = ({ imgUrl, date, text }) => (
  <BlogContainerArticle>
    <BlogContainerArticleImage>
      <img 
        src={imgUrl} 
        alt='blog_image'
      />
    </BlogContainerArticleImage>
    <BlogContainerArticleContent>
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Read Full Article</p>
    </BlogContainerArticleContent>
  </BlogContainerArticle>
)

export default Article
