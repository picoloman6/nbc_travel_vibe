import { useState } from 'react';
import {
  StHeader,
  StHeaderBtnWapper,
  StHeaderBtn
} from './styles/Header.style';
import Modal from '../Login/Modal';

const Header = () => {
  // 모달창을 위한 state 상태관리
  const [isOpen, setIsOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
        />
        <StHeaderBtn>O</StHeaderBtn>
      </StHeaderBtnWapper>
    </StHeader>
  );
};

export default Header;
