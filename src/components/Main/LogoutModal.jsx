import React from 'react'
import { StBackground, StContainer } from './styles/LogoutModal.style'
import { StCloseBtn, StLogoName, StLoginTitle, StLoginBtn } from './styles/LogoutModal.style'
import styled from 'styled-components'
import colors from '../../constants/colors'

export const StLogoutContainer = styled(StContainer)`
    height: 20%;
`

export const StLogoutTitle = styled(StLoginTitle)`
    font-size: 16px;
    margin: 10px;
    font-weight: normal;
`

export const StButtonWrap = styled.div`
    display: flex;
    gap: 10px;
    width: 60%;
`

export const StLogtoutButton = styled(StLoginBtn)`
    margin: 0;
`

export const StCancelButton = styled(StLogtoutButton)`
    background-color: ${colors.subText};
`

const LogoutModal = ({ isLogoutModalOpen, setIsLogoutModalOpen, setIsLoggedIn, isLoggedIn }) => {

    const handleCloseButtonClick = () => {
        setIsLogoutModalOpen(!isLogoutModalOpen)
    }

    const handleLogoutButtonClick = () => {
        setIsLogoutModalOpen(!isLogoutModalOpen)
        setIsLoggedIn(!isLoggedIn)
    }

    return (

        <StBackground $isLogoutModalOpen={isLogoutModalOpen}>
            <StLogoutContainer>
                <StLogoName style={{ margin: "0" }}>Travel Vibe</StLogoName>
                <StCloseBtn onClick={handleCloseButtonClick} style={{ marginTop: "5px", lineHeight: "20%" }}>x</StCloseBtn>
                <StLogoutTitle>로그아웃하시겠습니까?</StLogoutTitle>
                <StButtonWrap>
                    <StCancelButton onClick={handleCloseButtonClick}>취소</StCancelButton>
                    <StLogtoutButton onClick={handleLogoutButtonClick}>로그아웃</StLogtoutButton>
                </StButtonWrap>


            </StLogoutContainer>
        </StBackground>
    )
}

export default LogoutModal