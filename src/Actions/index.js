import axios from 'axios';

export const AUTH_USER = 'auth_user';
export const UNAUTH_USER = 'unauth_user';
export const AUTH_ERROR = 'auth_error';
export const FETCH_MESSAGE = 'fetch_message';

const ROOT_URL = 'http://localhost:3000';

export function signinUser({ email, password }) {
  return function(dispatch) {
    // submit email and password to server
    const request = axios.post(`${ROOT_URL}/signin`, { email, password });
    request
      .then(response => {
        // -Save the JWT token
        //localStorage.setItem('token', response.data.token)
        // -if request is good, we need to update state to indicate user is authenticated
        //dispatch({type: AUTH_USER})
      })

      // If request is bad...
      // -Show an error to the user
      .catch(() => {
        //dispatch(authError('bad login info'))
      });
  };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}
