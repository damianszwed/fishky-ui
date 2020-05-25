import * as types from './actionTypes';
import flashcardSetsApi from '../proxy/flashcardSetsApi'
import {
  beginFlashcardSetsLoadingAjaxCall,
  endFlashcardSetsLoadingAjaxCall,
  flashcardSetsLoadingAjaxCallError
} from './flashcardSetsLoadingStatusActions';

export const loadFlashcardSetsSuccess = flashcardSets => ({
  type: types.LOAD_FLASHCARD_SETS,
  flashcardSets: flashcardSets
});

export const loadFlashcardSets = () => (dispatch, getState) => {
  dispatch(beginFlashcardSetsLoadingAjaxCall());
  return flashcardSetsApi.getFlashcardSets(getState().security.accessToken).then(flashcardSets => {
    dispatch(endFlashcardSetsLoadingAjaxCall());
    dispatch(loadFlashcardSetsSuccess(flashcardSets))
  }).catch(error => {
    dispatch(flashcardSetsLoadingAjaxCallError(error));
    throw(error);
  });
};

export function createFlashcardSetSuccess(flashcardSet) {
  return {type: types.CREATE_FLASHCARD_SET_SUCCESS, flashcardSet: flashcardSet};
}

export function saveFlashcardSet(flashcardSet) {
  return function (dispatch, getState) {
    flashcardSet.flashcards = [];
    flashcardSet.id = "placeholder";
    dispatch(createFlashcardSetSuccess(flashcardSet));
    return flashcardSetsApi.saveFlashcardSet(getState().security.accessToken, flashcardSet).then(res => {
      console.log("Flashcard set " + flashcardSet.name + " save command has been accepted.");
      dispatch(loadFlashcardSets());
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
    return flashcardSetsApi.saveFlashcardInSet(getState().security.accessToken, flashcard, flashcardSetId).then(res => {
      console.log("Flashcard " + flashcard.question + " save command has been accepted.");
      dispatch(loadFlashcardSets());
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
      flashcardSetId).then(res => {
      console.log("Flashcard " + flashcard.question + " delete command has been accepted.");
      dispatch(loadFlashcardSets());
    }).catch(error => {
      throw(error);
    });
  };
}

const deleteFlashcardSetSuccess = flashcardSet => ({
  type: types.DELETE_FLASHCARD_SET_SUCCESS,
  flashcardSet: flashcardSet
});

export function deleteFlashcardSet(flashcardSet) {
  return function (dispatch, getState) {
    dispatch(deleteFlashcardSetSuccess(flashcardSet));
    return flashcardSetsApi.deleteFlashcardSet(getState().security.accessToken, flashcardSet.id).then(() => {
      dispatch(loadFlashcardSets());
    }).catch(error => {
      throw(error);
    });
  };
}
