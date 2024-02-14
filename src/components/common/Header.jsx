import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Modal from '../Login/Modal';
import LogoutModal from '../Main/LogoutModal';
import {
  StHeader,
  StHeaderBtnWapper,
  StHeaderBtn,
  StHeaderProfileImage,
  StNavLink
} from './styles/Header.style';

const Header = () => {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  const [isOpen, setIsOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onModalHandler = () => {
    if (user.userId) {
      setIsLoggedIn(false);
      alert('로그아웃 되었습니다.');
    } else {
      setIsOpen(!isOpen);
      if (isSignUp === true) {
        setIsSignUp(!isSignUp);
      }
    }
  };

  const onLogoutModalHandler = () => {
    setIsLogoutModalOpen(true);
  };

  const handlePostButtonClick = () => {
    navigate(`/posting?uid=${user.userId}`);
  };

  const handleMyBlogButtonClick = () => {
    if (!user.userId) {
      alert('로그인 후 사용 가능합니다.');
      setIsOpen(!isOpen);
    }
    return;
  };

  const handleHomeButtonClick = () => {
    navigate('/');
  };

  return (
    <StHeader>
      <StHeaderBtnWapper>
        <StNavLink to='/' onClick={handleHomeButtonClick}>
          Home
        </StNavLink>
        {user.userId ? (
          <StNavLink to={`/myarticle?uid=${user.userId}`}>My Blog</StNavLink>
        ) : (
          <StHeaderBtn onClick={handleMyBlogButtonClick}>My Blog</StHeaderBtn>
        )}
      </StHeaderBtnWapper>
      <StHeaderBtnWapper>
        {user.userId ? (
          <>
            <StNavLink
              to={`/posting?uid=${user.userId}`}
              onClick={handlePostButtonClick}>
              Post
            </StNavLink>
            <StHeaderBtn onClick={onLogoutModalHandler}>Logout</StHeaderBtn>
            <StHeaderProfileImage
              onClick={() =>
                navigate(`/mypage?uid=${user.userId}`)
              }></StHeaderProfileImage>
          </>
        ) : (
          <>
            <StHeaderBtn onClick={onModalHandler}>Login</StHeaderBtn>
            <StHeaderProfileImage
              onClick={handleMyBlogButtonClick}></StHeaderProfileImage>
          </>
        )}
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          onModalHandler={onModalHandler}
          isSignUp={isSignUp}
          setIsSignUp={setIsSignUp}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
        {isLogoutModalOpen && (
          <LogoutModal
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            isLogoutModalOpen={isLogoutModalOpen}
            setIsLogoutModalOpen={setIsLogoutModalOpen}
          />
        )}
      </StHeaderBtnWapper>
    </StHeader>
  );
};

export default Header;
