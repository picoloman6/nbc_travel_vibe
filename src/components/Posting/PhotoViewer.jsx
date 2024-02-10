import { useState } from 'react';
import styled from 'styled-components';
import PhotoModal from './PhotoModal';

const PhotoViewer = ({ photos }) => {
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);
  const [selectPhoto, setSelectPhoto] = useState('');

  const handlePhotoView = (index) => {
    setSelectPhoto(index);
    setIsPhotoOpen(!isPhotoOpen);
  };

  return (
    <>
      <StPhotos>
        {photos.map((photo, index) => {
          return (
            <PhotoImage
              onClick={() => handlePhotoView(index)}
              key={index}
              src={photo}
            />
          );
        })}
      </StPhotos>
      <PhotoModal isPhotoOpen={isPhotoOpen} selectPhoto={selectPhoto} />
    </>
  );
};

export default PhotoViewer;

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
  margin: 0 15px;
`;
