import * as types from './actionTypes';


export function saveSession(sessions){
    return function (dispatch) {
        dispatch({
            type: types.SAVE_SESSION,
            sessions,
        })
    }
}
