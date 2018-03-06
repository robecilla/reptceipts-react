import { TOGGLE_LOGIN } from '../Actions';

export default function UIState(state = {}, action) {
  switch (action.type) {
    case TOGGLE_LOGIN:
      return { ...state, isLoginActive: action.isLoginActive };
    default:
      return state;
  }
}
