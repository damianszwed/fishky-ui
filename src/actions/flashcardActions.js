import * as types from './actionTypes';
import flashcardApi from "../api/mockFlashcardApi";
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function createFlashcardSuccess(flashcard) {
  return {type: types.CREATE_FLASHCARD_SUCCESS, flashcard};
}

export function saveFlashcard(flashcard) {
  return function (dispatch, getState) {
    dispatch(createFlashcardSuccess(flashcard));
    dispatch(beginAjaxCall());
    return flashcardApi.saveFlashcard(flashcard).then(flashcard => {
      // flashcard.id ? dispatch(updateFlashcardSuccess(flashcard)) :

    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

const loadFlashcardsSuccess = flashcards => ({
  type: types.LOAD_FLASHCARDS,
  flashcards
});

export const loadFlashcards = () => dispatch => {
  flashcardApi.getFlashcards().then(flashcards => {
    dispatch(loadFlashcardsSuccess(flashcards))
  }).catch(error => {
    throw(error);
  });
};
