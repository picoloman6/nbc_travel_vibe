import { useCallback, useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';

import Header from '../components/common/Header';
import Body from '../components/common/Body';
import ArticleHeader from '../components/article/ArticleHeader';
import ArticleContent from '../components/article/ArticleContent';
import CommentForm from '../components/article/CommentForm';
import Comment from '../components/article/Comment';
import { StArticleWrapper, StArticleHr } from './styles/Article.style';
import {
  deleteCommentApi,
  getCommentsApi,
  postCommentApi
} from '../apis/comments';
import { deletePostApi, getPostsApi } from '../apis/posts';
import { postGetData } from '../redux/modules/PostReducer';

const ArticlePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storage = getStorage();
  const [searchParams] = useSearchParams();
  const [comments, setComments] = useState([]);
  const [photo, setPhotos] = useState([]);
  const user = useSelector((state) => state.user);

  const postId = searchParams.get('pid');
  const posts = useSelector((state) => state.post.posts);
  const post = posts.filter((v) => v.postId === postId)[0];

  const getComments = useCallback(async () => {
    const comments = await getCommentsApi(postId);
    setComments(comments);
  }, [postId]);

  const postComment = async (content) => {
    if (!user.userId) {
      alert('로그인 하세요.');
      return;
    }
    await postCommentApi(content, postId, user.userId, 'kaka');
    await getComments();
  };

  const deleteComment = async (commentId, userId) => {
    if (user.userId !== userId) {
      alert('작성자가 아닙니다.');
      return;
    }

    await deleteCommentApi(commentId);
    await getComments();
  };

  const getPhotos = useCallback(async () => {
    const photoRef = ref(storage, `/posts/${postId}/0`);
    const photoPath = await getDownloadURL(photoRef);
    setPhotos((prev) => [...prev, photoPath]);
  }, [postId, storage]);

  const moveToUpdate = () => {
    if (user.userId !== post.userId) {
      alert('작성자가 아닙니다.');
      return;
    }

    navigate(`/posting?pid=${postId}`, { state: post });
  };

  const deletePost = async () => {
    if (user.userId !== post.userId) {
      alert('작성자가 아닙니다.');
      return;
    }

    await deletePostApi(postId);
    const newPosts = await getPostsApi();
    dispatch(postGetData(newPosts));
    navigate('/');
    if (comments.length > 0) {
      comments.forEach((v) => {
        deleteCommentApi(v.commentId);
      });
    }
  };

  useEffect(() => {
    if (post === undefined) {
      navigate('/');
    }
    getPhotos();
    getComments();
  }, [post, getComments, navigate, getPhotos]);

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
            moveToUpdate={moveToUpdate}
            deletePost={deletePost}
            isOwnPost={user.userId === post.userId}
          />
          <StArticleHr />
          <ArticleContent
            content={post.content}
            likes={post.likes}
            photos={photo}
            commentsLen={comments ? comments.length : 0}
          />
          <StArticleHr />
          <CommentForm postComment={postComment} />
          <StArticleHr />
          <div>
            {comments &&
              comments.map((v, i) => (
                <Comment
                  key={v.commentId}
                  comment={v}
                  border={i < comments.length - 1}
                  deleteComment={deleteComment}
                  isOwnComment={user.userId === v.userId}
                />
              ))}
          </div>
        </Body>
      )}
    </StArticleWrapper>
  );
};

export default ArticlePage;
