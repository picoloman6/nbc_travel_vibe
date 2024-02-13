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
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onModalHandler = () => {
    if (!isLoggedIn) {
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
    setIsLogoutModalOpen(!isLogoutModalOpen);
  };

  // const onLogoutModalHandler = async () => {
  //   await signOut(auth);
  //   setIsLoggedIn(false);
  //   console.log('로그아웃');
  // };

  const handlePostButtonClick = () => {
    navigate(`/posting`);
  };

  const handleMyBlogButtonClick = () => {
    if (!isLoggedIn) {
      alert('로그인 후 사용 가능합니다.');
      setIsOpen(!isOpen);
      return;
    }
    navigate(`/posting?uid=${foundUser.userId}`);
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
        {isLoggedIn ? (
          <StNavLink to={`/myarticle?uid=${foundUser.userId}`}>My Blog</StNavLink>
        ) : (
          <StHeaderBtn onClick={handleMyBlogButtonClick}>My Blog</StHeaderBtn>
        )}
      </StHeaderBtnWapper>
      <StHeaderBtnWapper>
        {isLoggedIn ? (
          <>
            <StNavLink to={`/posting?uid=${foundUser.userId}`} onClick={handlePostButtonClick}>
              Post
            </StNavLink>
            <StHeaderBtn onClick={onLogoutModalHandler}>Logout</StHeaderBtn>
            <StHeaderProfileImage
              onClick={() => navigate('/mypage')}></StHeaderProfileImage>
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

        {isLoggedIn && (
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
