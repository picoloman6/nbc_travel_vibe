import React, { useState } from 'react';
import { StDeleteBtn, StSubmitBtn } from '../common/styles/Button.style';
import {
  StAvatar,
  StBtnsWrapper,
  StContainer,
  StCurrentPw,
  StEmail,
  StMyPageTitle,
  StMyPageWrapper,
  StNewPw,
  StNickName,
  StUserInfoDeatilWrapper,
  StUserInfoWrapper
} from './styles/MyPages.style';
import Body from '../common/Body';
import Header from '../common/Header';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserData } from '../../redux/modules/UserReducer';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
  const user = useSelector((state) => state.user.users[0]);
  const userEmail = user.email // 유저 이메일 가져오기

  const [nickname, setNickname] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [image, setImage] = useState(user.image);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = () => {
    let updateUser = { ...user };
    // 닉네임을 변경한 경우
    if (nickname !== user.nickname) {
      updateUser = { ...updateUser, nickname }
    };
    // 새로운 비밀번호를 입력하고, 확인란과 일치하는 경우
    if (newPassword && newPassword === confirmPassword) {
      updateUser = { ...updateUser, nono: newPassword };
    }
    // 비밀번호 유효성 검사
    if (newPassword !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다. 다시 확인해주세요.');
      setConfirmPassword('')
      return;
    }
    // 이미지를 변경한 경우 
    if (image !== user.image) {
      updateUser = { ...updateUser, image };
    }

    dispatch(updateUserData(updateUser));
    console.log('updateUser:', updateUser);
  }

  const handleCancle = () => {
    // 이전 페이지로 돌아가기?
    navigate(-1);
  }

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
                <div>{userEmail}</div>
              </StEmail>
              <StNickName>
                <label>닉네임</label>
                <input placeholder={user.nickname} type='text' value={nickname} onChange={(e) => setNickname(e.target.value)}></input>
              </StNickName>
              <StCurrentPw>
                <label>새로운 비밀번호</label>
                <input placeholder={user.nono} type='password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)}></input>
              </StCurrentPw>
              <StNewPw>
                <label>비밀번호 확인</label>
                <input type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>
              </StNewPw>
            </StUserInfoDeatilWrapper>
          </StUserInfoWrapper>
          <StBtnsWrapper>
            <StSubmitBtn onClick={handleUpdate}>저장</StSubmitBtn>
            <StDeleteBtn onClick={handleCancle}>취소</StDeleteBtn>
          </StBtnsWrapper>
        </StMyPageWrapper>
      </Body>
    </StContainer >
  );
};

export default MyPage;
