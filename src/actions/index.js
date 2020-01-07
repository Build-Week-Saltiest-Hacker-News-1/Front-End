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


export const postLogin = (payload) => dispatch => {
  dispatch({ type: LOGIN_START });
  axiosWithAuth()
    .post("api/auth/login/", payload.values)
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      console.log(res.data.token)
      localStorage.setItem("token", res.data.token)
      payload.props.history.push("/feed");
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
  dispatch({type: UPDATE_PROFILE_FAIL});
  axiosWithAuth()
    .put(``, payload)
    .then(res => 
      dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: res.data }))
    .catch( err => {
      dispatch({ type: UPDATE_PROFILE_FAIL, payload: err.response })
  })
}
