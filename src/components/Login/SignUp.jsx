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
  StPwIcon,
  StCloseBtn
} from './styles/Login.style';
import pwCheck1 from '../../assets/pwCheck1.jpg';

const SignUp = ({ onModalHandler }) => {
  return (
    <>
      <StLoginWrapper>
        <StCloseBtn onClick={onModalHandler}>x</StCloseBtn>
        <StLoginTitle>회원가입</StLoginTitle>
        <StIdPwWrapper>
          <StMailPw>이메일</StMailPw>
          <StLoginInput />
          <StMailPw>닉네임</StMailPw>
          <StLoginInput />
          <StInputContainer>
            <StMailPw>비밀번호</StMailPw>
            <StLoginInput type='password' autoComplete='on' />
            <StPwIcon src={pwCheck1} alt='비밀번호확인' />
          </StInputContainer>
          <StInputContainer>
            <StMailPw>비밀번호 확인</StMailPw>
            <StLoginInput type='password' autoComplete='on' />
            <StPwIcon src={pwCheck1} alt='비밀번호확인' />
          </StInputContainer>
        </StIdPwWrapper>
        <StLoginBtnWrapper>
          <StLoginBtn>로그인</StLoginBtn>
        </StLoginBtnWrapper>
      </StLoginWrapper>
    </>
  );
};

export default SignUp;
