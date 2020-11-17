import * as types from '../actions/actionTypes';

export default function userReducer(state = [], action){
    switch(action.type){
        case types.LOAD_USERS_SUCCESS :
            return action.users;
        case types.LOAD_FILTERED_USERS_SUCCESS :
            let filteredState = [
                ...state.filter(item => {
                    return Object.keys(item).some(key =>
                        item[key].toString().toLowerCase().includes(action.searchValue.toLowerCase())
                    );
                    }) 
            ]
            return filteredState;
        default: 
            return state;
    }
}