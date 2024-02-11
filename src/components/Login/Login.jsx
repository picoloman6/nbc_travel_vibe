import { useEffect, useState } from 'react';
import {
  StCheckBox,
  StIdPwWrapper,
  StLoginBtn,
  StAskSignUpWrapper,
  StLoginInput,
  StLoginTitle,
  StLoginWrapper,
  StMemoInfo,
  StMemoWrapper,
  StSignUp,
  StInputContainer,
  StPwIcon,
  StCloseBtn,
  StAskSignUp,
  StLogoName
} from './styles/Login.style';
import { StErrorMsg } from './styles/SignUp.style';
import { useSelector } from 'react-redux';

const Login = ({ onModalHandler, onSignUpHandler }) => {
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

  const onLoginConfirm = () => {
    const foundUser = importUsers.find((user) => {
      return user.email === email && user.nono === pw;
    });

    if (foundUser) {
      alert('로그인 되었습니다.');
      setIsLoggedIn(true);
    } else {
      alert('등록되지 않은 회원입니다.');
    }
  };

  return (
    <>
      <StLoginWrapper>
        <StCloseBtn onClick={onModalHandler}>x</StCloseBtn>
        <StLogoName>Travel Vibe</StLogoName>
        <StLoginTitle>로그인</StLoginTitle>
        <StIdPwWrapper>
          <StInputContainer>
            <StLoginInput
              placeholder='travel123@gmail.com'
              value={email}
              onChange={onCheckValidEmail}
            />
          </StInputContainer>
          <StErrorMsg>
            {!isValidEmail && email.length > 0 && (
              <div>올바르지 않은 이메일 형식입니다.</div>
            )}
          </StErrorMsg>
          <StInputContainer>
            <StLoginInput
              type='password'
              autoComplete='on'
              placeholder='비밀번호'
              value={pw}
              onChange={onCheckValidPw}
            />
            <StPwIcon />
          </StInputContainer>
          <StErrorMsg>
            {!isValidPw && pw.length > 0 && (
              <div>영문, 숫자 포함 8자 이상 입력해주세요.</div>
            )}
          </StErrorMsg>
        </StIdPwWrapper>
        <StMemoWrapper>
          <StCheckBox type='checkbox' />
          <StMemoInfo>로그인 유지하기</StMemoInfo>
        </StMemoWrapper>
        <StLoginBtn onClick={onLoginConfirm}>로그인</StLoginBtn>
        <StAskSignUpWrapper>
          <StAskSignUp>아직 회원이 아니신가요?</StAskSignUp>
          <StSignUp onClick={onSignUpHandler}>회원가입</StSignUp>
        </StAskSignUpWrapper>
      </StLoginWrapper>
    </>
  );
};

export default Login;
