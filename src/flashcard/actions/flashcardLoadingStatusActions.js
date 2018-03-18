import * as types from '../../app/actions/actionTypes';

export function beginFlashcardLoadingAjaxCall() {
  return {type: types.BEGIN_FLASHCARD_LOADING_AJAX_CALL};
}

export function endFlashcardLoadingAjaxCall() {
  return {type: types.END_FLASHCARD_LOADING_AJAX_CALL};
}

export function flashcardLoadingAjaxCallError() {
  return {type: types.FLASHCARD_LOADING_AJAX_CALL_ERROR};
}

