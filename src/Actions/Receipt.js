import axios from 'axios';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { ROOT_URL } from './config';

export const GET_RECEIPT_DETAIL = 'GET_RECEIPT_DETAIL';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';

export function getReceiptDetail(id) {
  return function(dispatch) {
    dispatch(showLoading());
    /* JWT determines the identity of the user */
    axios({
      method: 'GET',
      url: `${ROOT_URL}/api/receipt/` + id,
      headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
    })
      .then(response => {
        const receiptDetail = response.data.response;
        dispatch({
          type: GET_RECEIPT_DETAIL,
          payload: receiptDetail
        });
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
      })
      .then(() => {
        // Hide loader on request completion
        dispatch(hideLoading());
      });
  };
}

export function deleteReceipt(id) {
  return function(dispatch) {
    dispatch(showLoading());
    /* JWT determines the identity of the user */
    axios({
      method: 'DELETE',
      url: `${ROOT_URL}/api/receipt/` + id,
      headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
    })
      .then(response => {
        dispatch({
          type: DELETE_SUCCESS,
          response: true
        });
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
      })
      .then(() => {
        // Hide loader on request completion
        dispatch(hideLoading());
      });
  };
}
