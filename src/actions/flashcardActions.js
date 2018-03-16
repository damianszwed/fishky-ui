import * as types from './actionTypes';
import mockFlashcardApi from '../proxy/mockFlashcardApi';
import flashcardApi from '../proxy/flashcardApi'
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

// const api = flashcardApi;
const api = mockFlashcardApi;

export function createFlashcardSuccess(flashcard) {
  return {type: types.CREATE_FLASHCARD_SUCCESS, flashcard};
}

export function saveFlashcard(flashcard) {
  return function (dispatch, getState) {
    dispatch(createFlashcardSuccess(flashcard));
    dispatch(beginAjaxCall());
    return api.saveFlashcard(flashcard).then(flashcard => {
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
  api.getFlashcards().then(flashcards => {
    dispatch(loadFlashcardsSuccess(flashcards))
  }).catch(error => {
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
    dispatch(beginAjaxCall());
    return api.deleteFlashcard(flashcard.id).then(() => {
    }).catch(error => {
      //TODO you can dispatch here rollback operation
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
