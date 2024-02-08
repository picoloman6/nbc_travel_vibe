import Header from '../components/common/Header';
import Body from '../components/common/Body';
import ArticleHeader from '../components/article/ArticleHeader';
import ArticleContent from '../components/article/ArticleContent';
import CommentForm from '../components/article/CommentForm';
import Comment from '../components/article/Comment';

import { StArticleWrapper } from './styles/Article.style';

const Article = () => {
  return (
    <>
      <Header />
      <Body>
        <StArticleWrapper>
          <ArticleHeader />
          <hr />
          <ArticleContent />
          <hr />
          <CommentForm />
          <hr />
          <Comment />
          <hr />
        </StArticleWrapper>
      </Body>
    </>
  );
};

export default Article;
