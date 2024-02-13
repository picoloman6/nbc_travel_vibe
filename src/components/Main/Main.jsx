import React from 'react';
import titleBackgroundImg from '../assets/title_background.png';
import colors from '../../constants/colors';
import Header from '../common/Header';
import Body from '../common/Body';
import { FiEye } from 'react-icons/fi';
import { LiaCommentDots } from 'react-icons/lia';
import { FcLike } from 'react-icons/fc';
import * as Style from './styles/Main.styles';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  const handleArticleCardClick = () => {
    navigate('/article?pid=1NXMuOqEGDwZJ0MWkPkg');
  };

  return (
    <Style.StMainBackground>
      <Header />
      <Body>
        <Style.StTitleBackgroundImgDiv>
          <Style.StTitle>Travel Vibe</Style.StTitle>
        </Style.StTitleBackgroundImgDiv>
        <Style.StCategoryBar>
          <Style.StCategoryWrap>
            <Style.StCatergoryItem style={{ color: colors.mainBlue }}>
              All
            </Style.StCatergoryItem>
            <Style.StLine />
            <Style.StCatergoryItem>Travel</Style.StCatergoryItem>
            <Style.StLine />
            <Style.StCatergoryItem>Eat</Style.StCatergoryItem>
            <Style.StLine />
            <Style.StCatergoryItem>Relax</Style.StCatergoryItem>
          </Style.StCategoryWrap>
        </Style.StCategoryBar>

        <Style.StArticlesWrap>
          {/* 게시글 정보들 받아와서 뿌리기 */}
          {/* 클릭시 url에 id 같이 넘기기 */}
          <Style.StArticleCard onClick={handleArticleCardClick}>
            <Style.StArticleThumbImg
              src={titleBackgroundImg}
              art={'게시글 썸네일 이미지'}
            />
            <Style.StProfileWrap>
              <Style.StProfileImge></Style.StProfileImge>
              <div>
                <Style.StNickname>르탄이</Style.StNickname>
                <Style.StCreatedDate>2024. 03. 38.</Style.StCreatedDate>
              </div>
            </Style.StProfileWrap>
            <Style.StArticleContentInfoWrap>
              <Style.StArticleTitle>파스타를 먹었습니다</Style.StArticleTitle>
              <Style.StArticleContentTxt>
                파스타의 한 종류입니다. 이처럼 파스타는 형태에 따라 약 350가지가
                넘는 다양한 종류가 있습니다. 원료는 듀럼밀 세몰리나로 동일하지만
                용도 및 이탈리
              </Style.StArticleContentTxt>
            </Style.StArticleContentInfoWrap>
            <hr style={{ margin: '0 auto', width: '93%' }}></hr>
            <Style.StContentStats>
              <div style={{ display: 'flex' }}>
                <Style.StIconsStatsWrap>
                  <Style.StIconWrap>
                    <FiEye />
                  </Style.StIconWrap>{' '}
                  <span>0</span>
                </Style.StIconsStatsWrap>
                <Style.StIconsStatsWrap>
                  <Style.StIconWrap>
                    <LiaCommentDots />
                  </Style.StIconWrap>{' '}
                  <span>0</span>
                </Style.StIconsStatsWrap>
              </div>
              <Style.StIconsStatsWrap>
                <Style.StIconWrap>
                  <FcLike />
                </Style.StIconWrap>{' '}
                <span>0</span>
              </Style.StIconsStatsWrap>
            </Style.StContentStats>
          </Style.StArticleCard>
        </Style.StArticlesWrap>
      </Body>
    </Style.StMainBackground>
  );
};

export default Main;
