import styled from 'styled-components';
import size from '../../../constants/size';
import colors from '../../../constants/colors';

export const StMyArticleContainer = styled.div`
  width: ${size.wrapperWidth};
  min-height: ${size.bodyMinHeight};
  min-width: 800px;
  padding: 20px;
  margin: 0 auto;
`;

export const StTitle = styled.div`
  font-size: 48px;
  font-weight: bold;
  height: 70px;
  text-align: center;
  line-height: 100%;
  color: ${colors.mainBlue};
  width: fit-content;
  padding: 80px 0 50px 100px;
`;

export const StContent = styled.div`
  width: 90%;
  margin: 50px auto;
  padding-bottom: 20px;
`;

export const StContentTitle = styled.div`
  color: black;
  font-size: 30px;
  margin: 20px 0 15px 0;
`;

export const StContentWrap = styled.div`
  border-top: 1px solid ${colors.subText};
  border-bottom: 1px solid ${colors.subText};
  margin-bottom: 20px;
  display: flex;
  height: 250px;

  &:hover {
    cursor: pointer;
  }
`;

export const StThumbImg = styled.img`
  width: 300px;
  height: 100%;
  object-fit: cover;
  padding: 15px;
`;

export const StContentTxt = styled.div`
  font-size: 18px;
  color: ${colors.subText};
  margin-right: 10px;
  line-height: 30px;
  min-height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

export const StContentStatsWrap = styled.div`
  padding: 0 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StContentCategoryDateWrap = styled.div`
  margin-bottom: 20px;
  display: flex;
  width: 90%;
  gap: 10px;
  color: ${colors.subText};
`;

export const StLine = styled.div`
  width: 1px;
  border: 1px solid ${colors.subText};
  transform: scale(0.9);
  opacity: 0.5;
`;
