import React from 'react'
import Body from '../common/Body'
import Header from '../common/Header'
import styled from 'styled-components'
import size from '../../constants/size'
import colors from '../../constants/colors'
import thumbImg from '../assets/title_background.png'

const StMyArticleContainer = styled.div`
    width: ${size.bodyWidth};
    min-height: ${size.bodyMinHeight};
    min-width: 800px;
    padding: 20px;
`

const StTitle = styled.div`
    font-size: 48px;
    font-weight: bold;
    height: 70px;
    text-align: center;
    line-height: 100%;
    color: ${colors.mainBlue};
    width: fit-content;
`

const StContent = styled.div`
    width: 90%;
    margin: 0 auto;
`

const StContentTitle = styled.div`
    color: black;
    font-size: 30px;
    margin: 20px 0 15px 0;
`

const StContentWrap = styled.div`
    border-top: 1px solid ${colors.subText};
    display: flex;
    height: 250px;
    
`

const StThumbImg = styled.img`
    width: 300px;
    height: 100%;
    object-fit: cover;
    padding: 15px;
`

const StContentTxt = styled.div`
    font-size: 18px;
    line-height: 30px;
    min-height: 100px;
    overflow: hidden; // 벗어나면 안보이게
  text-overflow: ellipsis; // ...으로 표시하겠다
  word-break: break-word; 
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`

const StContentStatsWrap = styled.div`
    padding: 0 15px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const StContentCategoryDateWrap = styled.div`
    margin-bottom: 20px;
    display: flex;
    width: 90%;
    gap: 10px;
    color: ${colors.subText};
`

const StLine = styled.div`
    width: 1px;
    border: 1px solid ${colors.subText};
    transform: scale(0.9);
    opacity: 0.5;
`

const MyArticle = () => {
    return (
        <StMyArticleContainer>
            <Header></Header>
            <Body>
                <StTitle>글 관리</StTitle>
                <StContent>
                    <StContentWrap>
                        <StThumbImg src={thumbImg}></StThumbImg>
                        <StContentStatsWrap>
                            <div>
                                <StContentTitle>치즈 오븐 스파게티</StContentTitle>
                                <StContentTxt>파스타의 한 종류입니다. 이처럼 파스타는 이처럼 파스타는 이처럼 파스타는 이처럼 파스타는 이처럼 파스타는 이처럼 파스타는 이처럼 파스타는 이처럼 파스타는 이처럼 파스타는 형태에 따라 약 350가지가 넘는 다양한 종류가 있습니다 있습니다 있습니다 있습니다 있습니다 있습니다 있 있습니다 있습니다 있습니다 있습니다 있 있습니다 있습니다 있습니다 있습니다 있 있습니다 있습니다 있습니다 있습니다 있습니다 있 있습니다 있습니다 있습니다 있습니다 있습니다 있습니다 있습니다 있습니다</StContentTxt>
                            </div>
                            <StContentCategoryDateWrap>
                                <span>Eat</span>
                                <StLine></StLine>
                                <span>2032.23.93</span>
                            </StContentCategoryDateWrap>
                        </StContentStatsWrap>
                    </StContentWrap>
                    <StContentWrap>
                        <StThumbImg src={thumbImg}></StThumbImg>
                        <StContentStatsWrap>
                            <div>
                                <StContentTitle>치즈 오븐 스파게티</StContentTitle>
                                <StContentTxt>파스타의 한 종류입니다. 이처럼 파스타는 이처럼 파스타는 이처럼 파스타는 이처럼 파스타는 이처럼 파스타는 이처럼 파스타는 이처럼 파스타는 이처럼 파스타는 이처럼 파스타는 형태에 따라 약 350가지가 넘는 다양한 종류가 있습니다. 원료는 듀럼밀 세몰리나로 동일하지만 용도 및 이탈리아인들의 ...</StContentTxt>
                            </div>
                            <StContentCategoryDateWrap>
                                <span>Eat</span>
                                <StLine></StLine>
                                <span>2032.23.93</span>
                            </StContentCategoryDateWrap>
                        </StContentStatsWrap>
                    </StContentWrap>
                    <StContentWrap>
                        <StThumbImg src={thumbImg}></StThumbImg>
                        <StContentStatsWrap>
                            <div>
                                <StContentTitle>치즈 오븐 스파게티</StContentTitle>
                                <StContentTxt>파스타의 한 종류입니다. 이처럼 파스타는 이처럼 파스타는 이처럼 파스타는 이처럼 파스타는 이처럼 파스타는 이처럼 파스타는 이처럼 파스타는 이처럼 파스타는 이처럼 파스타는 형태에 따라 약 350가지가 넘는 다양한 종류가 있습니다. 원료는 듀럼밀 세몰리나로 동일하지만 용도 및 이탈리아인들의 ...</StContentTxt>
                            </div>
                            <StContentCategoryDateWrap>
                                <span>Eat</span>
                                <StLine></StLine>
                                <span>2032.23.93</span>
                            </StContentCategoryDateWrap>
                        </StContentStatsWrap>
                    </StContentWrap>
                    <StContentWrap>
                        <StThumbImg src={thumbImg}></StThumbImg>
                        <StContentStatsWrap>
                            <div>
                                <StContentTitle>치즈 오븐 스파게티</StContentTitle>
                                <StContentTxt>파스타의 한 종류입니다. 이처럼 파스타는 이처럼 파스타는 이처럼 파스타는 이처럼 파스타는 이처럼 파스타는 이처럼 파스타는 이처럼 파스타는 이처럼 파스타는 이처럼 파스타는 형태에 따라 약 350가지가 넘는 다양한 종류가 있습니다. 원료는 듀럼밀 세몰리나로 동일하지만 용도 및 이탈리아인들의 ...</StContentTxt>
                            </div>
                            <StContentCategoryDateWrap>
                                <span>Eat</span>
                                <StLine></StLine>
                                <span>2032.23.93</span>
                            </StContentCategoryDateWrap>
                        </StContentStatsWrap>
                    </StContentWrap>

                </StContent>
            </Body>
        </StMyArticleContainer>
    )
}

export default MyArticle