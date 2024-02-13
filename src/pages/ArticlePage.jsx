import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from '../components/common/Header';
import Body from '../components/common/Body';
import ArticleHeader from '../components/article/ArticleHeader';
import ArticleContent from '../components/article/ArticleContent';
import CommentForm from '../components/article/CommentForm';
import Comment from '../components/article/Comment';

import { StArticleWrapper, StArticleHr } from './styles/Article.style';

const ArticlePage = () => {
  const [searchParams] = useSearchParams();
  const postId = searchParams.get('pid') * 1;
  const posts = useSelector((state) => state.post.posts);
  const comments = useSelector((state) => state.comment.comments);

  const { category, title, content, likes, userNickname, created_at } =
    posts.filter((v) => v.postId === postId)[0];
  const postComments = comments.filter((v) => v.postId === postId);

  return (
    <StArticleWrapper>
      <Header />
      <Body>
        <ArticleHeader
          category={category}
          title={title}
          userNickname={userNickname}
          created_at={created_at}
        />
        <StArticleHr />
        <ArticleContent
          content={content}
          likes={likes}
          comments={postComments}
        />
        <StArticleHr />
        <CommentForm />
        <StArticleHr />
        {postComments.length > 0 &&
          postComments.map((v) => <Comment comment={v} key={v.commentId} />)}
        <StArticleHr />
      </Body>
    </StArticleWrapper>
  );
};

export default ArticlePage;
