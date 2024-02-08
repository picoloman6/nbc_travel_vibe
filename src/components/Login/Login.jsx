import React from 'react';
import {
  StCheckBox,
  StIdPwWrapper,
  StLoginBtn,
  StLoginBtnWrapper,
  StLoginInput,
  StLoginTitle,
  StLoginWrapper,
  StMailPw,
  StMemoInfo,
  StMemoWrapper,
  StSignUp,
  StInputContainer,
  StPwIcon
} from './styles/Login.style';
import pwCheck1 from '../../assets/pwCheck1.jpg';

const Login = () => {
  return (
    <>
      <StLoginWrapper>
        <StLoginTitle>로그인</StLoginTitle>
        <StIdPwWrapper>
          <StMailPw>이메일</StMailPw>
          <StLoginInput />
          <StInputContainer>
            <StMailPw>비밀번호</StMailPw>
            <StLoginInput type='password' autoComplete='on' />
            <StPwIcon src={pwCheck1} alt='비밀번호확인' />
          </StInputContainer>
        </StIdPwWrapper>
        <StMemoWrapper>
          <StCheckBox type='checkbox' />
          <StMemoInfo>로그인 정보 기억하기</StMemoInfo>
        </StMemoWrapper>
        <StLoginBtnWrapper>
          <StLoginBtn>로그인</StLoginBtn>
          <StSignUp>회원가입</StSignUp>
        </StLoginBtnWrapper>
      </StLoginWrapper>
    </>
  );
};

export default Login;
