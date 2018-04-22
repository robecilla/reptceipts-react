import axios from 'axios';
//import { showLoading, hideLoading } from 'react-redux-loading-bar';
import NProgress from 'nprogress';
import { ROOT_URL } from './config';

export const SET_USER = 'SET_USER';
export const GET_USER_RECEIPTS = 'GET_USER_RECEIPTS';
export const UPDATE_RESULT = 'UPDATE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';
export const TOGGLE_RECEIPTS_LOADER = 'TOGGLE_RECEIPTS_LOADER';

export function getUser() {
  return function(dispatch) {
    NProgress.start();
    /* JWT determines the identity of the user */
    axios({
      method: 'GET',
      url: `${ROOT_URL}/api/user/JWTuser`,
      headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
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
        if (error.response.status === 401) {
          window.location = '/signout';
        }
      })
      .then(() => {
        // Hide loader on request completion
        NProgress.done();
      });
  };
}

export function getUserReceipts() {
  return function(dispatch) {
    dispatch({
      type: TOGGLE_RECEIPTS_LOADER,
      payload: true
    });
    /* JWT determines the identity of the user */
    axios({
      method: 'GET',
      url: `${ROOT_URL}/api/receipt`,
      headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
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
        if (error.response.status === 401) {
          window.location = '/signout';
        }
      })
      .then(() => {
        // Hide loader on request completion
        dispatch({
          type: TOGGLE_RECEIPTS_LOADER,
          payload: false
        });
      });
  };
}

export function updateDetails(values, getUser) {
  return function(dispatch) {
    NProgress.start();
    values._method = 'PUT';
    axios({
      method: 'POST',
      url: `${ROOT_URL}/api/user/${values.id}`,
      data: values,
      headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
    })
      .then(response => {
        console.log(response);
        if (response.status >= 200 && response.status < 300) {
          dispatch({
            type: UPDATE_RESULT,
            payload: response.data
          });
          getUser();
        }
      })
      .catch(error => {
        if (error.response.status === 401) {
          window.location = '/signout';
        }
        dispatch({
          type: UPDATE_RESULT,
          payload: error.response
        });
      })
      .then(() => {
        // Hide loader on request completion
        NProgress.done();
      });
  };
}

export function deleteAccount(id) {
  return function(dispatch) {
    NProgress.start();
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
        if (error.response.status === 401) {
          window.location = '/signout';
        }
        dispatch({
          type: DELETE_RESULT,
          payload: error.response
        });
      })
      .then(() => {
        // Hide loader on request completion
        NProgress.done();
      });
  };
}
