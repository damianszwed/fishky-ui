import * as types from '../actions/actionTypes';

export default function ajaxStatusReducer(state = false, action) {
  if (action.type === types.BEGIN_AJAX_CALL) {
    return true;
  } else if (action.type === types.AJAX_CALL_ERROR ||
    action.type === types.END_AJAX_CALL) {
    return false;
  }

  return state;
}
