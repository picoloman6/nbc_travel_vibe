import { StContainer, StBackground } from './styles/Login.style';

import Login from './Login';
import SignUp from './SignUp';

const Modal = ({ isOpen, onModalHandler, isSignUp, setIsSignUp }) => {
  return (
    <StBackground $isOpen={isOpen}>
      <StContainer>
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
