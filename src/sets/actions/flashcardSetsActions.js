import * as types from './actionTypes';
import flashcardSetsApi from '../proxy/flashcardSetsApi'
import {
  beginFlashcardSetsLoadingAjaxCall,
  endFlashcardSetsLoadingAjaxCall,
  flashcardSetsLoadingAjaxCallError
} from './flashcardSetsLoadingStatusActions';

export function createFlashcardSetSuccess(flashcardSet) {
  return {type: types.CREATE_FLASHCARD_SET_SUCCESS, flashcardSet: flashcardSet};
}

export function saveFlashcardSet(flashcardSet) {
  return function (dispatch, getState) {
    flashcardSet.flashcards = [];
    flashcardSet.id = "placeholder";
    dispatch(createFlashcardSetSuccess(flashcardSet));
    return flashcardSetsApi.saveFlashcardSet(getState().security.accessToken, flashcardSet).then(flashcardSet => {
      console.log("Flashcard set " + flashcardSet.name + " save command has been accepted.");
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveFlashcardInSetSuccess(flashcard) {
  return {type: types.SAVE_FLASHCARD_IN_SET_SUCCESS, flashcard: flashcard};
}

export function saveFlashcardInSet(flashcard, flashcardSetId) {
  return function (dispatch, getState) {
    dispatch(saveFlashcardInSetSuccess(flashcard));
    return flashcardSetsApi.saveFlashcardInSet(getState().security.accessToken, flashcard, flashcardSetId).then(flashcard => {
      console.log("Flashcard " + flashcard.question + " save command has been accepted.");
    }).catch(error => {
      throw(error);
    });
  };
}

export function deleteFlashcardFromSetSuccess(flashcard) {
  return {type: types.DELETE_FLASHCARD_FROM_SET_SUCCESS, flashcard: flashcard};
}

export function deleteFlashcardFromSet(flashcard, flashcardSetId) {
  return function (dispatch, getState) {
    dispatch(deleteFlashcardFromSetSuccess(flashcard));
    return flashcardSetsApi.deleteFlashcardFromSet(getState().security.accessToken, flashcard.id,
      flashcardSetId).then(flashcard => {
      console.log("Flashcard " + flashcard.question
        + " delete command has been accepted.");
    }).catch(error => {
      throw(error);
    });
  };
}

export const loadFlashcardSetsSuccess = flashcardSets => ({
  type: types.LOAD_FLASHCARD_SETS,
  flashcardSets: flashcardSets
});

function pollingFlashcardSets(dispatch, getState) {
  flashcardSetsApi.getFlashcardSets(getState().security.accessToken).then(flashcardSets => {
    dispatch(loadFlashcardSetsSuccess(flashcardSets))
  }).catch(error => {
    dispatch(flashcardSetsLoadingAjaxCallError(error));
    throw(error);
  });
}

function startPolling(dispatch, getState) {
  setInterval(() => pollingFlashcardSets(dispatch, getState), 3000);
}

export const loadFlashcardSets = () => (dispatch, getState) => {
  dispatch(beginFlashcardSetsLoadingAjaxCall());
  return flashcardSetsApi.getFlashcardSets(getState().security.accessToken).then(flashcardSets => {
    setTimeout(function () {
      if (process.env.NODE_ENV !== 'test') {
        startPolling(dispatch, getState);//TODO(Damian.Szwed) change to SSE in future
      }
      dispatch(endFlashcardSetsLoadingAjaxCall());
      dispatch(loadFlashcardSetsSuccess(flashcardSets))
    }, 20);//TODO(Damian.Szwed) delay for testing purpose. Remember to remove it.
  }).catch(error => {
    dispatch(flashcardSetsLoadingAjaxCallError(error));
    throw(error);
  });
};

const deleteFlashcardSetSuccess = flashcardSet => ({
  type: types.DELETE_FLASHCARD_SET_SUCCESS,
  flashcardSet: flashcardSet
});

export function deleteFlashcardSet(flashcardSet) {
  return function (dispatch, getState) {
    dispatch(deleteFlashcardSetSuccess(flashcardSet));
    return flashcardSetsApi.deleteFlashcardSet(getState().security.accessToken, flashcardSet.id).then(() => {
    }).catch(error => {
      throw(error);
    });
  };
}
