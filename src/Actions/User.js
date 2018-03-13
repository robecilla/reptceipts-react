import axios from 'axios';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
export const SET_USER = 'SET_USER';
export const GET_USER_RECEIPTS = 'GET_USER_RECEIPTS';

const ROOT_URL = 'https://reptceipts.com';

export function getUser() {
  return function(dispatch) {
    dispatch(showLoading());
    /* JWT determines the identity of the user */
    axios.defaults.headers.common['Authorization'] =
      'Bearer ' + localStorage.getItem('token');
    axios({
      method: 'GET',
      url: `${ROOT_URL}/api/user`
    })
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          dispatch(hideLoading());
          dispatch({
            type: SET_USER,
            payload: response.data.user
          });
        }

        if (response.status === 401) {
          window.location = '/signout';
        }
      })
      .catch(error => {
        if (error.response) {
          //dispatch(authError(error.response.data));
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

export function getUserReceipts() {
  return function(dispatch) {
    dispatch(showLoading());
    /* JWT determines the identity of the user */
    axios.defaults.headers.common['Authorization'] =
      'Bearer ' + localStorage.getItem('token');
    axios({
      method: 'GET',
      url: `${ROOT_URL}/api/receipt`
    })
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          dispatch(hideLoading());
          dispatch({
            type: GET_USER_RECEIPTS,
            payload: response.data
          });
        }

        if (response.status === 401) {
          window.location = '/signout';
        }
      })
      .catch(error => {
        if (error.response) {
          //dispatch(authError(error.response.data));
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
