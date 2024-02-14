import React, { useCallback, useEffect, useState } from 'react';
import Header from '../common/Header';
import Body from '../common/Body';
import { FiEye } from 'react-icons/fi';
import { LiaCommentDots } from 'react-icons/lia';
import { FcLike } from 'react-icons/fc';
import * as Style from './styles/Main.styles';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { plusView } from '../../redux/modules/PostReducer';
import { updatePostViewApi } from '../../apis/posts';

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const categoryItems = ['All', 'Travel', 'Eat', 'Relax']
  const [category, setCategory] = useState('All')


  const articles = useSelector((state) => state.post.posts);


  const handleArticleCardClick = (postId) => {
    // db 수정
    try {
      const updatePost = async (postId) => {
        await updatePostViewApi(postId);
      }
      updatePost(postId);
    } catch (e) {
      alert("문제가 발생했습니다. 잠시 후 다시 시도해주세요.")
      console.log(e)
    }

    //내부 데이터 수정
    dispatch(plusView(postId));
    navigate(`/article?pid=${postId}`);
  }



  const handleCategoryClick = (item) => {
    setCategory(item);
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
            {categoryItems.map((item, idx) => {
              return (
                <React.Fragment key={idx}>
                  <Style.StCatergoryItem
                    key={idx}
                    onClick={() => handleCategoryClick(item)}
                    $category={category}
                    $item={item}>
                    {item}
                  </Style.StCatergoryItem>
                  <Style.StLine />
                </React.Fragment>
              );
            })}
          </Style.StCategoryWrap>
        </Style.StCategoryBar>

        <Style.StArticlesWrap>
          {articles &&
            articles
              .filter((item) => {
                const lowerCategory = category.toLocaleLowerCase();
                return lowerCategory === 'all'
                  ? item
                  : item.category === lowerCategory;
              })
              .map((item) => {
                return (
                  <Style.StArticleCard
                    key={item.postId}
                    onClick={() => handleArticleCardClick(item.postId)}>
                    <Style.StArticleThumbImg
                      src={item.photo}
                      art={'게시글 썸네일 이미지'}
                    />
                    <Style.StProfileWrap>
                      <Style.StProfileImge></Style.StProfileImge>
                      <div>
                        <Style.StNickname>{item.userNickname}</Style.StNickname>
                        <Style.StCreatedDate>
                          {item.created_at}
                        </Style.StCreatedDate>
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
                          <span>{}</span>
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
                );
              })}
        </Style.StArticlesWrap>
      </Body>
    </Style.StMainBackground>
  );
};

export default Main;
