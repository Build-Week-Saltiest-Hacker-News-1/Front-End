import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './../actions'

export const initialState = {
    feed : [],
    saved: [],
    userInfo : null,
    isLoggedIn: false,
    isLoggingIn: false,
    isFetching: false,
    err: '',
    token: ''
}




export const Reducers = (state = initialState, action) =>{

    switch(action.type){
        case LOGIN_START:
            return {
                ...state,
                isLoggingIn: true
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: true
            }

        case LOGIN_FAIL:
            return {
            ...state,
            err: action.payload
            }

        case REGISTER_START:
            return {
                ...state,

            }

        case REGISTER_SUCCESS:
            return {
                ...state,
                token: action.payload.token
            }

        case REGISTER_FAIL:
            return {
            ...state,
            err: action.payload
            }

        default:
            return state;
    }

}