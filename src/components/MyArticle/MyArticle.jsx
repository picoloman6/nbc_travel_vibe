import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Body from '../common/Body';
import Header from '../common/Header';
import {
  StMyArticleContainer,
  StTitle,
  StContent,
  StContentWrap,
  StThumbImg,
  StContentStatsWrap,
  StContentTitle,
  StContentTxt,
  StContentCategoryDateWrap,
  StLine
} from '../MyArticle/styles/MyArticle.style';
import { dateConvertor } from '../../Shared/date';

const MyArticle = () => {
  const Articles = useSelector((state) => {
    return state.post.posts;
  });
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const userId = params.get('uid');

  const handleConentClick = (id) => {
    navigate(`/article?pid=${id}`);
  };

  return (
    <StMyArticleContainer>
      <Header></Header>
      <Body>
        <StTitle>작성글 관리</StTitle>
        <StContent>
          {Articles.filter((item) => item.userId === userId).map((item) => {
            return (
              <StContentWrap
                key={item.postId}
                onClick={() => handleConentClick(item.postId)}>
                <StThumbImg src={item.photo} alt={`${item.title}`} />
                <StContentStatsWrap>
                  <div>
                    <StContentTitle>{item.title}</StContentTitle>
                    <StContentTxt>{item.content}</StContentTxt>
                  </div>
                  <StContentCategoryDateWrap>
                    <span>{item.category}</span>
                    <StLine></StLine>
                    <span>{dateConvertor(item.createdAt)}</span>
                  </StContentCategoryDateWrap>
                </StContentStatsWrap>
              </StContentWrap>
            );
          })}
        </StContent>
      </Body>
    </StMyArticleContainer>
  );
};

export default MyArticle;
