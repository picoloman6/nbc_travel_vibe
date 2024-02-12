import { StPhotoContainer, StModalContainer } from './styles/PhotoModalStyle';

const PhotoModal = ({ selectPhoto, isPhotoOpen, setIsPhotoOpen }) => {
  return (
    <StModalContainer
      $isPhotoOpen={isPhotoOpen}
      onClick={() => setIsPhotoOpen(false)}>
      <StPhotoContainer>
        <img src={selectPhoto.url} alt='사진을 불러올 수 없습니다.' />
      </StPhotoContainer>
    </StModalContainer>
  );
};

export default PhotoModal;
