import { StContainer, StBackground } from './styles/Login.style';

import Login from './Login';
import SignUp from './SignUp';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Modal = ({ isOpen, onModalHandler, isSignUp, setIsSignUp }) => {
  const onSignUpHandler = () => {
    setIsSignUp(!isSignUp);
  };

  // state 상태관리
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPw, setIsValidPw] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // email 형식 유효성검사
  const onCheckValidEmail = (e) => {
    setEmail(e.target.value);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailRegex.test(email)) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  };

  // 비밀번호 형식 유효성검사
  const onCheckValidPw = (e) => {
    setPw(e.target.value);
    const pwRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{7,}$/;

    if (pwRegex.test(pw)) {
      setIsValidPw(true);
    } else {
      setIsValidPw(false);
    }
  };

  // 등록된 user정보 가져오기 (reducer 통해서)
  const importUsers = useSelector((state) => state.user.users);

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
            importUsers={importUsers}
            email={email}
            pw={pw}
            setIsLoggedIn={setIsLoggedIn}
            onCheckValidEmail={onCheckValidEmail}
            isValidEmail={isValidEmail}
            onCheckValidPw={onCheckValidPw}
            isValidPw={isValidPw}
          />
        )}
      </StContainer>
    </StBackground>
  );
};

export default Modal;
