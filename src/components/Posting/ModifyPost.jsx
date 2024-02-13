import Category from './Category';
import Header from '../common/Header';
import { Body } from './styles/PostingStyle';
import PhotoInput from './PhotoInput';
import PhotoModal from './PhotoModal';
import PhotoViewer from './PhotoViewer';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
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

const Posting = () => {
  //post 저장을 하기위한 state
  const [photos, setPhotos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [modifyPost, setModifyPost] = useState('');
  const [postDate, SetPostDate] = useState('');

  //modal창을 위한 state
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);
  const [selectPhoto, setSelectPhoto] = useState('');

  //기존 데이터를 불러오는 요소 (아티클에서 수정하기를 누르면 파라미터로 postId를 넘겨줄거임)
  const location = useLocation();
  const id = location.state;

  const postData = useSelector((state) => state.post.posts);
  const [modifyData] = postData.filter((item) => item.postId === id);
  console.log(modifyData);
  const dispatch = useDispatch();

  console.log(modifyData.photos);

  useEffect(() => {
    setPhotos(modifyData.photos);
    setTitle(modifyData.title);
    setContent(modifyData.content);
    SetPostDate(modifyData.created_at);
  }, []);

  //post를 저장
  const handlePosting = async () => {
    const newPost = {
      postId: id,
      category: selectedCategory,
      title,
      content,
      created_at: postDate,
      likes: 0,
      userId: postData.userId,
      photos: photos
    };
    setModifyPost(
      await postData.map((item) => {
        if (item.postId === id) {
          return { ...item, ...newPost };
        }
        return item;
      })
    );
  };
  useEffect(() => {
    if (modifyPost) {
      dispatch(postPostData(modifyPost));
    }
  }, [modifyPost]);

  const handlePhotoView = (photo) => {
    setSelectPhoto(photo);
    setIsPhotoOpen(true);
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
              defaultValue={title}></StTitle>
            <PhotoViewer
              photos={photos}
              setPhotos={setPhotos}
              handlePhotoView={handlePhotoView}
            />
            <StWrite
              placeholder='글 쓰셈'
              onChange={handleContent}
              defaultValue={content}
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
