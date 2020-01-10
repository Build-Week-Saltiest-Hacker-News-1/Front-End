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
    PUT_EDIT_FAIL,

    DELETE_POST_START,
    DELETE_POST_SUCCESS,
    DELETE_POST_FAIL,

    SAVE_SUCCESS

} from './../actions'

import { main, save } from '../dummy'

export const initialState = {
    feed : main,
    saved: save,
    finaldata: main,
    userInfo : {},
    userEdit: {},
    isLoggedIn: false,
    isLoggingIn: false,
    isUpdating: false,
    isFetching: false,
    isDeleting: false,
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
                feed: action.payload[0] ,               
                saved: action.payload[1],
            }
        case "COMPLETE_DATA":
            return{
                ...state,
                finaldata : state.feed.map(el => {
                    return {
                        ...el,
                        isSaved: JSON.stringify(state.saved).includes(JSON.stringify(el.saltyUsername)) && JSON.stringify(state.saved).includes(JSON.stringify(el.saltyComment))
                    }  
                }).sort((a,b) => (a.saltyRank < b.saltyRank) ? 1: -1)
            }
        
        case SAVE_SUCCESS:
            return {
                ...state,
                saved: action.payload
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
                isUpdating: true
            }
        case PUT_EDIT_SUCCESS:
            return{
                ...state,
                isUpdating: false,
                userEdit: action.payload
            }
    
        case PUT_EDIT_FAIL:
            return{
                ...state,
                isUpdating: false,
                err: action.payload
    }
        case DELETE_POST_START:
            return{
                ...state,
                isDeleting: true
            }
        case DELETE_POST_SUCCESS:
            return{
                ...state,
                isDeleting: false,
                saved: action.payload
            }
    
        case DELETE_POST_FAIL:
            return{
                ...state,
                isDeleting: false,
                err: action.payload
    }       

        default:
            return state;    
    }

}