import React from 'react'
import {IconContext} from 'react-icons';
import {BiMessageAdd} from 'react-icons/bi';
import {MdEmail, MdPhoneIphone} from 'react-icons/md';
import PropTypes from "prop-types";

import {
        UsersListCard,
        CardSendMessageLink,
        CardImgContainer,
        Img,
        CardContentContainer,
        CardUserName,
        CardFooter,
        CardDiv,
        CardIcon,
        CardContent
} from './UsersCardElements'

const UsersCard = ({ users }) => {
    const userSession = JSON.parse(localStorage.getItem("sessionUser")) ? JSON.parse(localStorage.getItem("sessionUser")) : [];
        return (
            <>
            {users.map((user) => (   
                userSession[0]["id"] !== user.id &&
                <UsersListCard key={user.id}>
                    <CardSendMessageLink to={"/chat/" + user.id}>
                        <IconContext.Provider value={{ style: {color: "#FFF4E3", display: "flex"} }}>
                            <BiMessageAdd/>
                        </IconContext.Provider>
                    </CardSendMessageLink>
                    <CardImgContainer to={"/profile/" + user.id}>
                        <Img src={`https://www.marlonperalta.com/cartrack/images/pic-${user.id}.png`} alt="User1"/>
                    </CardImgContainer>
                    <CardContentContainer to={"/profile/" + user.id}>
                        <CardUserName>{user.name}</CardUserName>
                    </CardContentContainer>
                    <CardFooter>
                            <IconContext.Provider value={{ style: {color: "#5D5D5A", display: "flex"} }}>
                                <CardDiv>
                                    <CardIcon><MdEmail/></CardIcon>
                                    <CardContent>{user.email}</CardContent>
                                </CardDiv>
                                <CardDiv>
                                    <CardIcon><MdPhoneIphone/></CardIcon>
                                    <CardContent>{user.phone}</CardContent>
                                </CardDiv>
                            </IconContext.Provider>
                        </CardFooter>
                </UsersListCard>
            ))}
            </>
        );
}

UsersCard.propTypes = {
    users: PropTypes.array.isRequired
}

export default UsersCard
