import styleC from 'styled-components';
import {Link} from 'react-router-dom';

export const UsersListCard = styleC.div
`
    padding: 2rem;
    position: relative;
    height: 160px;
    width: 400px;
    // background: ${({bgColor}) => bgColor};
    background: #FFB174;
    border-radius: 1.5rem;
    margin: 2rem;
`

export const CardSendMessageLink = styleC(Link)
`
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 1rem;
    margin-top: 1rem;
    font-size: 3rem;
    outline: none;
    border:none;
    background: transparent;
    cursor:pointer;
    z-index: 10;

    
`

export const CardImgContainer = styleC(Link)
`
    width: 30%;
    position: absolute;
    bottom: 0;
    left: 0;
    margin-left: -2rem;
    margin-bottom: -3rem;
`
export const Img = styleC.img
`
    width: 100%;
`

export const CardContentContainer = styleC.div
`
    width: 75%;
    height: 50%;
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
`

export const CardUserName = styleC.h2
`
    font-size: 3.5rem;
    font-weight: 900;
    line-height: 0.9;
    opacity: 0.8;
    // color: ${({titleColor}) => titleColor}
    color: #FFF4E3;
    width: 60%;

    @media screen and (max-width: 411px){
        font-size: 3rem;
    }

    @media screen and (max-width: 360px){
        font-size: 2.8rem;
    }

    @media screen and (max-width: 320px){
        font-size: 2.4rem;
    }
`
export const CardFooter = styleC.div
`
    display: flex;
    flex-wrap: wrap;
    // color: ${({textColor}) => textColor};
    color: #5D5D5A;
    font-weight: 600;
    position: absolute;
    bottom:0;
    right: 0;
    margin: 1rem;
    width: 70%;
`
export const CardDiv = styleC.div
`
    display: flex;
    margin-right: 1rem;
    margin-bottom: 0.3rem;
    
`
export const CardIcon = styleC.div
`
    font-size: 1.2rem;
    margin-right: 0.3rem;
`
export const CardContent = styleC.div
`
    font-size: 1.2rem;

    @media screen and (max-width: 320px){
        font-size: 1rem;
    }
`