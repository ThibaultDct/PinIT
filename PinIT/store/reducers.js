import {
    SET_USER,
    REMOVE_USER,
} from './actions'
import { userState } from "./state";

export function userReducer(state = userState, action){
    switch (action.type){
        case SET_USER:
            return {...action.payload}
        case REMOVE_USER:
            return {user: '', token: '', pseudo: ''}
        default:
            return state
    }
}