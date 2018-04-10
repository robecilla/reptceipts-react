import axios from 'axios';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { ROOT_URL } from './config';

export const SET_USER = 'SET_USER';
export const GET_USER_RECEIPTS = 'GET_USER_RECEIPTS';
export const UPDATE_RESULT = 'UPDATE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export function getUser() {
  return function(dispatch) {
    dispatch(showLoading());
    /* JWT determines the identity of the user */
    let token = localStorage.getItem('token');

    if (token) {
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
          }
        })
        .catch(error => {
          console.log(error);
          console.log(error.response);

          // if(error.response.status === 401) {
          //   window.location = '/signout';
          // }
        })
        .then(() => {
          // Hide loader on request completion
          dispatch(hideLoading());
        });
    }
  };
}

export function getUserReceipts() {
  return function(dispatch) {
    dispatch(showLoading());
    /* JWT determines the identity of the user */
    let token = localStorage.getItem('token');

    axios({
      method: 'GET',
      url: `${ROOT_URL}/api/receipt`,
      headers: { Authorization: 'Bearer ' + token }
    })
      .then(response => {
        console.log(response);
        if (response.status >= 200 && response.status < 300) {
          dispatch({
            type: GET_USER_RECEIPTS,
            payload: response.data.response
          });
        }
      })
      .catch(error => {
        console.log(error);
        console.log(error.response);
        // if(error.response.status === 401) {
        //   window.location = '/signout';
        // }
      })
      .then(() => {
        // Hide loader on request completion
        dispatch(hideLoading());
      });
  };
}

export function updateDetails(values) {
  return function(dispatch) {
    dispatch(showLoading());
    values._method = 'PUT';
    axios({
      method: 'POST',
      url: `${ROOT_URL}/api/user/${values.id}`,
      headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      data: values
    })
      .then(response => {
        console.log(response);
        if (response.status >= 200 && response.status < 300) {
          dispatch({
            type: UPDATE_RESULT,
            payload: response.data
          });
        }
      })
      .catch(error => {
        console.log(error.response);
        if (error.response) {
          dispatch({
            type: UPDATE_RESULT,
            payload: error.response
          });
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
      })
      .then(() => {
        // Hide loader on request completion
        dispatch(hideLoading());
      });
  };
}

export function deleteAccount(id) {
  return function(dispatch) {
    dispatch(showLoading());
    axios({
      method: 'DELETE',
      url: `${ROOT_URL}/api/user/${id}`,
      headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
    })
      .then(response => {
        console.log(response);
        if (response.status >= 200 && response.status < 300) {
          window.location = '/signout';
        }
      })
      .catch(error => {
        console.log(error.response);
        if (error.response) {
          dispatch({
            type: DELETE_RESULT,
            payload: error.response
          });
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
      })
      .then(() => {
        // Hide loader on request completion
        dispatch(hideLoading());
      });
  };
}
