import * as types from './actionTypes';
import {getUsers} from '../../api/userApi';

export function loadUsersSuccess(users){
    return { type: types.LOAD_USERS_SUCCESS, users};
}

export function filterUsers(searchValue){
    return function(dispatch) {
        dispatch({
            type: types.LOAD_FILTERED_USERS_SUCCESS,
            searchValue
        })
    }
   
}

export function loadUsers(){
    return function (dispatch) {
        return getUsers().then(users => {
            dispatch(loadUsersSuccess(users));
        }).catch(err => {
            throw err;
        })
    }
}

