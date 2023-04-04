import * as types from '../actions/actionTypes';

export default function libraryFlashcardFoldersLoadingReducer(state = false, action) {
  if (action.type === types.BEGIN_SEARCH_AJAX_CALL) {
    return true;
  } else if (action.type === types.SEARCH_AJAX_CALL_ERROR || action.type === types.END_SEARCH_AJAX_CALL) {
    return false;
  }

  return state;
}
