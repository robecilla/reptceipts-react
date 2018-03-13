import axios from 'axios';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
export const GET_RECEIPT_DETAIL = 'GET_RECEIPT_DETAIL';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
const ROOT_URL = 'https://reptceipts.com';

export function getReceiptDetail(id) {
  return function(dispatch) {
    dispatch(showLoading());
    /* JWT determines the identity of the user */
    axios.defaults.headers.common['Authorization'] =
      'Bearer ' + localStorage.getItem('token');
    axios({
      method: 'GET',
      url: `${ROOT_URL}/api/receipt/` + id
    })
      .then(response => {
        dispatch(hideLoading());
        const receiptDetail = response.data;
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
      });
  };
}

export function deleteReceipt(id) {
  return function(dispatch) {
    dispatch(showLoading());
    /* JWT determines the identity of the user */
    axios.defaults.headers.common['Authorization'] =
      'Bearer ' + localStorage.getItem('token');
    axios({
      method: 'DELETE',
      url: `${ROOT_URL}/api/receipt/` + id
    })
      .then(response => {
        dispatch(hideLoading());
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
      });
  };
}
