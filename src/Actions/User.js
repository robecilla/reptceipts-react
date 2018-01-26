import axios from 'axios';
export const SET_USER = 'set_user';
const ROOT_URL = 'https://reptceipts.com';

export function getUser() {
  return function(dispatch) {
    /* JWT determines the identity of the user */
    axios.defaults.headers.common['Authorization'] =
      'Bearer ' + localStorage.getItem('token');
    axios({
      method: 'GET',
      url: `${ROOT_URL}/api/user`
    })
      .then(response => {
        dispatch({
          type: SET_USER,
          payload: response.data.user
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

export function getUserReceipts() {
  return function(dispatch) {
    /* JWT determines the identity of the user */
    axios.defaults.headers.common['Authorization'] =
      'Bearer ' + localStorage.getItem('token');
    axios({
      method: 'GET',
      url: `${ROOT_URL}/api/user`
    })
      .then(response => {
        dispatch({
          type: SET_USER,
          payload: response.data.user
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
