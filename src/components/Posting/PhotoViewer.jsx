import {
  StImageWrap,
  StDeleteButton,
  StPhotos,
  StPhotoImage
} from './styles/PhotoViewerStyle';

const PhotoViewer = ({
  setPhotos,
  handlePhotoView,
  previewPhotos,
  setPreviewPhotos,
  photos
}) => {
  console.log(previewPhotos);
  const handleDeletePhoto = async (index) => {
    const deletedPhoto = previewPhotos.filter((item, i) => i !== index);
    const newPhotos = Array.from(deletedPhoto).map((file, index) => ({
      id: index,
      url: file.url
    }));
    await setPhotos(photos.filter((item, i) => i !== index));
    await setPreviewPhotos(newPhotos);
  };

  return (
    <>
      <StPhotos>
        {previewPhotos.map((photo, index) => {
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
