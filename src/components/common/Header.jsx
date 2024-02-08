import { useState } from 'react';
import {
  StHeader,
  StHeaderBtnWapper,
  StHeaderBtn
} from './styles/Header.style';
import Modal from '../Login/Modal';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const onModalHandler = () => {
    setIsOpen(!isOpen);
    if (isSignUp === true) {
      setIsSignUp(!isSignUp);
    }
  };

  return (
    <StHeader>
      <StHeaderBtnWapper>
        <StHeaderBtn>Home</StHeaderBtn>
        <StHeaderBtn>My Blog</StHeaderBtn>
      </StHeaderBtnWapper>
      <StHeaderBtnWapper>
        <StHeaderBtn onClick={onModalHandler}>Login</StHeaderBtn>
        <Modal
          isOpen={isOpen}
          onModalHandler={onModalHandler}
          isSignUp={isSignUp}
          setIsSignUp={setIsSignUp}
        />
        <StHeaderBtn>O</StHeaderBtn>
      </StHeaderBtnWapper>
    </StHeader>
  );
};

export default Header;
