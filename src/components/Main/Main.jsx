import React from 'react';
import colors from '../../constants/colors';
import Header from '../common/Header';
import Body from '../common/Body';
import { FiEye } from 'react-icons/fi';
import { LiaCommentDots } from 'react-icons/lia';
import { FcLike } from 'react-icons/fc';
import * as Style from './styles/Main.styles';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Main = () => {
  const navigate = useNavigate();
  const articles = useSelector((state) => {
    return state.post.posts
  })

  const comments = useSelector((state) => {
    return state.comment.comments
  })

  const handleArticleCardClick = (id) => {
    navigate(`/article?pid=${id}`);
  };

  const findCommentNum = () => {
    comments.find((item) => {
      return item.postId === articles.postId
    })
    return comments.length;
  }

  const commentNum = findCommentNum();

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
          {articles.map((item) => {
            return (
              <Style.StArticleCard key={item.postId} onClick={() => handleArticleCardClick(item.postId)}>
                <Style.StArticleThumbImg
                  src={item.photos[0].url}
                  art={'게시글 썸네일 이미지'}
                />
                <Style.StProfileWrap>
                  <Style.StProfileImge></Style.StProfileImge>
                  <div>
                    <Style.StNickname>{item.userNickname}</Style.StNickname>
                    <Style.StCreatedDate>{item.created_at}</Style.StCreatedDate>
                  </div>
                </Style.StProfileWrap>
                <Style.StArticleContentInfoWrap>
                  <Style.StArticleTitle>{item.title}</Style.StArticleTitle>
                  <Style.StArticleContentTxt>
                    {item.content}
                  </Style.StArticleContentTxt>
                </Style.StArticleContentInfoWrap>
                <hr style={{ margin: '0 auto', width: '93%' }}></hr>
                <Style.StContentStats>
                  <div style={{ display: 'flex' }}>
                    <Style.StIconsStatsWrap>
                      <Style.StIconWrap>
                        <FiEye />
                      </Style.StIconWrap>{' '}
                      <span></span>
                    </Style.StIconsStatsWrap>
                    <Style.StIconsStatsWrap>
                      <Style.StIconWrap>
                        <LiaCommentDots />
                      </Style.StIconWrap>{' '}
                      <span>{commentNum}</span>
                    </Style.StIconsStatsWrap>
                  </div>
                  <Style.StIconsStatsWrap>
                    <Style.StIconWrap>
                      <FcLike />
                    </Style.StIconWrap>{' '}
                    <span>{item.likes}</span>
                  </Style.StIconsStatsWrap>
                </Style.StContentStats>
              </Style.StArticleCard>
            )
          })}

        </Style.StArticlesWrap>
      </Body>
    </Style.StMainBackground>
  );
};

export default Main;
