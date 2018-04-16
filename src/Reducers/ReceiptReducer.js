import {
  GET_RECEIPT_DETAIL,
  DELETE_SUCCESS,
  TOGGLE_RECEIPT_DETAIL_LOADER
} from '../Actions/Receipt';

export default function ReceiptReducer(state = {}, action) {
  switch (action.type) {
    case GET_RECEIPT_DETAIL:
      return { ...state, receiptDetail: action.payload };
    case DELETE_SUCCESS:
      return { ...state, deleted: action.response };
    case TOGGLE_RECEIPT_DETAIL_LOADER:
      return { ...state, isDetailLoading: action.payload };
    default:
      return state;
  }
}
