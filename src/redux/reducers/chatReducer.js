import * as types from '../actions/actionTypes';

export default function chatReducer(state = [], action){
    switch(action.type){
        case types.SAVE_CHATS :
            return [...state, {...action.chats}];
        default:
            return state;
    }
}