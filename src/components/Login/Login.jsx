import React from 'react';
import styled from 'styled-components';

const Login = () => {
  return (
    <StContainer>
      <StLogoWrapper>
        <StLogoImg />
        <StLogoName>Travel Vibe</StLogoName>
      </StLogoWrapper>
      <StLoginWrapper>
        <StTitle>로그인</StTitle>
        <StIdPwWrapper>
          <StEmail>이메일</StEmail>
          <StEmailInput />
          <StPassword>비밀번호</StPassword>
          <StPasswordInput />
        </StIdPwWrapper>
        <StMemoWrapper>
          <StCheckBox />
          <StMemoInfo>로그인 정보 기억하기</StMemoInfo>
        </StMemoWrapper>
        <StLoginBtnWrapper>
          <StLoginBtn>로그인</StLoginBtn>
          <StSignUp>회원가입</StSignUp>
        </StLoginBtnWrapper>
      </StLoginWrapper>
    </StContainer>
  );
};

const StContainer = styled.div`
  display: flex;
`;

const StLogoWrapper = styled.div``;

export default Login;
