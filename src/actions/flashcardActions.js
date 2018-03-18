import * as types from './actionTypes';
import flashcardApi from '../proxy/mockFlashcardApi'
import {beginAjaxCall, endAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function createFlashcardSuccess(flashcard) {
  return {type: types.CREATE_FLASHCARD_SUCCESS, flashcard};
}

export function saveFlashcard(flashcard) {
  return function (dispatch, getState) {
    dispatch(createFlashcardSuccess(flashcard));
    return flashcardApi.saveFlashcard(flashcard).then(flashcard => {
    }).catch(error => {
      //TODO you can dispatch here rollback operation
      throw(error);
    });
  };
}

const loadFlashcardsSuccess = flashcards => ({
  type: types.LOAD_FLASHCARDS,
  flashcards
});

export const loadFlashcards = () => dispatch => {
  dispatch(beginAjaxCall());
  flashcardApi.getFlashcards().then(flashcards => {
    dispatch(endAjaxCall());
    dispatch(loadFlashcardsSuccess(flashcards))
  }).catch(error => {
    dispatch(ajaxCallError(error));
    console.log(error);
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
    return flashcardApi.deleteFlashcard(flashcard.id).then(() => {
    }).catch(error => {
      //TODO you can dispatch here rollback operation
      throw(error);
    });
  };
}
