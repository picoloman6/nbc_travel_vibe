import React, { useState } from 'react';
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

  const findCommentNum = (id) => {
    const commentCount = comments.filter((item) => {
      return item.postId === id
    })
    return commentCount.length;
  }

  const categoryItems = ['All', 'Travel', 'Eat', 'Relax']

  // travel을 누르면 travel 카테고리 필터해서 렌더링
  const [category, setCategory] = useState('All')

  const handleCategoryClick = (item) => {
    //item에는 카테고리 가 들어있음
    setCategory(item)
  }

  return (
    <Style.StMainBackground>
      <Header />
      <Body>
        <Style.StTitleBackgroundImgDiv>
          <Style.StTitle>Travel Vibe</Style.StTitle>
        </Style.StTitleBackgroundImgDiv>
        <Style.StCategoryBar>
          <Style.StCategoryWrap>
            {categoryItems.map((item, idx) => {
              return (
                <React.Fragment key={idx}>
                  <Style.StCatergoryItem key={idx} onClick={() => handleCategoryClick(item)} $category={category} $item={item}>
                    {item}
                  </Style.StCatergoryItem>
                  <Style.StLine />
                </React.Fragment>
              )
            })}
          </Style.StCategoryWrap>
        </Style.StCategoryBar>

        <Style.StArticlesWrap>
          {articles.filter((item) => {
            const lowerCategory = category.toLocaleLowerCase();
            return lowerCategory === 'all' ? item : item.category === lowerCategory;
          })
            .map((item) => {
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
                        {/* 조회수 */}
                        <span>{item.commentCount}</span>
                      </Style.StIconsStatsWrap>
                      <Style.StIconsStatsWrap>
                        <Style.StIconWrap>
                          <LiaCommentDots />
                        </Style.StIconWrap>{' '}
                        {/* 댓글 수 */}
                        <span>{findCommentNum(item.postId)}</span>
                      </Style.StIconsStatsWrap>
                    </div>
                    <Style.StIconsStatsWrap>
                      <Style.StIconWrap>
                        <FcLike />
                      </Style.StIconWrap>{' '}
                      {/* 좋아요 수 */}
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
