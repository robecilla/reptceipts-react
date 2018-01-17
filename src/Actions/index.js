import axios from 'axios';

export const AUTH_USER = 'auth_user';
export const UNAUTH_USER = 'unauth_user';
export const AUTH_ERROR = 'auth_error';
export const FETCH_MESSAGE = 'fetch_message';

const ROOT_URL = 'https://reptceipts.dev';

/* Login */
export function signinUser(values, history) {
  return function(dispatch) {
    // Here values handles email and password
    const request = axios.post(`${ROOT_URL}/api/login`, values);
    request
      .then(response => {
        // Save user specific JWT
        localStorage.setItem('token', response.data.token);
        // If request went good, dispatch redux action to change auth state
        dispatch({ type: AUTH_USER });

        history.push('/menu/dashboard');
      })
      // If bad request, call the error handler
      .catch(error => {
        // Error
        if (error.response) {
          dispatch(authError(error.response.data));
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
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

export function signoutUser() {
  localStorage.removeItem('token');
  return {
    type: UNAUTH_USER
  };
}

export function registerUser(values, history) {
  return function(dispatch) {
    axios
      .post(`${ROOT_URL}/api/register`, values)
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        history.push('/menu/dashboard');
      })
      .catch(error => {
        if (error.response) {
          dispatch(authError(error.response.data));
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
      });
  };
}
