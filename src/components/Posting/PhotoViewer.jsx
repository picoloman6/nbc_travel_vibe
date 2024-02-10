import styled from 'styled-components';

const PhotoViewer = ({ photos }) => {
  return (
    <StPhotos>
      {photos.map((photo, index) => {
        return <PhotoImage key={index} src={photo} />;
      })}
    </StPhotos>
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
