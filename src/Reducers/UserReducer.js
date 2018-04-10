import {
  SET_USER,
  GET_USER_RECEIPTS,
  UPDATE_RESULT,
  DELETE_RESULT
} from '../Actions/User';

export default function UserReducer(state = {}, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case GET_USER_RECEIPTS:
      return { ...state, receipts: action.payload };
    case UPDATE_RESULT:
      return { ...state, updateResult: action.payload };
    case DELETE_RESULT:
      return { ...state, deleteResult: action.payload };
    default:
      return state;
  }
}
