import { StContainer, StBackground } from './styles/Login.style';

import Login from './Login';
import SignUp from './SignUp';

const Modal = ({ isOpen, onModalHandler, isSignUp, setIsSignUp }) => {
  const onSignUpHandler = () => {
    setIsSignUp(!isSignUp);
  };
  return (
    <StBackground $isOpen={isOpen}>
      <StContainer>
        {isSignUp ? (
          <SignUp
            onModalHandler={onModalHandler}
            onSignUpHandler={onSignUpHandler}
          />
        ) : (
          <Login
            onModalHandler={onModalHandler}
            isSignUp={isSignUp}
            setIsSignUp={setIsSignUp}
            onSignUpHandler={onSignUpHandler}
          />
        )}
      </StContainer>
    </StBackground>
  );
};

export default Modal;
