import Category from './Category';
import Header from '../common/Header';
import PhotoModal from './PhotoModal';
import PhotoViewer from './PhotoViewer';
import PhotoInput from './PhotoInput';
import { Body } from './styles/PostingStyle';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postPostData } from '../../redux/modules/PostReducer';
import { useNavigate } from 'react-router-dom';
import {
  StTools,
  StWrite,
  StWriteBox,
  StContainer,
  StContentSection,
  StTitle,
  StConformButton
} from './styles/PostingStyle';

const Posting = () => {
  const navigate = useNavigate();
  const postData = useSelector((state) => state.post.posts);
  const dispatch = useDispatch();

  const [photos, setPhotos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);
  const [selectPhoto, setSelectPhoto] = useState('');
  const [previewPhotos, setPreviewPhotos] = useState([]);

  const handlePhotoView = (photo) => {
    setSelectPhoto(photo);
    setIsPhotoOpen(true);
  };

  const handlePosting = async () => {
    const newPost = {
      postId: postData.length + 1,
      category: selectedCategory,
      title,
      content,
      created_at: new Date(),
      likes: 0,
      userId: postData.length + 1,
      photos: photos
    };
    dispatch(postPostData(newPost));
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

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
              placeholder='제목을 입력하셈'
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
              placeholder='글 쓰셈'
              onChange={handleContent}
              value={content}
            />
          </StContentSection>
          <StConformButton onClick={handlePosting}>ㄱㄱㄱ</StConformButton>
          <button
            onClick={() => navigate('/modifyPost', { state: 2 })}
            state={2}>
            수정하기로 이동
          </button>
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
