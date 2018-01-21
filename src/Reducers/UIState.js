import { OPEN_LOGIN } from '../Actions';

export default function UIState(state = {}, action) {
  switch (action.type) {
    case OPEN_LOGIN:
      return { ...state, isLoginActive: true };
    default:
      return state;
  }
}
