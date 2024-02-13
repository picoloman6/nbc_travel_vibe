import Category from './Category';
import Header from '../common/Header';
import PhotoModal from './PhotoModal';
import PhotoViewer from './PhotoViewer';
import PhotoInput from './PhotoInput';
import { Body } from './styles/PostingStyle';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
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
import { addPostApi } from '../../apis/posts';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../apis/posts';

const Posting = () => {
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
      category: selectedCategory,
      title,
      content,
      created_at: new Date(),
      likes: 0
      // userId: postData.length + 1,
    };
    const PostId = await addPostApi(newPost);
    dispatch(postPostData(newPost));
    await handleSavePhoto(PostId);
  };

  const handleSavePhoto = async (PostId) => {
    for (const photo of photos) {
      const imageRef = ref(storage, `posts/${PostId}/${photo.id}`);
      await uploadBytes(imageRef, photo.url);
      const downloadURL = await getDownloadURL(imageRef);
      console.log(downloadURL);
    }
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
