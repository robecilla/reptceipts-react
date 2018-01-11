import axios from 'axios';

export const AUTH_USER = 'auth_user';
export const UNAUTH_USER = 'unauth_user';
export const AUTH_ERROR = 'auth_error';
export const FETCH_MESSAGE = 'fetch_message';

const ROOT_URL = 'https://reptceipts.dev';

export function signinUser(values) {
  return function(dispatch) {
    // Here values handles email and password
    const request = axios.post(`${ROOT_URL}/api/login`, values);
    request
      .then(response => {
        // Save user specific JWT
        localStorage.setItem('token', response.data.token);
        // If request went good, dispatch redux action to change auth state
        dispatch({ type: AUTH_USER });
      })
      // If bad request, call the error handler
      .catch(error => {
        if (error) {
          dispatch(authError(error.response.data));
        }
      });
  };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}
