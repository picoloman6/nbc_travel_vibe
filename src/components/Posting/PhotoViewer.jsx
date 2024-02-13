import {
  StImageWrap,
  StDeleteButton,
  StPhotos,
  StPhotoImage
} from './styles/PhotoViewerStyle';

const PhotoViewer = ({ photos, setPhotos, handlePhotoView }) => {
  const handleDeletePhoto = (index) => {
    const deletedPhoto = photos.filter((item, i) => i !== index);
    setPhotos(deletedPhoto);
  };

  return (
    <>
      <StPhotos>
        {photos.map((photo, index) => {
          return (
            <StImageWrap key={index}>
              <StPhotoImage
                onClick={() => handlePhotoView(photo)}
                src={photo.url}
              />
              <StDeleteButton onClick={() => handleDeletePhoto(index)}>
                X
              </StDeleteButton>
            </StImageWrap>
          );
        })}
      </StPhotos>
    </>
  );
};

export default PhotoViewer;
