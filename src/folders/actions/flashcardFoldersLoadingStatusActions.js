import * as types from './actionTypes';

export function beginFlashcardFoldersLoadingAjaxCall() {
  return {type: types.BEGIN_FLASHCARD_FOLDERS_LOADING_AJAX_CALL};
}

export function endFlashcardFoldersLoadingAjaxCall() {
  return {type: types.END_FLASHCARD_FOLDERS_LOADING_AJAX_CALL};
}

export function flashcardFoldersLoadingAjaxCallError() {
  return {type: types.FLASHCARD_FOLDERS_LOADING_AJAX_CALL_ERROR};
}

