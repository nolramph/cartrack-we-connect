import styleC from 'styled-components';
import {Link} from 'react-router-dom';
 
export const UsersProfileContainer = styleC.div
`
    position:relative;
    padding-top: 3rem;
`

export const UsersProfileCard = styleC.div
`
    position: relative;
    width: 50%;
    height: 50%;
    margin: 5rem auto;
    background: #FFB174;
    border-radius: 1.5rem;

    @media screen and (max-width: 768px){
        width: 80%;
    }

    @media screen and (max-width: 320px){
        margin: 2rem auto;
    }
`

export const UsersProfileVector = styleC.div
`
    background: url('/images/top-vector.svg');
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    border-radius: 1.5rem 1.5rem 1.5rem 0;
    position: absolute;

    @media screen and (max-width: 411px){
        height: 30%;
        background-size: cover;
    }

    @media screen and (max-width: 320px){
        height: 27%;
        background-size: cover;
    }
`

export const UsersProfileImg = styleC.div
`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: -5rem auto 0;
    width: 110px;

   

    @media screen and (max-width: 320px){
        width: 90px;
    }
`

export const Img = styleC.img
`
    width: 100%;
`
export const UsersCloseIcon = styleC(Link)
`
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 1rem;
    margin-top: 1rem;
    font-size: 3rem;
    text-decoration: none;
    background: transparent;
    cursor:pointer;
    z-index: 10;
    color: #FFF4E3;
`
export const UsersProfileName = styleC.h1
`
    font-size: 3rem;
    font-weight: 900;
    opacity: 0.8;
    // color: ${({titleColor}) => titleColor}
    color: #FFF4E3;
    margin-bottom: 5rem;
    text-align: center;

    @media screen and (max-width: 540px){
        font-size: 2.5rem;
        margin-bottom: 7rem;
    }

    @media screen and (max-width: 411px){
        font-size: 2.5rem;
        margin-bottom: 2rem;
    }

    @media screen and (max-width: 320px){
        font-size: 2.5rem;
        margin-bottom: 3rem;
    }
`

export const UsersProfileSendMessage = styleC(Link)
`
    position: absolute;
    left: 0;
    top: 50%;
    margin: auto;    
    transform: rotate(-90deg);    
    font-size: 3.5rem;
    font-weight: 900;
    text-decoration: none;
    cursor:pointer;
    color: #FFF4E3;
    line-height: 1;
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.2) rotate(-90deg);
    }

    @media screen and (max-width: 1500px){
        font-size: 2.5rem;
        left: initial;
        top: initial;
        bottom: 0;
        margin: 1rem;
        transform: rotate(0);
        transition: all 0.2s ease-in-out;
        &:hover{
            transform: scale(1.2) rotate(0) translateX(2rem);
        }
    }

    @media screen and (max-width: 768px){
        font-size: 2.5rem;
    }
`
export const UsersProfileWrapper = styleC.div
`
    display: flex;
    width: 100%;
`
export const UsersProfileInfo = styleC.div
`
    margin: 10rem auto;
    padding: 1rem;

    @media screen and (max-width: 540px){
        margin: 12rem auto;
    }

    @media screen and (max-width: 411px){
        margin: 5rem auto;
    }

    @media screen and (max-width: 320px){
        margin: 4rem auto;
    }
`

export const UsersProfileDiv = styleC.div
`
    display: flex;
    padding: 1rem 2rem;
    color: #5D5D5A;

`
export const UsersProfileIcon = styleC.div
`
    font-size: 2rem;
    margin-right: 1rem;
`

export const UsersProfileContent = styleC.div
`
    font-size: 1.8rem;
    font-weight: bold;
`