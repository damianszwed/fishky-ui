import * as types from './actionTypes';

export function beginLibraryFlashcardFoldersLoadingAjaxCall() {
  return {type: types.BEGIN_LIBRARY_FLASHCARD_FOLDERS_LOADING_AJAX_CALL};
}

export function endLibraryFlashcardFoldersLoadingAjaxCall() {
  return {type: types.END_LIBRARY_FLASHCARD_FOLDERS_LOADING_AJAX_CALL};
}

export function libraryFlashcardFoldersLoadingAjaxCallError() {
  return {type: types.FLASHCARD_LIBRARY_FOLDERS_LOADING_AJAX_CALL_ERROR};
}

