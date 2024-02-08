import React from 'react';
import { StDeleteBtn, StSubmitBtn } from '../common/styles/Button.style';
import { StAvatar, StBtnsWrapper, StContainer, StCurrentPw, StEmail, StMyPageTitle, StMyPageWrapper, StNewPw, StNickName, StUserInfoDeatilWrapper, StUserInfoWrapper } from './styles/MyPages.style';
import Body from '../common/Body';
import Header from '../common/Header';

export const MyPage = () => {
  return (
    <StContainer>
      <Header />
      <Body>
        <StMyPageWrapper>
          <StMyPageTitle>프로필 설정</StMyPageTitle>
          <StUserInfoWrapper>
            <StAvatar></StAvatar>
            <StUserInfoDeatilWrapper>
              <StEmail>
                <label>이메일</label>
                <div>이메일</div>
              </StEmail>
              <StNickName>
                <label>닉네임</label>
                <input placeholder='닉네임' type='text'></input>
              </StNickName>
              <StCurrentPw>
                <label>현재 비밀번호</label>
                <input type='password'></input>
              </StCurrentPw>
              <StNewPw>
                <label>새로운 비밀번호</label>
                <input type='password'></input>
              </StNewPw>
            </StUserInfoDeatilWrapper>
          </StUserInfoWrapper>
          <StBtnsWrapper>
            <StSubmitBtn>완료</StSubmitBtn>
            <StDeleteBtn>삭제</StDeleteBtn>
          </StBtnsWrapper>
        </StMyPageWrapper>
      </Body>
    </StContainer>
  );
};