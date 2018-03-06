import { OPEN_LOGIN, CLOSE_LOGIN } from '../Actions';

export default function UIState(state = {}, action) {
  switch (action.type) {
    case OPEN_LOGIN:
      return { ...state, isLoginActive: true };
    case CLOSE_LOGIN:
      return { ...state, isLoginActive: false };
    default:
      return state;
  }
}
