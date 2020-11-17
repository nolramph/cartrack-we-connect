import { combineReducers } from 'redux';
import users from './userReducer';
import sessions from './sessionReducer';
import chats from './chatReducer';

const rootReducer = combineReducers({
    users,
    sessions,
    chats
});

export default rootReducer;