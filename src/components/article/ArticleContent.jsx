import {
  StArticleHeaderWrapper,
  StArticleContent,
  StArticleContentBottom,
  StArticleHeart
} from './Styles/Article.style';
import { FaHeart } from 'react-icons/fa';
import { IoChatboxOutline } from 'react-icons/io5';

const ArticleContent = ({ content, likes, comments }) => {
  return (
    <StArticleHeaderWrapper>
      <div
        style={{ border: '1px solid black', width: '500px', height: '250px' }}>
        사진
      </div>
      <StArticleContent>{content}</StArticleContent>
      <StArticleContentBottom>
        <div>
          <IoChatboxOutline />
          <span>{comments.length}</span>
        </div>
        <StArticleHeart>
          <FaHeart />
          <span>{likes}</span>
        </StArticleHeart>
      </StArticleContentBottom>
    </StArticleHeaderWrapper>
  );
};

export default ArticleContent;
