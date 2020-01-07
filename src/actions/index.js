import axios from "axios";
import { axiosWithAuth } from '../utils/axiosWithAuth'

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

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
