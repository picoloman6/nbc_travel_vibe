import styled from 'styled-components';

export const StArticleHeaderWrapper = styled.div`
  padding: 30px 40px;
`;

export const StArticleHeaderTitle = styled.h1`
  margin: 20px 0;
  font-size: 48px;
  font-weight: bold;
`;

export const StArticleHeaderBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StArticleContent = styled.p`
  font-size: 32px;
  line-height: 50px;
  margin: 35px 0;
`;

export const StArticleHeart = styled.div`
  display: flex;
  align-items: center;

  font-size: 20px;

  > svg {
    margin-right: 8px;
    color: red;
  }
`;
