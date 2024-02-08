import React from 'react'
import styled from 'styled-components'
import titleBackgroundImg from '../../shared/title_background.png'

export const StMainBackground = styled.div`
width: 100%;
min-height: 100vh;
background: #CDDDF5;
display: flex;
justify-content: center;
align-items: center;
padding: 10px;
box-sizing: border-box;
`

export const StMainWrap = styled.div`
  width: 95%;
  min-height: 900px; 
  background-color: white;
  box-shadow: 4px 4px 15.1px 3px rgba(0, 0, 0, 0.1);
  
`

export const StTitleBackgroundImg = styled.div`
  width: 100%;
  height: 238px;
  background-image: url(${titleBackgroundImg});
  background-size: cover;
  background-position: center;
  position: relative;
`

export const StTitle = styled.span`
  color: white;
  font-weight: 600;
  font-style: italic;
  font-size: 70px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const StCategoryBar = styled.div`
  width: 100%;
  height: 87px;
  background-color: #F2F2F2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
`
export const StCategoryWrap = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
`

export const StCatergoryItem = styled.div`
  font-size: 28px;
  color: #838383; //active 색 #2673DB
  letter-spacing: 1px;

  &:hover {
    cursor: pointer;
  }
`

export const StLine = styled.div`
  height: 25px;
  border: 1px solid #bdbdbd;

`

export const StContentsWrap = styled.div`
  width: 80%;
  background-color: violet;
  margin: 0 auto;
`

export const StArticlesWrap = styled.ul`
  justify-content: flex-start;
  gap: 50px;
  display: flex;
  /* justify-content: center; */
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 0;
  background-color: beige;
`

export const StArticleCard = styled.li`
  margin-bottom: 40px;
  list-style: none;
  width: 400px;
  min-height: 400px;
  border: 1px solid black;
`

export const ArticleThumbImg = styled.img`
  width: 100%;
  height: 226px;
`

export const StProfileWrap = styled.div`
  display: flex;
  width: 95%;
  margin: 0 auto;
  padding: 5px;
`

export const StProfileImge = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: gray; //임시
  margin-right: 10px;
`

const StArticleContentInfoWrap = styled.div`
  padding: 10px 15px;
  
`

const StArticleContentTxt = styled.p`
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
    
   display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
`

const StContentStats = styled.div`
  margin: 0 auto;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  padding: 5px 15px; 
`

const IconWrap = styled.div`
  margin-right: 10px;
  font-size: 12px;
  color: gray;
`

const Main = () => {
  return (
    <div>
      <StMainBackground>
        <StMainWrap>
          <StTitleBackgroundImg>
            <StTitle>Travel Vibe</StTitle>
          </StTitleBackgroundImg>
          <StCategoryBar>
            <StCategoryWrap>
              <StCatergoryItem style={{ color: "#2673DB" }}>All</StCatergoryItem>
              <StLine />
              <StCatergoryItem>Travel</StCatergoryItem>
              <StLine />
              <StCatergoryItem>Eat</StCatergoryItem>
              <StLine />
              <StCatergoryItem>Relax</StCatergoryItem>
            </StCategoryWrap>
          </StCategoryBar>

          <StContentsWrap>
            <StArticlesWrap>
              <StArticleCard>
                <ArticleThumbImg art={"사진"} />
                <StProfileWrap>
                  <StProfileImge></StProfileImge>
                  <div style={{ margin: 0 }}>
                    <span style={{ margin: "0", height: "auto" }}>닉네임</span>
                    <span style={{ display: "block", color: "grey", fontSize: "14px" }}>날짜</span>
                  </div>
                </StProfileWrap>
                <StArticleContentInfoWrap>
                  <p style={{ margin: "0", marginBottom: "5px", fontWeight: "bold" }}>제목</p>
                  <StArticleContentTxt style={{ margin: 0, }}>내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용</StArticleContentTxt>
                </StArticleContentInfoWrap>
                <hr style={{ margin: "0 auto", width: "95%" }}></hr>
                <StContentStats>
                  <div style={{ display: "flex" }}>
                    <IconWrap>눈아이콘 <span>0</span></IconWrap>
                    <IconWrap>댓글아이콘 <span>0</span></IconWrap>
                  </div>
                  <IconWrap style={{}}>좋아요아이콘 <span>0</span></IconWrap>
                </StContentStats>
              </StArticleCard>

              <StArticleCard>
              </StArticleCard>

              <StArticleCard>
              </StArticleCard>

              <StArticleCard>
              </StArticleCard>


            </StArticlesWrap>
          </StContentsWrap>
        </StMainWrap>
      </StMainBackground>
    </div>
  )
}

export default Main