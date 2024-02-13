import { useRef } from 'react';
import { MdAddPhotoAlternate } from 'react-icons/md';
import styled from 'styled-components';

const PhotoInput = ({ setPhotos, photos }) => {
  const fileInput = useRef(null);

  const handleButtonClick = () => {
    fileInput.current.click();
  };

  // 1. 유사 객체 배열인 files를 배열로 변환하여 저장
  // 2. foreach로 순환중인 파일에 대해 FileReader객체 생성 (자바스크립트 내장객체) 이걸 쓰면 파일을 읽기위한 매서드를 쓸 수있음
  // 3. (readAsDataURL) 이게 파일리더의 매서드. 파일을 data Url 형식으로 읽어줌 읽었을땐 result로 반환됨 (접근할땐 reader.result)
  // 4. 파일 읽기가 끝나면 실행(onload). data url로 읽은 파일의 데이터를 state에 저장해줌
  // 5. 파일 데이터를 저장 (result)는 파일을 성공적으로 읽었을때 반환되는 데이터
  const handleChange = (e) => {
    const newFiles = Array.from(e.target.files);

    newFiles.forEach((file) => {
      const reader = new FileReader(file);
      reader.readAsDataURL(file);
      reader.onload = () => {
        setPhotos((prev) => [...prev, { url: reader.result }]);
      };
    });
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
