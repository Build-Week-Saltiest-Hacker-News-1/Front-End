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

export const GET_SAVED_START = "GET_FEED_START";
export const GET_SAVED_SUCCESS = "GET_FEED_SUCCESS";
export const GET_SAVED_FAIL = "GET_FEED_FAIL";

export const GET_USER_START = "GET_USER_START";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAIL = "GET_USER_FAIL";


export const POST_EDIT_START = "POST_EDIT_START";
export const POST_EDIT_SUCCESS = "POST_EDIT_SUCCESS";
export const POST_EDIT_FAIL = "POST_EDIT_FAIL";



export const postLogin = (payload) => dispatch => {
  dispatch({ type: LOGIN_START });
  axiosWithAuth()
    .post("api/auth/login/", payload.values)
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      console.log(res.data.token)
      localStorage.setItem("token", res.data.token)
      localStorage.setItem("welcomemsg", res.data.message)
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

//update profile
export const updateProfile = (payload, id) => dispatch => {
  dispatch({type: UPDATE_PROFILE_START});
  axiosWithAuth()
    .put(`api/dashboard/:${id}`, payload)
    .then(res => 
      dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: res.data }))
    .catch( err => {
      dispatch({ type: UPDATE_PROFILE_FAIL, payload: err.response })
  })
}

//get feed
export const getSavedFeed = () => dispatch =>{
  dispatch({type: GET_SAVED_START})
  axiosWithAuth()
    .get(`api/comments`)
    .then(res => {
      dispatch({
        type: GET_SAVED_SUCCESS,
        payload: res.data
      })
    })
    .catch( err => {
      dispatch({
        type: GET_SAVED_FAIL,
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

 // post edited user info
 export const postEditedUser = () => dispatch =>{
  dispatch({type: POST_EDIT_START})
  axiosWithAuth()
    .post(`api/comments`)
    .then(res => {
      dispatch({
        type: POST_EDIT_SUCCESS,
        payload: res.data
      })
    })
    .catch( err => {
      dispatch({
        type: POST_EDIT_FAIL,
        payload: err.response
      })
    })
}



