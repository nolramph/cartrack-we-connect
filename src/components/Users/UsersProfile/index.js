import React, {useState, useEffect} from 'react';
import {MdEmail, MdPhoneIphone, MdLocationOn} from 'react-icons/md';
import {FaGlobeAsia, FaRegBuilding} from 'react-icons/fa'
import {IoMdCloseCircleOutline} from 'react-icons/io';
import {
        UsersProfileContainer,
        UsersProfileCard,
        UsersProfileVector,
        UsersProfileImg,
        Img,
        UsersCloseIcon,
        UsersProfileName,
        UsersProfileSendMessage,
        UsersProfileWrapper,
        UsersProfileInfo,
        UsersProfileDiv,
        UsersProfileIcon,
        UsersProfileContent
} from './UsersProfileElements'
import UserDetails from '../../commons';
import PropTypes from 'prop-types';
import {loadUsers} from '../../../redux/actions/userActions';
import {connect} from 'react-redux';
import newUsers from '../../../api/mockData';


const UsersProfile = ({loadUsers, users, ...props}) => {

    const [user, setUser] = useState({...props.user})
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
    
    return (
        <>
        <UserDetails/>
        <UsersProfileContainer>
            <UsersProfileCard key={user.id}>
                <UsersProfileVector/>
                <UsersProfileImg>
                    <Img src={`https://www.marlonperalta.com/cartrack/images/pic-${user.id}.png`} />
                </UsersProfileImg>
                <UsersCloseIcon to="/"><IoMdCloseCircleOutline/></UsersCloseIcon>
                        <UsersProfileSendMessage to={"/chat/" + user.id} >
                            Message <br/> {user.username}
                        </UsersProfileSendMessage>
                <UsersProfileWrapper>
                    <UsersProfileInfo>
                    <UsersProfileName>{user.name}</UsersProfileName>
                        <UsersProfileDiv>
                            <UsersProfileIcon><MdEmail/></UsersProfileIcon>
                            <UsersProfileContent>{user.email}</UsersProfileContent>
                        </UsersProfileDiv>
                        <UsersProfileDiv>
                            <UsersProfileIcon><MdPhoneIphone/></UsersProfileIcon>
                            <UsersProfileContent>{user.phone}</UsersProfileContent>
                        </UsersProfileDiv>
                        <UsersProfileDiv>
                            <UsersProfileIcon><MdLocationOn/></UsersProfileIcon>
                            <UsersProfileContent>
                            {user.address && (
                                <>
                                    {user.address.street} <br/>
                                    {user.address.suite} <br/>
                                    {user.address.city} <br/>
                                    {user.address.zipcode} <br/>
                                </>
                            )}
                            </UsersProfileContent>
                        </UsersProfileDiv>
                        <UsersProfileDiv>
                            <UsersProfileIcon><FaGlobeAsia/></UsersProfileIcon>
                            <UsersProfileContent>{user.email}</UsersProfileContent>
                        </UsersProfileDiv>
                        <UsersProfileDiv>
                            <UsersProfileIcon><FaRegBuilding/></UsersProfileIcon>
                            <UsersProfileContent>
                            {user.company && (
                                <>
                                    {user.company.name}
                                </>
                            )}
                            </UsersProfileContent>
                        </UsersProfileDiv>
                    </UsersProfileInfo>
                </UsersProfileWrapper>
            </UsersProfileCard>
        </UsersProfileContainer>
    </>  
    )
}

UsersProfile.propTypes = {
    user: PropTypes.object.isRequired,
    users: PropTypes.array.isRequired,
    loadUsers: PropTypes.func.isRequired
}

export function getUsersParams(users, paramsId){
    return users.find(user => user.id === parseInt(paramsId)) || null;
}

function mapStateToProps(state, ownProps) {
    const paramsId = ownProps.match.params.paramsId;
    const user = paramsId && state.users.length > 0 ? getUsersParams(state.users, paramsId) : newUsers
    return {
        user,
        users : state.users
    }
}

const mapDispatchToProps = {
    loadUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersProfile);
