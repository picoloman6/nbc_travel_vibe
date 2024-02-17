import styled from 'styled-components';

import titleBackgroundImg from '../../assets/title_background.png';
import colors from '../../../constants/colors';
import size from '../../../constants/size';

export const StMainBackground = styled.div`
  width: ${size.wrapperWidth};
  min-width: 800px;
  min-height: ${size.bodyMinHeight};
  background: ${colors.subBlue};
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  margin: 0 auto;
`;

export const StMainWrap = styled.div`
  width: 95%;
  min-height: 900px;
  background-color: white;
  box-shadow: 4px 4px 15.1px 3px rgba(0, 0, 0, 0.1);
`;

export const StTitleBackgroundImgDiv = styled.div`
  width: 100%;
  height: 238px;
  background-image: url(${titleBackgroundImg});
  background-size: cover;
  background-position: center;
  position: relative;
`;

export const StTitle = styled.span`
  color: white;
  font-weight: 600;
  font-style: italic;
  font-size: 70px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const StCategoryBar = styled.div`
  width: 100%;
  height: 87px;
  background-color: ${colors.backgroundLightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
`;
export const StCategoryWrap = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const StCatergoryItem = styled.div`
  font-size: 28px;
  color: ${(props) =>
    props.$category === props.$item ? colors.mainBlue : colors.subText};
  letter-spacing: 1px;

  &:hover {
    cursor: pointer;
  }
`;

export const StLine = styled.div`
  height: 25px;
  border: 1px solid ${colors.subText};
`;

export const StArticlesWrap = styled.ul`
  width: 90%;
  gap: 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 0;
`;

export const StArticleCard = styled.li`
  margin-bottom: 40px;
  list-style: none;
  width: 400px;
  min-height: 392px;
  border: 1px solid ${colors.subText};
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    cursor: pointer;
    transform: scale(1.01);
    transition: all 0.2s;
  }
`;

export const StArticleThumbImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 226px;
  border-bottom: 1px solid ${colors.subText};
`;

export const StProfileWrap = styled.div`
  display: flex;
  padding: 10px 15px;
`;

export const StProfileImge = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 40px;
  background-color: gray; //임시
  margin-right: 10px;
`;

export const StArticleContentInfoWrap = styled.div`
  padding: 1px 15px;
`;

export const StArticleContentTxt = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  line-height: 20px;
  font-size: 14px;
  color: ${colors.subText};
  margin-bottom: 5px;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const StContentStats = styled.div`
  height: 30px;
  display: flex;
  justify-content: space-between;
  padding: 5px 15px;
`;

export const StIconsStatsWrap = styled.div`
  margin-right: 10px;
  font-size: 12px;
  color: gray;
  display: flex;
  align-items: center;
  margin-right: 10px;
  font-size: 12px;
`;

export const StIconWrap = styled.div`
  font-size: 16px;
  margin: 2px 5px 0 0;
`;

export const StCreatedDate = styled.span`
  display: block;
  color: grey;
  font-size: 14px;
`;

export const StArticleTitle = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const StNickname = styled.span`
  font-size: 15px;
  display: inline-block;
  margin-bottom: 3px;
`;
