import axios from 'axios';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { ROOT_URL } from './config';
import { SET_USER } from './User';

export const AUTH_USER = 'AUTH_USER';
export const UNAUTH_USER = 'UNAUTH_USER';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const LOGIN_ERROR = 'LOGIN_ERROR';

/* Login */
export function signinUser(values, history) {
  return function(dispatch) {
    dispatch(showLoading());
    // Here values handles email and password
    const request = axios.post(`${ROOT_URL}/api/login`, values);
    request
      .then(response => {
        // Save user specific JWT
        localStorage.setItem('token', response.data.response.token);
        // If request went good, dispatch redux action to change auth state
        dispatch({
          type: AUTH_USER
        });

        getThisUser(response.data.response.token, dispatch, history);
      })
      // If bad request, call the error handler
      .catch(error => {
        dispatch({
          type: LOGIN_ERROR,
          payload: error.response.data.response
        });
      })
      .then(() => {
        // Hide loader on request completion
        dispatch(hideLoading());
      });
  };
}

/* Register */
export function registerUser(values, history) {
  return function(dispatch) {
    dispatch(showLoading());
    axios
      .post(`${ROOT_URL}/api/register`, values)
      .then(response => {
        // Save user specific JWT
        localStorage.setItem('token', response.data.response.token);
        // If request went good, dispatch redux action to change auth state
        dispatch({
          type: AUTH_USER
        });

        getThisUser(response.data.response.token, dispatch, history);
      })
      .catch(error => {
        dispatch({
          type: REGISTER_ERROR,
          payload: error.response.data.response
        });
      })
      .then(() => {
        // Hide loader on request completion
        dispatch(hideLoading());
      });
  };
}

export function signoutUser() {
  localStorage.removeItem('token');
  localStorage.removeItem('console_token');
  return {
    type: UNAUTH_USER
  };
}

function getThisUser(token, dispatch, history) {
  axios({
    method: 'GET',
    url: `${ROOT_URL}/api/user/JWTuser`,
    headers: { Authorization: 'Bearer ' + token }
  })
    .then(response => {
      console.log(response);
      if (response.status >= 200 && response.status < 300) {
        dispatch({
          type: SET_USER,
          payload: response.data.response.user
        });
        //change route
        history.push('/menu/receipts');
      }
    })
    .catch(error => {
      if (error.response.status === 401) {
        window.location = '/signout';
      }
    });
}
