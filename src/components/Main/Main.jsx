import React, { useCallback, useEffect, useState } from 'react';
import Header from '../common/Header';
import Body from '../common/Body';
import { FiEye } from 'react-icons/fi';
import { LiaCommentDots } from 'react-icons/lia';
import { FcLike } from 'react-icons/fc';
import * as Style from './styles/Main.styles';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCommentsApi } from '../../apis/comments';

const Main = () => {
  const navigate = useNavigate();
  const categoryItems = ['All', 'Travel', 'Eat', 'Relax']
  const [category, setCategory] = useState('All')
  const [isRendered, serIsRendered] = useState(false)

  const articles = useSelector((state) => state.post.posts)

  const [comments, setComments] = useState([]);

  //postId를 어떻게 가져와야할까?



  const findCommentNum = useCallback(async (postId) => {
    const comments = await getCommentsApi();
    setComments(comments);
    return comments.length;
  }, []);

  console.log("🚀 ~ Main ~ comments:", comments)

  // const count = findCommentNum(item.postId);

  const handleArticleCardClick = (postId) => {
    navigate(`/article?pid=${postId}`);
  }

  const handleCategoryClick = (item) => {
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
                    src={item.photos[0]}
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
                        <span>{item.views}</span>
                      </Style.StIconsStatsWrap>
                      <Style.StIconsStatsWrap>
                        <Style.StIconWrap>
                          <LiaCommentDots />
                        </Style.StIconWrap>{' '}
                        {/* 댓글 수 */}
                        <span>{ }</span>
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
