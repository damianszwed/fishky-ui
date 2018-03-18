import * as types from '../../actions/actionTypes';

export default function flashcardLoadingReducer(state = false, action) {
  if (action.type === types.BEGIN_FLASHCARD_LOADING_AJAX_CALL) {
    return true;
  } else if (action.type === types.FLASHCARD_LOADING_AJAX_CALL_ERROR ||
    action.type === types.END_FLASHCARD_LOADING_AJAX_CALL) {
    return false;
  }

  return state;
}
