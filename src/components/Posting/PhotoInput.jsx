import { MdAddPhotoAlternate } from 'react-icons/md';
import styled from 'styled-components';
import { useRef } from 'react';
const PhotoInput = ({ setPhotos, photos, setPreviewPhotos }) => {
  const fileInput = useRef(null);

  const handleButtonClick = () => {
    fileInput.current.click();
  };

  const handlePreviewPhotos = (photos) => {
    photos.forEach((photos) => {
      const reader = new FileReader(photos);
      reader.readAsDataURL(photos.url);
      reader.onloadend = () => {
        setPreviewPhotos((prev) => [...prev, { url: reader.result }]);
      };
    });
  };

  const handleChange = async (e) => {
    const newPhotos = Array.from(e.target.files).map((file, index) => ({
      id: index,
      url: file
    }));
    await setPhotos(newPhotos);
    handlePreviewPhotos(newPhotos);
  };

  return (
    <div>
      <FileInput
        type='file'
        accept='.png, .jpg, .jpeg'
        ref={fileInput}
        multiple
        onChange={handleChange}></FileInput>
      <MdAddPhotoAlternate size={35} onClick={handleButtonClick} />
    </div>
  );
};

export default PhotoInput;

export const FileInput = styled.input`
  display: none;
`;
