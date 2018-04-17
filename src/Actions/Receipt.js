import axios from 'axios';
import { ROOT_URL } from './config';

export const GET_RECEIPT_DETAIL = 'GET_RECEIPT_DETAIL';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const TOGGLE_RECEIPT_DETAIL_LOADER = 'TOGGLE_RECEIPT_DETAIL_LOADER';

export function getReceiptDetail(id, history) {
  return function(dispatch) {
    dispatch({
      type: TOGGLE_RECEIPT_DETAIL_LOADER,
      payload: true
    });
    /* JWT determines the identity of the user */
    axios({
      method: 'GET',
      url: `${ROOT_URL}/api/receipt/` + id,
      headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
    })
      .then(response => {
        console.log(response);
        const receiptDetail = response.data.response;
        dispatch({
          type: GET_RECEIPT_DETAIL,
          payload: receiptDetail
        });
      })
      .catch(error => {
        let status = error.response.status;
        if (status === 401 || status === 404) {
          history.push('/receipts');
        }
      })
      .then(() => {
        // Hide loader on request completion
        dispatch({
          type: TOGGLE_RECEIPT_DETAIL_LOADER,
          payload: false
        });
      });
  };
}

export function deleteReceipt(id, callBack, history) {
  return function(dispatch) {
    /* JWT determines the identity of the user */
    axios({
      method: 'DELETE',
      url: `${ROOT_URL}/api/receipt/` + id,
      headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
    })
      .then(response => {
        callBack();
        history.push('/receipts');
      })
      .catch(error => {
        if (error.response.status === 401) {
          window.location = '/signout';
        }
      });
  };
}
