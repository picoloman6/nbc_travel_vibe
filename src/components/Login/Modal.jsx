import * as St from './styles/Login.style';

import Login from './Login';
import SignUp from './SignUp';
import { useSelector } from 'react-redux';

const Modal = ({
  isOpen,
  setIsOpen,
  onModalHandler,
  isSignUp,
  setIsSignUp,
  setIsLoggedIn
}) => {
  const onSignUpHandler = () => {
    setIsSignUp(!isSignUp);
  };

  // 이메일, 비밀번호 형식 유효성 검사 함수
  const validEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validPw = (pw) => {
    const pwRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{7,}$/;
    return pwRegex.test(pw);
  };

  // 등록된 user정보 가져오기 (reducer 통해서)
  const importUsers = useSelector((state) => state.user.users);

  return (
    <St.Background $isOpen={isOpen}>
      <St.Container>
        {isSignUp ? (
          <SignUp
            onModalHandler={onModalHandler}
            onSignUpHandler={onSignUpHandler}
            validEmail={validEmail}
            validPw={validPw}
            importUsers={importUsers}
            setIsOpen={setIsOpen}
            setIsLoggedIn={setIsLoggedIn}
          />
        ) : (
          <Login
            setIsOpen={setIsOpen}
            onModalHandler={onModalHandler}
            isSignUp={isSignUp}
            setIsSignUp={setIsSignUp}
            onSignUpHandler={onSignUpHandler}
            importUsers={importUsers}
            setIsLoggedIn={setIsLoggedIn}
            validEmail={validEmail}
            validPw={validPw}
          />
        )}
      </St.Container>
    </St.Background>
  );
};

export default Modal;
