import React from 'react';
import {
    HeaderContainer,
    HeaderLogo,
    CustomColor
} from './HeaderElements';

const Header = () => {
 
    return (
           
            <HeaderContainer>
                <HeaderLogo to="/">
                    <CustomColor>We</CustomColor>Connect
                </HeaderLogo>
            </HeaderContainer>
    )
}

export default (Header);
