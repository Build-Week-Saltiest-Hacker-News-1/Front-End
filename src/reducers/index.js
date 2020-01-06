import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './../actions'

export const initialState = {
    data : [],
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

        default:
            return state;
    }

}