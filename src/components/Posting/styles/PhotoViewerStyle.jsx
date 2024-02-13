import styled from 'styled-components';

export const StImageWrap = styled.div`
  position: relative; //이거 주고 자식한테 absolute 주면 따라감
`;

export const StDeleteButton = styled.button`
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

export const StPhotoImage = styled.img`
  max-block-size: 150px;
`;
