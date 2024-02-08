import Header from '../components/common/Header';
import Body from '../components/common/Body';
import ArticleHeader from '../components/article/ArticleHeader';
import ArticleContent from '../components/article/ArticleContent';
import CommentForm from '../components/article/CommentForm';
import Comment from '../components/article/Comment';

import { StArticleWrapper, StArticleHr } from './styles/Article.style';

const Article = () => {
  return (
    <StArticleWrapper>
      <Header />
      <Body>
        <ArticleHeader />
        <StArticleHr />
        <ArticleContent />
        <StArticleHr />
        <CommentForm />
        <StArticleHr />
        <Comment />
        <StArticleHr />
      </Body>
    </StArticleWrapper>
  );
};

export default Article;
