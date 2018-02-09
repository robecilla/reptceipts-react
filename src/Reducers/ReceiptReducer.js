import { GET_RECEIPT_DETAIL } from '../Actions/Receipt';

export default function ReceiptReducer(state = {}, action) {
  switch (action.type) {
    case GET_RECEIPT_DETAIL:
      return { ...state, receiptDetail: action.payload };
    default:
      return state;
  }
}
