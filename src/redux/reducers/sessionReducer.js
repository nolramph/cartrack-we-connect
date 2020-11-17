import * as types from '../actions/actionTypes';

export default function sessionReducer(state = [], action){
    switch(action.type){
        case types.SAVE_SESSION :
               return action.sessions
        default: 
            return state;
    }
}