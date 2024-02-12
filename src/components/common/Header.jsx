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
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const onModalHandler = () => {
    setIsOpen(!isOpen);
    if (isSignUp === true) {
      setIsSignUp(!isSignUp);
    }
  };

  const onLogoutModalHandler = () => {
    console.log(isLoggedIn)
    setIsLogoutModalOpen(!isLogoutModalOpen);
  }

  const handlePostButtonClick = () => {
    navigate('/posting')

  }

  const handleMyBlogButtonClick = () => {
    console.log(isLoggedIn)
    if (isLoggedIn) {
      alert("로그인 후 사용 가능합니다.")
      setIsOpen(!isOpen)
    }

  }

  const handleHomeButtonClick = () => {
    navigate('/')
    console.log("isLoggedIn", isLoggedIn)
  }


  return (
    <StHeader>
      <StHeaderBtnWapper>
        <StNavLink to='/' onClick={handleHomeButtonClick}>Home</StNavLink>
        {!isLoggedIn
          ? <StNavLink to='/myarticle'>My Blog</StNavLink>
          : <StHeaderBtn onClick={handleMyBlogButtonClick}>My Blog</StHeaderBtn>
        }

      </StHeaderBtnWapper>
      <StHeaderBtnWapper>
        {!isLoggedIn
          ? <>
            <StNavLink to='/posting' onClick={handlePostButtonClick}>Post</StNavLink>
            <StHeaderBtn onClick={onLogoutModalHandler}>Logout</StHeaderBtn>
            <StHeaderProfileImage onClick={() => navigate('/mypage')}></StHeaderProfileImage>
          </>
          : <StHeaderBtn onClick={onModalHandler}>Login</StHeaderBtn>
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
