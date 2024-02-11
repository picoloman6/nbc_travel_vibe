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

const Login = ({ onModalHandler, onSignUpHandler }) => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPw, setIsValidPw] = useState(false);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailRegex.test(email)) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  };

  const onChangePw = (e) => {
    setPw(e.target.value);
  };

  // useEffect(() => {
  //   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  //   const passwordRegex =
  //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  //   setIsValidEmail(emailRegex.test(email));
  //   setIsValidPw(passwordRegex.test(pw));

  //   if (isValidEmail) {
  //   }
  // }, [email, pw]);

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
              onChange={onChangeEmail}
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
              onChange={onChangePw}
            />
            <StPwIcon />
          </StInputContainer>
          <StErrorMsg>
            영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.
          </StErrorMsg>
        </StIdPwWrapper>
        <StMemoWrapper>
          <StCheckBox type='checkbox' />
          <StMemoInfo>로그인 유지하기</StMemoInfo>
        </StMemoWrapper>
        <StLoginBtn>로그인</StLoginBtn>
        <StAskSignUpWrapper>
          <StAskSignUp>아직 회원이 아니신가요?</StAskSignUp>
          <StSignUp onClick={onSignUpHandler}>회원가입</StSignUp>
        </StAskSignUpWrapper>
      </StLoginWrapper>
    </>
  );
};

export default Login;
