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
import { collection, doc, getDocs, query, updateDoc } from 'firebase/firestore/lite';


const MyPage = () => {
  const [nickname, setNickname] = useState("")
  const [email, setEmail] = useState("")
  const [image, setImage] = useState("")

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // users 데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, 'users'));
        const querySnapshot = await getDocs(q);
        querySnapshot.docs.forEach((doc) => {
          const { nickname, email, image } = doc.data();
          setNickname(nickname)
          setEmail(email)
          setImage(image)
        });
      } catch (error) {
        console.error('Error getting documents: ', error);
      }
    };
    fetchData();
  }, []);

  //Firestore에서 사용자 데이터 업데이트하는 함수
  const updateUserInFirestore = async (updatedData) => {
    try {
      const userRef = doc(db, 'users', 'iIMfE29MjRVa7Y7HpzwY0mUE3 ');
      await updateDoc(userRef, updatedData);
      dispatch(updateUserData(updatedData));
    } catch (error) {
      console.log("firestore 업데이트 실패")
    }
  }

  const handleUpdate = () => {
    const updatedData = { nickname, image }
    updateUserInFirestore(updatedData)
    console.log(updatedData)
    // let updateUser = { ...user };
    // // 닉네임을 변경한 경우
    // if (nickname !== user.nickname) {
    //   updateUser = { ...updateUser, nickname }
    // };
    // // 새로운 비밀번호를 입력하고, 확인란과 일치하는 경우
    // if (newPassword && newPassword === confirmPassword) {
    //   updateUser = { ...updateUser, nono: newPassword };
    // }
    // // 비밀번호 유효성 검사
    // if (newPassword !== confirmPassword) {
    //   alert('비밀번호가 일치하지 않습니다. 다시 확인해주세요.');
    //   setConfirmPassword('')
    //   return;
    // }
    // // 이미지를 변경한 경우 
    // if (image !== user.image) {
    //   updateUser = { ...updateUser, image };
    // }

    // dispatch(updateUserData(updateUser));
    // console.log('updateUser:', updateUser);
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
                <div>{email}</div>
              </StEmail>
              <StNickName>
                <label>닉네임</label>
                <input placeholder={nickname} type='text' onChange={(e) => setNickname(e.target.value)}></input>
              </StNickName>
              <StCurrentPw>
                <label>새로운 비밀번호</label>
                <input placeholder="비밀번호" type='password'></input>
              </StCurrentPw>
              <StNewPw>
                <label>비밀번호 확인</label>
                <input type='password'></input>
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
