import Category from './Category';
import Header from '../common/Header';
import PhotoModal from './PhotoModal';
import PhotoViewer from './PhotoViewer';
import PhotoInput from './PhotoInput';
import { Body } from './styles/PostingStyle';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postPostData } from '../../redux/modules/PostReducer';
import {
  StTools,
  StWrite,
  StWriteBox,
  StContainer,
  StContentSection,
  StTitle,
  StConformButton
} from './styles/PostingStyle';
import { addPostApi, updatePostApi } from '../../apis/posts';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../apis/posts';
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';

const Posting = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [photos, setPhotos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);
  const [selectPhoto, setSelectPhoto] = useState('');
  const [previewPhotos, setPreviewPhotos] = useState([]);

  // 수정 관련
  const { state } = useLocation();
  const [searchParams] = useSearchParams();
  const postIdQuery = searchParams.get('pid');
  const [mode, setMode] = useState('add');

  const handlePhotoView = (photo) => {
    setSelectPhoto(photo);
    setIsPhotoOpen(true);
  };

  const handlePosting = async () => {
    if (!user.userId) {
      alert('로그인이 필요합니다.');
      return;
    }
    if (title === '' || content === '' || selectedCategory === '') {
      alert('카테고리, 제목, 내용은 필수로 입력해야합니다!');
      return;
    }
    const newPost = {
      category: selectedCategory,
      title,
      content,
      createdAt: new Date().getTime(),
      likes: 0,
      userId: user.userId,
      views: 0,
      userNickname: 'name',
      photo: previewPhotos[0]
    };

    if (mode === 'update') {
      await updatePostApi(postIdQuery, newPost);
    } else {
      const PostId = await addPostApi(newPost);
      await handleSavePhoto(PostId);
    }

    setMode('add');
    dispatch(postPostData(newPost));
  };

  const handleSavePhoto = async (PostId) => {
    for (const photo of photos) {
      const imageRef = ref(storage, `posts/${PostId}/${photo.id}`);
      await uploadBytes(imageRef, photo.url);
      const downloadURL = await getDownloadURL(imageRef);
      console.log(downloadURL);
      alert('완료!');
      navigate('/');
    }
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  useEffect(() => {
    if (postIdQuery) {
      setSelectedCategory(state.category);
      setContent(state.content);
      setTitle(state.title);
      setMode('update');
    }
  }, [state, postIdQuery]);

  return (
    <StContainer>
      <Header />
      <Body>
        <StTools>
          <PhotoInput
            photos={photos}
            setPhotos={setPhotos}
            setIsPhotoOpen={setIsPhotoOpen}
            setSelectPhoto={setSelectPhoto}
            setPreviewPhotos={setPreviewPhotos}
          />
          <Category
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </StTools>
        <StWriteBox>
          <StContentSection>
            <StTitle
              placeholder='제목을 입력해주세요'
              onChange={handleTitle}
              value={title}></StTitle>
            <PhotoViewer
              setPreviewPhotos={setPreviewPhotos}
              setPhotos={setPhotos}
              handlePhotoView={handlePhotoView}
              previewPhotos={previewPhotos}
              photos={photos}
            />
            <StWrite
              placeholder='글을 작성해주세요'
              onChange={handleContent}
              value={content}
            />
          </StContentSection>
          <StConformButton onClick={handlePosting}>ㄱㄱㄱ</StConformButton>
        </StWriteBox>
      </Body>
      <PhotoModal
        isPhotoOpen={isPhotoOpen}
        selectPhoto={selectPhoto}
        setIsPhotoOpen={setIsPhotoOpen}
      />
    </StContainer>
  );
};

export default Posting;
