import { useState } from 'react';
import {
  StHeader,
  StHeaderBtnWapper,
  StHeaderBtn,
  StHeaderProfileImage,
  StNavLink
} from './styles/Header.style';
import Modal from '../Login/Modal';
import LogoutModal from '../Main/LogoutModal';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false)
  const onModalHandler = () => {
    setIsOpen(!isOpen);
    if (isSignUp === true) {
      setIsSignUp(!isSignUp);
    }
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onLogoutModalHandler = () => {
    setIsLogoutModalOpen(!isLogoutModalOpen);
  }

  const handlePostButtonClick = () => {
    navigate('/posting')

  }

  const handleMyBlogButtonClick = () => {
    if (isLoggedIn) {
      alert("로그인 후 사용 가능합니다.")
      setIsOpen(!isOpen)
    } else {
      navigate('/myarticle')
    }
  }

  const handleHomeButtonClick = () => {
    navigate('/')
  }

  return (
    <StHeader>
      <StHeaderBtnWapper>
        <StNavLink to='/' onClick={handleHomeButtonClick}>Home</StNavLink>
        <StNavLink to='/myarticle' onClick={handleMyBlogButtonClick}>My Blog</StNavLink>
      </StHeaderBtnWapper>
      <StHeaderBtnWapper>

        {/* 로그인 했을 시 : Home, MyBlog, Post, Logout, 프로필 이미지 */}
        {/* 로그인 안했을 시 : Home, MyBlog, Login */}
        {!isLoggedIn
          ? <>
            <StNavLink to='/posting' onClick={handlePostButtonClick}>Post</StNavLink>
            <StHeaderBtn onClick={onLogoutModalHandler}>Logout</StHeaderBtn>
            <StHeaderProfileImage></StHeaderProfileImage>
          </>
          : <StNavLink onClick={onModalHandler}>Login</StNavLink>
        }
        <Modal
          isOpen={isOpen}
          onModalHandler={onModalHandler}
          isSignUp={isSignUp}
          setIsSignUp={setIsSignUp}
        />
        {!isLoggedIn && <LogoutModal
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          isLogoutModalOpen={isLogoutModalOpen}
          setIsLogoutModalOpen={setIsLogoutModalOpen}
        />}

      </StHeaderBtnWapper>
    </StHeader>
  );
};

export default Header;
