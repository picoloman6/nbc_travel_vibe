import React from 'react';
import {
  StLoginWrapper,
  StSignUp,
  StPwIcon,
  StCloseBtn,
  StAskSignUpWrapper,
  StAskSignUp,
  StLoginInput
} from './styles/Login.style';
import {
  StLogoName,
  StLoginTitle,
  StErrorMsg,
  StIdPwWrapper,
  StSignUpBtn,
  StInputContainer
} from './styles/SignUp.style';

const SignUp = ({
  onSignUpHandler,
  onModalHandler,
  isValidEmail,
  email,
  isValidPw,
  pw
}) => {
  return (
    <>
      <StLoginWrapper>
        <StCloseBtn onClick={onModalHandler}>x</StCloseBtn>
        <StLogoName>Travel Vibe</StLogoName>
        <StLoginTitle>회원가입</StLoginTitle>
        <StIdPwWrapper>
          <StInputContainer>
            <StLoginInput placeholder='travel123@gmail.com' />
          </StInputContainer>
          <StErrorMsg>
            {!isValidEmail && email.length > 0 && (
              <div>올바르지 않은 이메일 형식입니다.</div>
            )}
          </StErrorMsg>
          <StInputContainer>
            <StLoginInput placeholder='닉네임' />
          </StInputContainer>
          <StErrorMsg>중복되는 닉네임입니다.</StErrorMsg>
          <StInputContainer>
            <StLoginInput
              type='password'
              autoComplete='on'
              placeholder='비밀번호'
            />
            <StPwIcon />
          </StInputContainer>
          <StErrorMsg>
            {!isValidPw && pw.length > 0 && (
              <div>영문, 숫자 포함 8자 이상 입력해주세요.</div>
            )}
          </StErrorMsg>
          <StInputContainer>
            <StLoginInput
              type='password'
              autoComplete='on'
              placeholder='비밀번호 확인'
            />
            <StPwIcon />
          </StInputContainer>
          <StErrorMsg>비밀번호가 일치하지 않습니다.</StErrorMsg>
        </StIdPwWrapper>
        <StSignUpBtn>회원가입</StSignUpBtn>
        <StAskSignUpWrapper>
          <StAskSignUp>이미 가입하셨나요?</StAskSignUp>
          <StSignUp onClick={onSignUpHandler}>로그인</StSignUp>
        </StAskSignUpWrapper>
      </StLoginWrapper>
    </>
  );
};

export default SignUp;
