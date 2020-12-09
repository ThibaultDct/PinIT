import {
    SET_USER,
    REMOVE_USER,
    SET_PROFILE,
    REMOVE_PROFILE,
} from './actions'
import { userState, userProfileState } from "./state";

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

export function userProfileReducer(state = userProfileState, action){
    switch (action.type){
        case SET_PROFILE:
            return {...action.payload}
        case REMOVE_PROFILE:
            return {pseudo: '', lastname: '', firstname: '', image: '', age: '', country: '', bio: ''}
        default:
            return state
    }
}