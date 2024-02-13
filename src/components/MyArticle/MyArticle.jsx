import React from 'react'
import Body from '../common/Body'
import Header from '../common/Header'
import thumbImg from '../assets/title_background.png'
import {
    StMyArticleContainer, StTitle, StContent, StContentWrap,
    StThumbImg, StContentStatsWrap, StContentTitle, StContentTxt, StContentCategoryDateWrap,
    StLine
} from '../MyArticle/styles/MyArticle.style'
import { useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'



const MyArticle = () => {
    const Articles = useSelector((state) => {
        return state.post.posts;
    })
    const [params] = useSearchParams();

    const userId = params.get('uid')
    console.log("🚀 ~ MyArticle ~ userId:", userId)

    return (
        <StMyArticleContainer>
            <Header></Header>
            <Body>
                <StTitle>작성글 관리</StTitle>
                <StContent>
                    {Articles.filter((item) => item.userId === userId * 1) //userId 임시값이 숫자라 임시로숫자로 변경
                        .map((item) => {
                            return (
                                <StContentWrap>
                                    <StThumbImg src={thumbImg}></StThumbImg>
                                    <StContentStatsWrap>
                                        <div>
                                            <StContentTitle>{item.title}</StContentTitle>
                                            <StContentTxt>{item.content}</StContentTxt>
                                        </div>
                                        <StContentCategoryDateWrap>
                                            <span>{item.category}</span>
                                            <StLine></StLine>
                                            <span>{item.created_at}</span>
                                        </StContentCategoryDateWrap>
                                    </StContentStatsWrap>
                                </StContentWrap>
                            )
                        })}

                </StContent>
            </Body>
        </StMyArticleContainer>
    )
}

export default MyArticle