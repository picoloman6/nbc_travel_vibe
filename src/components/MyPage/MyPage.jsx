import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Body from '../common/Body';
import Header from '../common/Header';
import { StDeleteBtn, StSubmitBtn } from '../common/styles/Button.style';
import {
  StAvatar,
  StBtnsWrapper,
  StContainer,
  StEmail,
  StImgUpdate,
  StMyPageTitle,
  StMyPageWrapper,
  StNickName,
  StUserInfoDeatilWrapper,
  StUserInfoWrapper
} from './styles/MyPages.style';
import { updateUserData } from '../../redux/modules/UserReducer';
import { updateUserInfoApi } from '../../apis/users';
import { userDefaultImg } from '../../constants/users';
import { ref, uploadBytes, getStorage, getDownloadURL } from 'firebase/storage';

const MyPage = () => {
  const user = useSelector((state) => state.user);
  const [nickname, setNickname] = useState('');
  const [image, setImage] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storage = getStorage();

  const handleUpdate = async () => {
    if (nickname.length > 3 && user.nickname !== nickname) {
      alert('닉네임이 변경되었습니다.');
      setNickname('');
      await updateUserInfoApi(user.userId, nickname);
      dispatch(updateUserData({ nickname: nickname }));
    }

    if (image !== '') {
      alert('사진이 변경되었습니다.');
      setImage('');
      const image = await changeUserImage();
      dispatch(updateUserData({ image }));
    }
  };

  const handleCancle = () => {
    navigate('/');
  };

  const handleImageChange = (e) => {
    const blob = new Blob(e.target.files);
    e.target.value = '';
    setImage(blob);
  };

  const changeUserImage = async () => {
    if (image === '') {
      alert('이미지를 입력하세요');
      return;
    }

    const imageRef = ref(storage, `users/${user.userId}`);
    await uploadBytes(imageRef, image);
    const downloadURL = await getDownloadURL(imageRef);

    return downloadURL;
  };

  useEffect(() => {
    if (!user.userId) {
      alert('잘못된 접속입니다.');
      navigate('/');
    }
  }, [navigate, user]);

  return (
    <StContainer>
      <Header />
      <Body>
        <StMyPageWrapper>
          <StMyPageTitle>프로필 설정</StMyPageTitle>
          <StUserInfoWrapper>
            <div>
              <StAvatar
                src={user.image === '기본이미지' ? userDefaultImg : user.image}
                alt='기본이미지'
              />
              <input
                type='file'
                accept='image/*'
                onChange={handleImageChange}
                style={{ width: '80%' }}
              />
              {image && <StImgUpdate>사진 업로드 완료</StImgUpdate>}
            </div>
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
