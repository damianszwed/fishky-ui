import * as types from './actionTypes';
import flashcardApi from '../proxy/flashcardApi'
import {beginFlashcardLoadingAjaxCall, endFlashcardLoadingAjaxCall, flashcardLoadingAjaxCallError} from './flashcardLoadingStatusActions';

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

export const loadFlashcardsSuccess = flashcards => ({
  type: types.LOAD_FLASHCARDS,
  flashcards
});

function pollingGetFlashcards(dispatch) {
  flashcardApi.getFlashcards().then(flashcards => {
    dispatch(loadFlashcardsSuccess(flashcards))
  }).catch(error => {
    dispatch(flashcardLoadingAjaxCallError(error));
    throw(error);
  });
}

function startPolling(dispatch) {
  setInterval(()=> pollingGetFlashcards(dispatch), 3000);
}

export const loadFlashcards = () => dispatch => {
  dispatch(beginFlashcardLoadingAjaxCall());
  return flashcardApi.getFlashcards().then(flashcards => {
    startPolling(dispatch);//TODO(Damian.Szwed) change to SSE in future
    dispatch(endFlashcardLoadingAjaxCall());
    dispatch(loadFlashcardsSuccess(flashcards))
  }).catch(error => {
    dispatch(flashcardLoadingAjaxCallError(error));
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
