import { TOGGLE_LOGIN, SET_HIDDEN } from '../Actions';

export default function UIState(state = {}, action) {
  switch (action.type) {
    case TOGGLE_LOGIN:
      return { ...state, isLoginActive: action.isLoginActive };
    case SET_HIDDEN:
      return { ...state, isHidden: action.isHidden };
    default:
      return state;
  }
}
