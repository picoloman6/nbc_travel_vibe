import Header from '../components/common/Header';
import Body from '../components/common/Body';
import { ArticleWrapper } from '../Styles/Pages/Article.style';

const Article = () => {
  return (
    <ArticleWrapper>
      <Header />
      <Body />
    </ArticleWrapper>
  );
};

export default Article;
