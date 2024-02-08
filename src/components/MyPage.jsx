import React from 'react'
import styled from 'styled-components'

export const MyPage = () => {
    return (
        <>
            <Container>
                <StTitle>프로필 설정</StTitle>
                <StMyPageWrapper>
                    <StAvatar>
                    </StAvatar>
                    <StUserInfoWrapper>
                        <StEmail>
                            <label>이메일</label>
                            <div>이메일 보여주는 박스</div>
                        </StEmail>
                        <StNickName>
                            <label>닉네임</label>
                            <input placeholder="닉네임" type='text'></input>
                        </StNickName>
                        <StCurrentPw>
                            <label>현재 비밀번호</label>
                            <input type='password'></input>
                        </StCurrentPw>
                        <StNewPw>
                            <label>새로운 비밀번호</label>
                            <input type='password'></input>
                        </StNewPw>
                    </StUserInfoWrapper>
                </StMyPageWrapper>
                <StBtnsWrapper>
                    <button>완료</button>
                    <button>삭제</button>
                </StBtnsWrapper>
            </Container>


        </>
    )
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 60px
`;


export const StTitle = styled.h1`
font-weight: 600;
font-size: 48px;
color: #2673DB;
`
export const StMyPageWrapper = styled.div`
display: flex;
flex-direction: row;

border: 1px solid black;
padding: 60px;
gap: 60px;
`
export const StAvatar = styled.div`
width: 300px;
height: 300px;
background-color: green;
`

export const StUserInfoWrapper = styled.div`
 display: flex;
 flex-direction: column;
 background-color: yellow;
 width: 500px; 
 gap: 40px;
 & label {
    font-weight: 400;
    font-size: 24px;
 }
 & input {
    width: 100%; 
    height: 48px;
    background: #FFFFFF;
    border: 1px solid #838383;
    box-sizing: border-box; 
  }
& input ::placeholder {
    font-size: 24px !important;
color: #838383;
}
`
export const StEmail = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
 & div {
width: 100%;
height: 48px;
box-sizing: border-box;
background: #F2F2F2;

font-weight: 600;
font-size: 24px;
color: #838383;
 }
`
export const StNickName = styled.div`
    display: flex;
flex-direction: column;
gap: 20px;
`
export const StCurrentPw = styled.div`
    display: flex;
flex-direction: column;
gap: 20px;
`
export const StNewPw = styled.div`
    display: flex;
flex-direction: column;
gap: 20px;
`
export const StBtnsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`




