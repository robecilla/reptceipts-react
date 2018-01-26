import { SET_USER } from '../Actions/User';

export default function UserReducer(state = {}, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
