import React, {useState, useEffect} from 'react'
import {IoMdSend} from 'react-icons/io';
import {FaSadTear} from 'react-icons/fa';
import {
        ModalContainer,
        ModalContent,
        ModalTitle,
        ModalInput,
        ModalButton,
        ModalError
} from './LoginElements';
import {UserDiv} from '../Users/UsersList/UsersListElements';
import {connect} from 'react-redux';
import {loadUsers} from '../../redux/actions/userActions';
import {saveSession} from '../../redux/actions/sessionActions';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';


const LoginPage = ({users, loadUsers, saveSession, optionsState}) => {

    const [userSession, setUserSession] = useState("");
    const [showError, setShowError] = useState(false);
    const [redirectMe, setRedirectMe] = useState(false);
    
    useEffect(() => {
        if(users.length === 0){
            loadUsers().catch(err => {
                alert(`Loading users failed ${err}` );
            })
        }
        // eslint-disable-next-line 
    }, []);

    function handleSession(e){
        const {value} = e.target;
        if(value){
            setUserSession(value)
        }
        if(value === ""){
            setShowError(false);
        }
    }

    
    const handleSubmit = () => {
        let filterSession = users.filter(filterUsername => 
            filterUsername.username.toLowerCase().includes(userSession.toLowerCase())
       )

        if(filterSession.length === 0){
            setShowError(true)
        }else{
            saveSession(filterSession);
            localStorage.setItem("sessionUser", JSON.stringify(filterSession));
            setShowError(false);
            setRedirectMe(true)
        } 
        
        
    }   

    return (
        <>
            {redirectMe && (<Redirect to={"/"} />)}
            <ModalContainer>
                <ModalContent>
                    <ModalTitle>Who are you?</ModalTitle>
                    <UserDiv>
                        <ModalInput placeholder="Type your username..." onChange={(e) => handleSession(e)}/>
                        <ModalButton onClick={() => handleSubmit()}><IoMdSend/></ModalButton>
                    </UserDiv>
                        {showError && (<ModalError>We couldn't your username  <FaSadTear/> </ModalError>) }
                </ModalContent>
            </ModalContainer>
        </>
    )
}

LoginPage.propTypes = {
    users: PropTypes.array.isRequired,
    sessions: PropTypes.array.isRequired,
    loadUsers: PropTypes.func.isRequired,
    saveSession: PropTypes.func.isRequired,
}

function mapStateToProps({users, sessions,options}) {
    return {
        users,
        sessions
    }
}


const mapDispatchToProps = {
    loadUsers,
    saveSession,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
