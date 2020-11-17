import * as types from './actionTypes';

export function createChats(chats){
    return function(dispatch){
        dispatch({
            type: types.SAVE_CHATS, 
            chats
        })
    }
}