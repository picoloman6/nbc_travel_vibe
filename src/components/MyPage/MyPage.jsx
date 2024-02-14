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
import { collection, getDocs, query, updateDoc } from 'firebase/firestore/lite';
import { doc } from 'firebase/firestore/lite';
import { getUsersApi } from '../../apis/users';

const MyPage = () => {
  const [userData, setUserData] = useState('null');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // users 데이터 가져오기
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const email = user.email;
          const userData = await getUsersApi(email);
          setUserData(userData);
          setNickname(userData.nickname);
          setEmail(userData.email);
          setImage(userData.image);
          console.log('유저정보', userData);
        } else {
          alert('로그인 하세요.');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  // 닉네임 업데이트
  const updateNickname = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const uid = user.uid;
        console.log('uid', uid);
        const userRef = doc(db, 'users', uid);
        await updateDoc(userRef, { nickname });
        dispatch(updateUserData({ nickname: nickname }));
        alert('닉네임이 업데이트되었습니다.');
      } else {
        console.error('로그인 하세요.');
      }
    } catch (error) {
      console.error('닉네임 업데이트 오류:', error);
    }
  };

  const handleUpdate = () => {
    updateNickname();
    // 새로운 비밀번호를 입력하고, 확인란과 일치하는 경우
    if (newPassword && newPassword === confirmPassword) {
    }
    // 비밀번호 유효성 검사
    if (newPassword !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다. 다시 확인해주세요.');
      setConfirmPassword('');
      return;
    }
  };

  const handleCancle = () => {
    navigate(-1);
  };

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
                <div>{email}</div>
              </StEmail>
              <StNickName>
                <label>닉네임</label>
                <input
                  placeholder={nickname}
                  type='text'
                  onChange={(e) => setNickname(e.target.value)}></input>
              </StNickName>
              <StCurrentPw>
                <label>새로운 비밀번호</label>
                <input
                  placeholder='비밀번호'
                  type='password'
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}></input>
              </StCurrentPw>
              <StNewPw>
                <label>비밀번호 확인</label>
                <input
                  type='password'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}></input>
              </StNewPw>
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
