import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from '../components/common/Header';
import Body from '../components/common/Body';
import ArticleHeader from '../components/article/ArticleHeader';
import ArticleContent from '../components/article/ArticleContent';
import CommentForm from '../components/article/CommentForm';
import Comment from '../components/article/Comment';

import { StArticleWrapper, StArticleHr } from './styles/Article.style';

const ArticlePage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const postId = searchParams.get('pid');
  const posts = useSelector((state) => state.post.posts);
  const comments = useSelector((state) => state.comment.comments);

  const post = posts.filter((v) => v.postId === postId)[0];
  const postComments = comments.filter((v) => v.postId === postId);

  useEffect(() => {
    if (post === undefined) {
      navigate('/');
    }
  }, [post, navigate]);

  return (
    <StArticleWrapper>
      <Header />
      {post && (
        <Body>
          <ArticleHeader
            category={post.category}
            title={post.title}
            userNickname={post.userNickname}
            createdAt={post.createdAt}
          />
          <StArticleHr />
          <ArticleContent
            content={post.content}
            likes={post.likes}
            comments={postComments}
          />
          <StArticleHr />
          <CommentForm />
          <StArticleHr />
          {postComments.length > 0 &&
            postComments.map((v) => <Comment comment={v} key={v.commentId} />)}
          <StArticleHr />
        </Body>
      )}
    </StArticleWrapper>
  );
};

export default ArticlePage;
