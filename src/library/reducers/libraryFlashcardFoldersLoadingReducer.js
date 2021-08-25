import * as types from '../actions/actionTypes';

export default function libraryFlashcardFoldersLoadingReducer(state = false, action) {
  if (action.type === types.BEGIN_LIBRARY_FLASHCARD_FOLDERS_LOADING_AJAX_CALL) {
    return true;
  } else if (action.type === types.FLASHCARD_LIBRARY_FOLDERS_LOADING_AJAX_CALL_ERROR ||
    action.type === types.END_LIBRARY_FLASHCARD_FOLDERS_LOADING_AJAX_CALL) {
    return false;
  }

  return state;
}
