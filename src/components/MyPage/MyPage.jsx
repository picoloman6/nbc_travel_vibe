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
import { onAuthStateChanged } from "firebase/auth";
import db, { auth } from '../../apis/config';
import { collection, getDocs, query, updateDoc } from 'firebase/firestore/lite';
import { doc } from '@firebase/firestore';

const MyPage = () => {
  const [nickname, setNickname] = useState("")
  const [email, setEmail] = useState("")
  const [image, setImage] = useState("")
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // users 데이터 가져오기 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, 'users'));
        const querySnapshot = await getDocs(q);
        querySnapshot.docs.forEach((item) => {
          const { nickname, email, image } = item.data();
          console.log(item.data)
          setNickname(nickname)
          setEmail(email)
          setImage(image)
        })
      } catch (error) {
        console.error('Error getting documents: ', error);
      }
    }
    fetchData();
  }, [])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("user?????", user);
    });
    return () => unsubscribe();
  }, []);

  // 닉네임 업데이트
  const updateNickname = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const uid = user.uid;
        const usersRef = doc(db, 'users', uid);
        await updateDoc(usersRef, { nickname: nickname });
        dispatch(updateUserData({ nickname: nickname }));
        alert('닉네임이 업데이트되었습니다.');
      } else {
        console.error('No user is currently signed in.');
      }
    } catch (error) {
      console.error('Error updating nickname:', error);
    }
  };


  const handleUpdate = () => {
    // const updatedData = { email, nickname, image }
    // updateUserInFirestore(updatedData)
    // console.log(updatedData)
    // let updateUser = { ...user };
    // // 닉네임을 변경한 경우
    // if (nickname !== user.nickname) {
    //   // 닉네임 저장 로직
    // };
    updateNickname();


    // 새로운 비밀번호를 입력하고, 확인란과 일치하는 경우
    if (newPassword && newPassword === confirmPassword) {

    }
    // 비밀번호 유효성 검사
    if (newPassword !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다. 다시 확인해주세요.');
      setConfirmPassword('')
      return;
    }
    // 이미지를 변경한 경우 
    // if (image !== user.image) {
    //   updateUser = { ...updateUser, image };
    // }

    // dispatch(updateUserData(updateUser));
    // console.log('updateUser:', updateUser);
  }

  const handleCancle = () => {
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
                <div>{email}</div>
              </StEmail>
              <StNickName>
                <label>닉네임</label>
                <input placeholder={nickname} type='text' onChange={(e) => setNickname(e.target.value)}></input>
              </StNickName>
              <StCurrentPw>
                <label>새로운 비밀번호</label>
                <input placeholder="비밀번호" type='password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)}></input>
              </StCurrentPw>
              <StNewPw>
                <label>비밀번호 확인</label>
                <input type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} ></input>
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
