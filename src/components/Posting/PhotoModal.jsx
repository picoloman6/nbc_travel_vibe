import styled from 'styled-components';

const PhotoModal = ({ selectPhoto, isPhotoOpen }) => {
  return <ModalContainer $isPhotoOpen={isPhotoOpen}>PhotoModal</ModalContainer>;
};

export default PhotoModal;

const ModalContainer = styled.div`
  display: ${(props) => (props.$isPhotoOpen ? 'block' : 'none')};
`;
