import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Modal from './components/Login/Modal.jsx';
import Router from './Shared/Router.js';
import ResetStyles, { StAppWrapper } from './App.style.js';
import { postGetData } from './redux/modules/PostReducer.js';
import { getPostsApi } from './apis/posts.js';

const App = () => {
  const dispatch = useDispatch();

  const getPosts = useCallback(async () => {
    const posts = await getPostsApi();
    dispatch(postGetData(posts));
  }, [dispatch]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <StAppWrapper>
      <ResetStyles />
      <Router />
      <Modal />
    </StAppWrapper>
  );
};

export default App;
