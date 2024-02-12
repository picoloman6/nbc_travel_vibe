import { useSelector, useDispatch } from 'react-redux';

import ResetStyles, { StAppWrapper } from './App.style.js';
import Modal from './components/Login/Modal.jsx';

import { postUserData } from './redux/modules/UserReducer.js';
// import { postPostData } from './redux/modules/PostReducer.js';
// import { postCommentData } from './redux/modules/CommentReducer.js';
import { useEffect } from 'react';
import Router from './Shared/Router.js';

const App = () => {
  // 4. useSelector로 여기서 꺼내서 쓴다.
  // state[전체 상태].user[리듀서이름].users[상태이름]
  const users = useSelector((state) => state.user.users);
  const posts = useSelector((state) => state.post.posts);
  const comments = useSelector((state) => state.comment.comments);
  const mypages = useSelector((state) => state.mypage.mypages);

  // 5. 데이터에 변화를 줄때는 이대로 사용한다.
  // dispatch 안에는 액션 객체 생성 함수
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      postUserData({
        userId: 3,
        email: 'sdkfjl',
        nono: 'sdfsd',
        nickname: 'sdfsdf',
        image: 'dddd'
      })
    );
  }, [dispatch]);

  console.log(users);
  console.log(posts);
  console.log(comments);
  console.log(mypages);

  return (
    <StAppWrapper>
      <ResetStyles />
      <Router />
      <Modal />
    </StAppWrapper>
  );
};

export default App;
