import styleC from 'styled-components';
import {Link} from 'react-router-dom';

export const HeaderContainer = styleC.div
`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 85px;
    position: relative;
`
export const HeaderLogo = styleC(Link)
`
    font-size: 6rem;
    font-family: 'Do Hyeon', sans-serif;
    font-weight: 600;
    // color: ${({logoPrimaryColor}) => logoPrimaryColor};
    color: #1B161C;
    cursor:pointer;
    text-decoration: none;
`

export const CustomColor = styleC.span
`
    // color: ${({logoSecondaryColor}) => logoSecondaryColor};
    color: #F56032;
`

