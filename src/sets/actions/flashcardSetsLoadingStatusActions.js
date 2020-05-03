import * as types from './actionTypes';

export function beginFlashcardSetsLoadingAjaxCall() {
  return {type: types.BEGIN_FLASHCARD_SETS_LOADING_AJAX_CALL};
}

export function endFlashcardSetsLoadingAjaxCall() {
  return {type: types.END_FLASHCARD_SETS_LOADING_AJAX_CALL};
}

export function flashcardSetsLoadingAjaxCallError() {
  return {type: types.FLASHCARD_SETS_LOADING_AJAX_CALL_ERROR};
}

