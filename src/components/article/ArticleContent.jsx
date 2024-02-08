import {
  StArticleHeaderWrapper,
  StArticleContent,
  StArticleHeart
} from './Styles/Article.style';
import { FaHeart } from 'react-icons/fa';

const ArticleContent = () => {
  return (
    <StArticleHeaderWrapper>
      <div
        style={{ border: '1px solid black', width: '500px', height: '250px' }}>
        사진
      </div>
      <StArticleContent>
        내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
        내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
      </StArticleContent>
      <StArticleHeart>
        <FaHeart />
        <span>10</span>
      </StArticleHeart>
    </StArticleHeaderWrapper>
  );
};

export default ArticleContent;
