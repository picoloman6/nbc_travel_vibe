import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Modal from './components/Login/Modal.jsx';
import Router from './Shared/Router.js';
import ResetStyles, { StAppWrapper } from './App.style.js';
import { postGetData } from './redux/modules/PostReducer.js';
import { getPostsApi, postDummy } from './apis/posts.js';

const App = () => {
  const dispatch = useDispatch();

  const getPosts = useCallback(async () => {
    const posts = await getPostsApi();

    if (posts.length === 0) {
      for (let i = 0; i < 5; i++) {
        const newPost = {
          category: 'eat',
          content: 'djfiosjd',
          createdAt: 516516,
          likes: 0,
          photos: [
            'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcR7h0XNCZC4R_NicVVuNbbE9YrQ0iAjncl3didVtA9P8kN5PhgZy_aKPP15vfL_98IBZJjsXZEUKjzS66g'
          ],
          title: 'sdfsdf',
          userId: 'sdfsdf',
          userNickname: 'sdfsdf',
          views: 0
        };
        await postDummy(newPost);
      }
    }

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
