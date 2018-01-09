import { TOGGLE_LOGIN } from '../Actions/index';

function login(state = false, action) {
  switch (action.type) {
    case TOGGLE_LOGIN:
      return !state;
    default:
      return state;
  }
}

export default login;
