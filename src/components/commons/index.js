import React, {useState, useEffect} from 'react'
import {
    HeaderUserContainer,
    HeaderUser,
    HeaderOptions,
    HeaderUserName
} from './UserDetails';
import {IoMdArrowDropdown} from 'react-icons/io';
import { Redirect } from 'react-router-dom';
const UserDetails = () => {
    const [userSession, setUserSession] = useState(JSON.parse(localStorage.getItem("sessionUser")) ? JSON.parse(localStorage.getItem("sessionUser")) : []);
    const [redirectMe, setRedirectMe] = useState(false)
    
    useEffect(() => {
        if(userSession.length === 0){
            setRedirectMe(true);
        }else{  
            setRedirectMe(false);
        }
        
        // eslint-disable-next-line 
    }, [userSession]);
    
    function handleLogout(){
        console.log(redirectMe);
        localStorage.removeItem("sessionUser");
        setRedirectMe(true)
    }

    return (
        <>
        {redirectMe && <Redirect to={"/login"} />}
            <HeaderUserContainer>
            {userSession.length > 0 && (
                <HeaderUser>
                        <HeaderUserName>
                            Hi {userSession[0]['name']} 
                            <IoMdArrowDropdown/>
                        </HeaderUserName>
                        <HeaderOptions onClick={() => handleLogout()}>Logout</HeaderOptions>
                </HeaderUser>
                )}
            </HeaderUserContainer>
        </>
    )
}

export default UserDetails
