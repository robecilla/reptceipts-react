import {
  AUTH_USER,
  UNAUTH_USER,
  REGISTER_ERROR,
  LOGIN_ERROR
} from '../Actions/Auth';

export default function authReducer(state = {}, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, error: '', authenticated: true };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    case REGISTER_ERROR:
      return { ...state, registerError: action.payload };
    case LOGIN_ERROR:
      return { ...state, loginError: action.payload };
    default:
      return state;
  }
}
