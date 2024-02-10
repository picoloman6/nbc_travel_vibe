import styled from 'styled-components';

const PhotoViewer = ({ photos, setPhotos, handlePhotoView }) => {
  console.log(photos);

  const handleDeletePhoto = (index) => {
    const deletedPhoto = photos.filter((item, i) => i !== index);
    setPhotos(deletedPhoto);
  };

  return (
    <>
      <StPhotos>
        {photos.map((photo, index) => {
          return (
            <ImageWrap key={index}>
              <PhotoImage onClick={() => handlePhotoView(photo)} src={photo} />
              <DeleteButton onClick={() => handleDeletePhoto(index)}>
                X
              </DeleteButton>
            </ImageWrap>
          );
        })}
      </StPhotos>
    </>
  );
};

export default PhotoViewer;

export const ImageWrap = styled.div`
  position: relative; //이거 주고 자식한테 absolute 주면 따라감
`;

export const DeleteButton = styled.button`
  size: 20px;
  position: absolute;
  right: 0;
  top: 0;
`;

export const StPhotos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 15px 15px 15px 15px;
  width: 95%;
  min-height: 248px;

  background: #d9d9d9;
`;

export const PhotoImage = styled.img`
  max-block-size: 150px;
`;
