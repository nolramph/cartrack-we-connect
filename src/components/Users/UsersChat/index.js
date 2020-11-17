import React, {useState, useEffect} from 'react'
import {IoMdCloseCircleOutline, IoMdSend} from 'react-icons/io';
import {
    UsersProfileContainer,
    UsersProfileCard,
    UsersProfileVector,
    UsersProfileImg,
    Img,
    UsersCloseIcon,
    UsersProfileName
} from '../UsersProfile/UsersProfileElements';
import {
    UsersChatContainer,
    UsersConversationDiv,
    UsersReceiverDiv,
    UsersSenderDiv,
    UsersAvatar,
    UsersMessage,
    UsersChatForm,
    UsersChatWrapper,
    UsersChatInput,
    UsersChatSendButton
} from './USersChatElements';
import UserDetails from '../../commons';
import PropTypes from 'prop-types';
import {loadUsers} from '../../../redux/actions/userActions';
import {createChats} from '../../../redux/actions/chatActions';
import {saveSession} from '../../../redux/actions/sessionActions';
import {connect} from 'react-redux';
import newUsers from '../../../api/mockData';

const UsersChat = ({loadUsers, createChats, saveSession, users, chats, sessions, ...props}) => {
    const [user, setUser] = useState({...props.user})
    const [chat, setChat] = useState({id: null, messages: "", teamMateId: null});
    const userSession = JSON.parse(localStorage.getItem("sessionUser")) ? JSON.parse(localStorage.getItem("sessionUser")) : [];
    const chatSession = JSON.parse(localStorage.getItem("chatSession")) ? JSON.parse(localStorage.getItem("chatSession")) : [];
    useEffect(() => {
        if(users.length === 0){
            loadUsers().catch(err => {
                alert(`Loading users failed ${err}` );
            });
        }else{
            setUser({...props.user});
        }

        // eslint-disable-next-line 
    }, [props.user])

    useEffect(() => {
        if(chats.length === 0){
            Object.values(chatSession).forEach(newValue=>{
                    createChats(newValue);
            });
        }


      // eslint-disable-next-line 
    }, [])

    useEffect(() => {
        localStorage.setItem("chatSession", JSON.stringify(chats));
      // eslint-disable-next-line 
    }, [chats])

    const handleChange = (e) =>{
        // console.log();
        setChat(prevChats => ({
            ...prevChats,
            id: parseInt(userSession[0]["id"]) , messages: e.target.value, teamMateId: user.id
        }));

    }

    const onChatSave = (e) =>{
        e.preventDefault();
        createChats(chat);
        e.target.reset();
    }

    return (
        <>
        <UserDetails/>
        <UsersProfileContainer>
            <UsersProfileCard>
                <UsersProfileVector/>
                <UsersProfileImg>
                    <Img src={`/images/pic-${user.id}.png`} alt={`User${user.id}`} />
                </UsersProfileImg>
                <UsersCloseIcon to="/"><IoMdCloseCircleOutline></IoMdCloseCircleOutline></UsersCloseIcon>
                <UsersChatWrapper>
                    <UsersProfileName>{user.name}</UsersProfileName>
                    <UsersChatContainer>
                        <UsersConversationDiv>
                        
                            {/* {chats.map((chat, keys) => (
                                
                                 chat.teamMateId === user.id && (
                                    <UsersReceiverDiv key={keys}>
                                    <UsersAvatar margin={"0 1rem 0 0"}>
                                    <Img src={`/images/pic-${user.id}.png`}/>
                                    </UsersAvatar>
                                    <UsersMessage>{chat.messages}</UsersMessage>
                                    </UsersReceiverDiv>
                              )
                            ))} */}

                         
                            
                            {chats.map((chat, keys) => (
                                 userSession[0]["id"] === chat.id && chat.teamMateId === user.id &&(
                                    <UsersSenderDiv key={keys}>
                                        <UsersMessage> {chat.messages} </UsersMessage>
                                        <UsersAvatar margin={"0 0 0 1rem"}>
                                        <Img src={`/images/pic-${chat.id}.png`}/>
                                        </UsersAvatar>
                                    </UsersSenderDiv>
                              )
                            ))}
                           
                        </UsersConversationDiv>
                        <UsersChatForm onSubmit={(e) => onChatSave(e)}>
                                <UsersChatInput name="chat" autoComplete="off" placeholder="Type your message here" onChange={(e) => handleChange(e)}/>
                                <UsersChatSendButton type="submit"><IoMdSend/></UsersChatSendButton>
                        </UsersChatForm>
                    </UsersChatContainer>
                </UsersChatWrapper>
            </UsersProfileCard>
        </UsersProfileContainer>
        </>
    )
}
UsersChat.propTypes = {
    user: PropTypes.object.isRequired,
    users: PropTypes.array.isRequired,
    chats: PropTypes.array.isRequired,
    sessions: PropTypes.array.isRequired,
    loadUsers: PropTypes.func.isRequired,
    createChats: PropTypes.func.isRequired
}

export function getUsersParams(users, paramsId){
    return users.find(user => user.id === parseInt(paramsId)) || null;
}

function mapStateToProps(state, ownProps) {
    const paramsId = ownProps.match.params.paramsId;
    const user = paramsId && state.users.length > 0 ? getUsersParams(state.users, paramsId) : newUsers
    return {
        user,
        users : state.users,
        chats : state.chats,
        sessions: state.sessions
    }
}

const mapDispatchToProps = {
    loadUsers,
    createChats,
    saveSession
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersChat);
