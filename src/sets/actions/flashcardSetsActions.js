import * as types from './actionTypes';
import flashcardSetsApi from '../proxy/flashcardSetsApi'
import {beginFlashcardSetsLoadingAjaxCall, endFlashcardSetsLoadingAjaxCall, flashcardSetsLoadingAjaxCallError} from './flashcardSetsLoadingStatusActions';

export function createFlashcardSetSuccess(flashcardSet) {
  return {type: types.CREATE_FLASHCARD_SET_SUCCESS, flashcardSet: flashcardSet};
}

export function saveFlashcardSet(flashcardSet) {
  return function (dispatch, getState) {
    flashcardSet.flashcards = [];
    flashcardSet.id = "placeholder";
    dispatch(createFlashcardSetSuccess(flashcardSet));
    return flashcardSetsApi.saveFlashcardSet(flashcardSet).then(flashcardSet => {
      console.log("flashcardSet " + flashcardSet.name + " save command has been accepted.");
    }).catch(error => {
      throw(error);
    });
  };
}

export const loadFlashcardSetsSuccess = flashcardSets => ({
  type: types.LOAD_FLASHCARD_SETS,
  flashcardSets: flashcardSets
});

function pollingFlashcardSets(dispatch) {
  flashcardSetsApi.getFlashcardSets().then(flashcardSets => {
    dispatch(loadFlashcardSetsSuccess(flashcardSets))
  }).catch(error => {
    dispatch(flashcardSetsLoadingAjaxCallError(error));
    throw(error);
  });
}

function startPolling(dispatch) {
  setInterval(()=> pollingFlashcardSets(dispatch), 3000);
}

export const loadFlashcardSets = () => dispatch => {
  dispatch(beginFlashcardSetsLoadingAjaxCall());
  return flashcardSetsApi.getFlashcardSets().then(flashcardSets => {
    setTimeout(function() {
      startPolling(dispatch);//TODO(Damian.Szwed) change to SSE in future
      dispatch(endFlashcardSetsLoadingAjaxCall());
      dispatch(loadFlashcardSetsSuccess(flashcardSets))
    }, 50);//TODO(Damian.Szwed) delay for testing purpose. Remember to remove it.
  }).catch(error => {
    dispatch(flashcardSetsLoadingAjaxCallError(error));
    throw(error);
  });
};

const deleteFlashcardSetSuccess = flashcardSet => ({
  type: types.DELETE_FLASHCARD_SET_SUCCESS,
  flashcardSet: flashcardSet
});

export function deleteFlashcardSet(flashcardSetId) {
  return function (dispatch, getState) {
    dispatch(deleteFlashcardSetSuccess(flashcardSetId));
    return flashcardSetsApi.deleteFlashcardSet(flashcardSetId).then(() => {
    }).catch(error => {
      throw(error);
    });
  };
}
