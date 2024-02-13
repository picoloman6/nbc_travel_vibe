import { useCallback, useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from '../components/common/Header';
import Body from '../components/common/Body';
import ArticleHeader from '../components/article/ArticleHeader';
import ArticleContent from '../components/article/ArticleContent';
import CommentForm from '../components/article/CommentForm';
import Comment from '../components/article/Comment';

import { StArticleWrapper, StArticleHr } from './styles/Article.style';
import { getCommentsApi } from '../apis/comments';

const ArticlePage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [comments, setComments] = useState([]);

  const postId = searchParams.get('pid');
  const posts = useSelector((state) => state.post.posts);
  const post = posts.filter((v) => v.postId === postId)[0];

  const getComments = useCallback(async () => {
    const comments = await getCommentsApi(postId);
    setComments(comments);
  }, [postId]);

  useEffect(() => {
    if (post === undefined) {
      navigate('/');
    }
    getComments();
  }, [post, getComments, navigate]);

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
            comments={comments.length}
          />
          <StArticleHr />
          <CommentForm />
          <StArticleHr />
          {comments.length > 0 &&
            comments.map((v, i) => (
              <>
                <Comment comment={v} key={v.commentId} />
                {i !== comments.length - 1 && <StArticleHr />}
              </>
            ))}
        </Body>
      )}
    </StArticleWrapper>
  );
};

export default ArticlePage;
