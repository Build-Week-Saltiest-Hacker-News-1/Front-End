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
    GET_FEED_START,
    GET_FEED_FAIL,
    GET_FEED_SUCCESS,
    GET_DASHBOARD_START,
    GET_DASHBOARD_SUCCESS,
    GET_DASHBOARD_FAIL,
    GET_USER_START,
    GET_USER_SUCCESS,
    GET_USER_FAIL,
    PUT_EDIT_START,
    PUT_EDIT_SUCCESS,
    PUT_EDIT_FAIL
} from './../actions'

import { main, save } from '../dummy'

export const initialState = {
    feed : main,
    saved: save,
    finaldata: [],
    userInfo : {},
    userEdit: {},
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

        case GET_DASHBOARD_START:
            return{
                ...state,
                isFetching: true
            }
        case GET_DASHBOARD_SUCCESS:
            return{
                ...state,
                isFetching: false,
                saved: action.payload,
                finaldata: state.feed.map(el => {return {salty: el, isSaved: JSON.stringify(state.saved).includes(JSON.stringify(el))}})
        }

        case GET_DASHBOARD_FAIL:
            return{
                ...state,
                isFetching: false,
                err: action.payload
            }


        case GET_FEED_START:
            return{
                ...state,
                isFetching: true
            }
            
        case GET_FEED_SUCCESS:
            return{
                ...state,
                isFetching: false,
                feed: action.payload
            }

        case GET_FEED_FAIL:
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

        case PUT_EDIT_START:
            return{
                ...state,
                isFetching: true
            }
        case PUT_EDIT_SUCCESS:
            return{
                ...state,
                isFetching: false,
                userEdit: action.payload
            }
    
        case PUT_EDIT_FAIL:
            return{
                ...state,
                isFetching: false,
                err: action.payload
    }
            

        default:
            return state;    
    }

}