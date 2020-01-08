import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    UPDATE_PROFILE_START,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL,
    GET_SAVED_START,
    GET_SAVED_SUCCESS,
    GET_SAVED_FAIL,
    GET_USER_START,
    GET_USER_SUCCESS,
    GET_USER_FAIL
} from './../actions'

export const initialState = {
    feed : [],
    saved: [],
    userInfo : null,
    isLoggedIn: false,
    isLoggingIn: false,
    isUpdating: false,
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
                isLoggedIn: true,
                token: action.payload.token,
                message: action.payload.message
            }

        case LOGIN_FAIL:
            return {
            ...state,
            isLoggingIn: false,
            err: action.payload
            }

        case LOGOUT:
            return {
            ...state,
            isLoggedIn: false,
            token: '',
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


        case UPDATE_PROFILE_START:
            return{
                ...state,
                isUpdating: true
            }
        case UPDATE_PROFILE_SUCCESS:
            return{
                ...state,
                isUpdating: false,
                user: action.payload
            }
        case UPDATE_PROFILE_FAIL:
            return{
                ...state,
                isUpdating: false,
                err: action.payload
            }

        case GET_SAVED_START:
            return{
                ...state,
                isFetching: true
            }
        case GET_SAVED_SUCCESS:
            return{
                ...state,
                isFetching: false,
                saved: action.payload
            }

        case GET_SAVED_FAIL:
            return{
                ...state,
                isFetching: false,
                err: action.payload
            }

        case GET_USER_START:
            return{
                ...state,
                isFetching: true
            }
        case GET_USER_SUCCESS:
            return{
                ...state,
                isFetching: false,
                userInfo: action.payload
            }
    
        case GET_USER_FAIL:
            return{
                ...state,
                isFetching: false,
                err: action.payload
            }
            

        default:
            return state;
    }

}