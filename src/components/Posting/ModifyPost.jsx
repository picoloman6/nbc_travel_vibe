import styled from 'styled-components';
import Category from './Category';
import size from '../../constants/size';
import colors from '../../constants/colors';
import Header from '../common/Header';
import PhotoInput from './PhotoInput';
import { useEffect, useState } from 'react';
import PhotoViewer from './PhotoViewer';
import { useDispatch, useSelector } from 'react-redux';
import PhotoModal from './PhotoModal';
import { useLocation, useNavigate } from 'react-router-dom';
import { postSetData } from '../../redux/modules/PostReducer';

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
      dispatch(postSetData(modifyPost));
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
        <Tools>
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
        </Tools>
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

export const Tools = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding-top: 15px;
`;

export const StWrite = styled.textarea`
  width: 95%;
  height: auto;
  min-height: 250px;

  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  resize: none;
  overflow: hidden;

  border: none;
  border-top: 1px solid black;
  color: #000000;
`;

export const StWriteBox = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 15px 0;
`;

export const Body = styled.div`
  background-color: white;
  width: ${size.bodyWidth};
`;

export const StContainer = styled.div`
  width: ${size.wrapperWidth};
  min-height: ${size.bodyMinHeight};
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

export const StContentSection = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;

  min-height: 686px;

  border-radius: 5px;
  background: #ffffff;
  border: 2px solid #c6c6c6;
`;

export const StTitle = styled.input`
  width: 95%;
  min-height: 75px;
  font-style: normal;
  font-size: 48px;
  border: none;
  border-bottom: 1px solid black;
  color: black;
`;

export const StConformButton = styled.button`
  width: 158px;
  height: 48px;

  color: white;
  font-size: 30px;
  margin-top: 10px;

  background: ${colors.mainBlue};
  border-radius: 20px;
  border: none;
`;
