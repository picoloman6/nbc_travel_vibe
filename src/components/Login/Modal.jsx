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

const Modal = ({ isOpen, onModalHandler, isSignUp, setIsSignUp }) => {
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
            onModalHandler={onModalHandler}
            isSignUp={isSignUp}
            setIsSignUp={setIsSignUp}
          />
        )}
      </StContainer>
    </StBackground>
  );
};

export default Modal;
