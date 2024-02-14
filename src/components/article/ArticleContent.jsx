import {
  StArticleHeaderWrapper,
  StArticleContent,
  StArticleContentBottom,
  StArticleHeart,
  StArticlePhotoWrapper,
  StArticlePhoto
} from './Styles/Article.style';
import { FaHeart } from 'react-icons/fa';
import { IoChatboxOutline } from 'react-icons/io5';

const ArticleContent = ({
  content,
  commentsLen,
  likes,
  photos,
  updateLikes
}) => {
  return (
    <StArticleHeaderWrapper>
      <StArticlePhotoWrapper>
        {photos &&
          photos.map((v, i) => (
            <StArticlePhoto key={i} src={v} alt='no image' />
          ))}
      </StArticlePhotoWrapper>
      <StArticleContent>{content}</StArticleContent>
      <StArticleContentBottom>
        <div>
          <IoChatboxOutline />
          <span>{commentsLen}</span>
        </div>
        <StArticleHeart onClick={updateLikes}>
          <FaHeart />
          <span>{likes}</span>
        </StArticleHeart>
      </StArticleContentBottom>
    </StArticleHeaderWrapper>
  );
};

export default ArticleContent;
