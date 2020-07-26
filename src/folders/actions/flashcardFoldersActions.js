import * as types from './actionTypes';
import flashcardFoldersApi from '../proxy/flashcardFoldersApi'
import {
  beginFlashcardFoldersLoadingAjaxCall,
  endFlashcardFoldersLoadingAjaxCall,
  flashcardFoldersLoadingAjaxCallError
} from './flashcardFoldersLoadingStatusActions';

export const loadFlashcardFoldersSuccess = flashcardFolders => ({
  type: types.LOAD_FLASHCARD_FOLDERS,
  flashcardFolders: flashcardFolders
});

export const loadFlashcardFolders = () => (dispatch, getState) => {
  dispatch(beginFlashcardFoldersLoadingAjaxCall());
  return flashcardFoldersApi.getFlashcardFolders(getState().security.accessToken).then(flashcardFolders => {
    dispatch(endFlashcardFoldersLoadingAjaxCall());
    dispatch(loadFlashcardFoldersSuccess(flashcardFolders))
  }).catch(error => {
    dispatch(flashcardFoldersLoadingAjaxCallError(error));
    throw(error);
  });
};

export function createFlashcardFolderSuccess(flashcardFolder) {
  return {type: types.CREATE_FLASHCARD_FOLDER_SUCCESS, flashcardFolder: flashcardFolder};
}

export function saveFlashcardFolder(flashcardFolder) {
  return function (dispatch, getState) {
    flashcardFolder.flashcards = [];
    flashcardFolder.id = "placeholder";
    dispatch(createFlashcardFolderSuccess(flashcardFolder));
    return flashcardFoldersApi.saveFlashcardFolder(getState().security.accessToken, flashcardFolder).then(res => {
      console.log("Flashcard folder " + flashcardFolder.name + " save command has been accepted.");
      dispatch(loadFlashcardFolders());
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveFlashcardInFolderSuccess(flashcard) {
  return {type: types.SAVE_FLASHCARD_IN_FOLDER_SUCCESS, flashcard: flashcard};
}

export function saveFlashcardInFolder(flashcard, flashcardFolderId) {
  return function (dispatch, getState) {
    dispatch(saveFlashcardInFolderSuccess(flashcard));
    return flashcardFoldersApi.saveFlashcardInFolder(getState().security.accessToken, flashcard, flashcardFolderId).then(res => {
      console.log("Flashcard " + flashcard.question + " save command has been accepted.");
      dispatch(loadFlashcardFolders());
    }).catch(error => {
      throw(error);
    });
  };
}

export function deleteFlashcardFromFolderSuccess(flashcard) {
  return {type: types.DELETE_FLASHCARD_FROM_FOLDER_SUCCESS, flashcard: flashcard};
}

export function deleteFlashcardFromFolder(flashcard, flashcardFolderId) {
  return function (dispatch, getState) {
    dispatch(deleteFlashcardFromFolderSuccess(flashcard));
    return flashcardFoldersApi.deleteFlashcardFromFolder(getState().security.accessToken, flashcard.id,
      flashcardFolderId).then(res => {
      console.log("Flashcard " + flashcard.question + " delete command has been accepted.");
      dispatch(loadFlashcardFolders());
    }).catch(error => {
      throw(error);
    });
  };
}

const deleteFlashcardFolderSuccess = flashcardFolder => ({
  type: types.DELETE_FLASHCARD_FOLDER_SUCCESS,
  flashcardFolder: flashcardFolder
});

export function deleteFlashcardFolder(flashcardFolder) {
  return function (dispatch, getState) {
    dispatch(deleteFlashcardFolderSuccess(flashcardFolder));
    return flashcardFoldersApi.deleteFlashcardFolder(getState().security.accessToken, flashcardFolder.id).then(() => {
      dispatch(loadFlashcardFolders());
    }).catch(error => {
      throw(error);
    });
  };
}
