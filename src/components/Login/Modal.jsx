import {
  StContainer,
  StLogoImg,
  StLogoName,
  StLogoWrapper,
  StBackground
} from './styles/Login.style';

import logoImg from '../../assets/logoImg.png';
import Login from './Login';
import SignUp from './SignUp';

const Modal = ({ isOpen, onModalHandler, isSignUp, onSignUpHandler }) => {
  return (
    <StBackground $isOpen={isOpen}>
      <StContainer>
        <StLogoWrapper>
          <StLogoImg src={logoImg} alt='로고이미지' />
          <StLogoName>Travel Vibe</StLogoName>
        </StLogoWrapper>
        {isSignUp ? (
          <SignUp onModalHandler={onModalHandler} />
        ) : (
          <Login
            onSignUpHandler={onSignUpHandler}
            onModalHandler={onModalHandler}
          />
        )}
      </StContainer>
    </StBackground>
  );
};

export default Modal;
