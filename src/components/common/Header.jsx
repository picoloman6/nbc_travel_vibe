import { useEffect, useState } from 'react';
import {
  StHeader,
  StHeaderBtnWapper,
  StHeaderBtn,
  Test
} from './styles/Header.style';
import Modal from '../Login/Modal';
import { useSelector } from 'react-redux';

const Header = () => {
  // 모달창을 위한 state 상태관리
  const [isOpen, setIsOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUserId, setLoggedInUserId] = useState('');

  // 모달창 열고 닫기
  const onModalHandler = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      alert('로그아웃 되었습니다.');
    } else {
      setIsOpen(!isOpen);
      if (isSignUp === true) {
        setIsSignUp(!isSignUp);
      }
    }
  };

  // 프로필 이미지
  const users = useSelector((state) => state.user.users);
  const foundUser = users.find((user) => user.userId === loggedInUserId);
  // useEffect(() => {
  //   console.log(foundUser);
  // }, [loggedInUserId]);

  return (
    <StHeader>
      <StHeaderBtnWapper>
        <StHeaderBtn>Home</StHeaderBtn>
        <StHeaderBtn>My Blog</StHeaderBtn>
      </StHeaderBtnWapper>
      <StHeaderBtnWapper>
        <StHeaderBtn onClick={onModalHandler}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </StHeaderBtn>
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          onModalHandler={onModalHandler}
          isSignUp={isSignUp}
          setIsSignUp={setIsSignUp}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setLoggedInUserId={setLoggedInUserId}
        />
        <StHeaderBtn>
          {isLoggedIn && (
            <Test
              $isLoggedIn={isLoggedIn}
              src={foundUser.image}
              alt='기본이미지'
            />
          )}
        </StHeaderBtn>
      </StHeaderBtnWapper>
    </StHeader>
  );
};

export default Header;
