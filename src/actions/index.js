import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth'

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const LOGOUT = "LOGOUT";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

//update profile
export const UPDATE_PROFILE_START = "UPDATE_PROFILE_START"
export const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS"
export const UPDATE_PROFILE_FAIL = "UPDATE_PROFILE_FAIL"


export const GET_FEED_START = "GET_FEED_START";
export const GET_FEED_SUCCESS = "GET_FEED_SUCCESS";
export const GET_FEED_FAIL = "GET_FEED_FAIL";

export const GET_DASHBOARD_START = "GET_DASHBOARD_START";
export const GET_DASHBOARD_SUCCESS = "GET_DASHBOARD_SUCCESS";
export const GET_DASHBOARD_FAIL = "GET_DASHBOARD_FAIL";

export const GET_USER_START = "GET_USER_START";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAIL = "GET_USER_FAIL";


export const PUT_EDIT_START = "PUT_EDIT_START";
export const PUT_EDIT_SUCCESS = "PUT_EDIT_SUCCESS";
export const PUT_EDIT_FAIL = "PUT_EDIT_FAIL";


export const DELETE_POST_START = "DELETE_POST_START";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const DELETE_POST_FAIL = "DELETE_POST_FAIL";


//POST
export const postLogin = (payload) => dispatch => {
  dispatch({ type: LOGIN_START });
  axiosWithAuth()
    .post("api/auth/login/", payload.values)
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      console.log(res.data.token)
      localStorage.setItem("token", res.data.token)
      localStorage.setItem("welcomemsg", res.data.message)
      localStorage.setItem("userid", res.data.id)
      payload.props.history.push("/dashboard");
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAIL, payload: err.response });
    });
};

export const postRegister = payload => dispatch => {
  dispatch({ type: REGISTER_START });
  axiosWithAuth()
    .post("api/auth/register/", payload)
    .then(res => {
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: REGISTER_FAIL, payload: err.response });
    });
};

export const logout = () => dispatch => {
  dispatch({type: LOGOUT});
}

//GET - get feed
export const getAllFeed = () => dispatch =>{
  dispatch({type: GET_FEED_START})
  axios
    .get(`https://swapi.co/api/people`)
    .then(res => {
      console.log(res.data.results)
      dispatch({
        type: GET_FEED_SUCCESS,
        payload: res.data.results
      })
    })
    .catch( err => {
      dispatch({
        type: GET_FEED_FAIL,
        payload: err.response
      })
    })
}

//get saved feed
export const getDashboard = () => dispatch =>{
  dispatch({type: GET_DASHBOARD_START})
  axiosWithAuth()
    .get(`api/comments`)
    .then(res => {
      dispatch({
        type: GET_DASHBOARD_SUCCESS,
        payload: res.data
      })
    })
    .catch( err => {
      dispatch({
        type: GET_DASHBOARD_FAIL,
        payload: err.response
      })
    })
}
// get user info
export const getUserData = (id) => dispatch =>{
  dispatch({type: GET_USER_START})
  axiosWithAuth()
    .get(`api/dashboard/${id}`)
    .then(res => {
      dispatch({
        type: GET_USER_SUCCESS,
        payload: res.data
      })
    })
    .catch( err => {
      dispatch({
        type: GET_USER_FAIL,
        payload: err.response
      })
    })
}

 // put edited user info
 export const putEditedUser = (id, payload) => dispatch =>{
  dispatch({type: PUT_EDIT_START})
  axiosWithAuth()
    .put(`api/dashboard/${id}`, payload)
    .then(res => {
      dispatch({
        type: PUT_EDIT_SUCCESS,
        payload: res.data
      }, getUserData(id))
      
    })
    .catch( err => {
      dispatch({
        type: PUT_EDIT_FAIL,
        payload: err.response
      })
    })
}

//delete saved comment
export const deleteSaved = (id) => dispatch =>{
  dispatch({type: DELETE_POST_START})
  axiosWithAuth()
    .delete(`https://salty-hacker-news.herokuapp.com/api/comments/${id}`)
    .then(res => {
      dispatch({
        type: DELETE_POST_SUCCESS,
        payload: res.data
      })
      
    })
    .catch( err => {
      dispatch({
        type: DELETE_POST_FAIL,
        payload: err.response
      })
    })
}






