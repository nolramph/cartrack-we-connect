import React, {useEffect, useState} from 'react';
import UsersCard from '../UsersCard';
import {
        UsersContainer,
        UsersSearchContainer,
        UsersFormTitle,
        UsersFormInput,
        UsersButton,
        UsersListContainer,
        UserDiv,
        UsersError
} from './UsersListElements'
import {IconContext} from 'react-icons';
import {IoMdSend} from 'react-icons/io';
import {FaSadTear} from 'react-icons/fa';
import {connect} from 'react-redux';
import {loadUsers, filterUsers} from '../../../redux/actions/userActions';
import PropTypes from 'prop-types';
import UserDetails from '../../commons';

const UsersList = ({loadUsers, filterUsers, users}) => {
    
    const [searchValue, setSearchValue] = useState("");
    // eslint-disable-next-line 
    

    

    useEffect(() => {
        if(users.length === 0){
            loadUsers().catch(err => {
                alert(`Loading users failed ${err}` );
            })
        }

        // eslint-disable-next-line 
    }, []);


    function handleInput(e){
        const {value} = e.target;
        if(value){
            setSearchValue(value)
        }else{
            loadUsers();
        }
    }
    
    const handleSubmit = () => {
        filterUsers(searchValue);
    }   

    return (
        <>
        
        <UserDetails/>
         <UsersContainer>
            <UsersSearchContainer>
                <UsersFormTitle>Have you <br/> seen?</UsersFormTitle>
                <UserDiv>
                    <UsersFormInput name="search" autocomplete="off" placeholder="type your name, email..." onChange={(e) => handleInput(e)}/>
                        <UsersButton onClick={() => handleSubmit()}>
                        <IconContext.Provider value={{ style: {color: "#FC724C", display: "flex"} }}>
                            <IoMdSend/>
                        </IconContext.Provider>
                    </UsersButton>
                </UserDiv>
            </UsersSearchContainer>
        </UsersContainer>
        <UsersListContainer>
            {users.length === 0 && (<UsersError>We couldn't find HIM / HER <FaSadTear/> </UsersError>) }
            <UsersCard users={users} />
        </UsersListContainer>
        </>
    )
}

UsersList.propTypes = {
    users: PropTypes.array.isRequired,
    loadUsers: PropTypes.func.isRequired
}

function mapStateToProps({users, sessions}) {
    return {
        users,
        sessions
    }
}

const mapDispatchToProps = {
    loadUsers,
    filterUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);

