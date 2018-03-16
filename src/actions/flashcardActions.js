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
    }).catch(error => {
      //TODO you can dispatch here rollback operation
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

const deleteFlashcardSuccess = flashcard => ({
  type: types.DELETE_FLASHCARD_SUCCESS,
  flashcard
});

export function deleteFlashcard(flashcard) {
  return function (dispatch, getState) {
    dispatch(deleteFlashcardSuccess(flashcard));
    dispatch(beginAjaxCall());
    return flashcardApi.deleteFlashcard(flashcard.id).then(() => {
    }).catch(error => {
      //TODO you can dispatch here rollback operation
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
