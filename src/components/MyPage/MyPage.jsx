import React, { useCallback, useEffect, useState } from 'react';
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
import { onAuthStateChanged } from 'firebase/auth';
import db, { auth } from '../../apis/config';
import {
  collection,
  getDocs,
  query,
  updateDoc,
  doc
} from 'firebase/firestore/lite';
import { getUsersApi, updateUserInfoApi } from '../../apis/users';

const MyPage = () => {
  const user = useSelector((state) => state.user);
  const [nickname, setNickname] = useState('');
  const [image, setImage] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getUserData = useCallback(() => {
    setImage(user.image);
  }, [user]);

  const handleUpdate = () => {
    if (nickname.length < 3) {
      alert('닉네임을 3글자 이상 입력하세요');
      return;
    }

    if (user.nickname === nickname) {
      alert('닉네임이 변경되지 않았습니다.');
      return;
    }

    alert('닉네임이 변경되었습니다.');
    setNickname('');
    updateUserInfoApi(user.userId, nickname);
    dispatch(updateUserData({ nickname: nickname }));
  };

  const handleCancle = () => {
    navigate('/');
  };

  useEffect(() => {
    if (!user.userId) {
      alert('잘못된 접속입니다.');
      navigate('/');
    }

    getUserData();
  }, [getUserData, navigate, user]);

  return (
    <StContainer>
      <Header />
      <Body>
        <StMyPageWrapper>
          <StMyPageTitle>프로필 설정</StMyPageTitle>
          <StUserInfoWrapper>
            <StAvatar src={user.image === '기본이미지'} />
            <StUserInfoDeatilWrapper>
              <StEmail>
                <label>이메일</label>
                <div>{user.email}</div>
              </StEmail>
              <StNickName>
                <label>닉네임({user.nickname})</label>
                <input
                  placeholder='닉네임을 입력하세요'
                  type='text'
                  onChange={(e) => setNickname(e.target.value)}
                  value={nickname}
                />
              </StNickName>
            </StUserInfoDeatilWrapper>
          </StUserInfoWrapper>
          <StBtnsWrapper>
            <StSubmitBtn onClick={handleUpdate}>저장</StSubmitBtn>
            <StDeleteBtn onClick={handleCancle}>취소</StDeleteBtn>
          </StBtnsWrapper>
        </StMyPageWrapper>
      </Body>
    </StContainer>
  );
};

export default MyPage;
