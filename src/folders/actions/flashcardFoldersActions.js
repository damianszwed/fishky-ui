import * as types from './actionTypes';
import flashcardFoldersApi from '../proxy/flashcardFoldersApi'
import {
  beginFlashcardFoldersLoadingAjaxCall,
  endFlashcardFoldersLoadingAjaxCall,
  flashcardFoldersLoadingAjaxCallError
} from './flashcardFoldersLoadingStatusActions';

export const sseInitialized = () => ({
  type: types.SSE_INITIALIZED
});

export const loadFlashcardFolderSuccess = flashcardFolder => ({
  type: types.LOAD_FLASHCARD_FOLDER,
  flashcardFolder: flashcardFolder
});

export const loadFlashcardFoldersSuccess = flashcardFolders => ({
  type: types.LOAD_FLASHCARD_FOLDERS,
  flashcardFolders: flashcardFolders
});

function pollingFlashcardFolders(dispatch, getState) {
  console.log("Polling messages.");
  flashcardFoldersApi.getFlashcardFolders(getState().security.accessToken).then(flashcardFolders => {
    dispatch(loadFlashcardFoldersSuccess(flashcardFolders))
  }).catch(error => {
    dispatch(flashcardFoldersLoadingAjaxCallError(error));
    throw(error);
  });
}

function startBackupPolling(dispatch, getState) {
  console.log("Started backup polling.");
  setInterval(() => pollingFlashcardFolders(dispatch, getState), 30000);
}

function onFlashcardFolder(dispatch) {
  return event => {
    console.log("Received flashcard folder: " + event.data);
    dispatch(loadFlashcardFolderSuccess(JSON.parse(event.data)));
  };
}

function startSseListening(dispatch, getState) {
  console.log("Started sse listening.");
  flashcardFoldersApi.flashcardFoldersEventStream(onFlashcardFolder(dispatch), getState().security.accessToken);
}

export const loadFlashcardFolders = () => (dispatch, getState) => {
  if(getState().sseInitialized) {
    console.log("Application already initialized. Returning...");
    return;
  }
  console.log("Invoked a loadFlashcardFolders() method that should be invoked once at the start of the application.");
  dispatch(beginFlashcardFoldersLoadingAjaxCall());
  return flashcardFoldersApi.getFlashcardFolders(getState().security.accessToken).then(flashcardFolders => {
    if (process.env.NODE_ENV !== 'test' && !getState().sseInitialized) {
      console.log("Will start SSE and backup polling.");
      dispatch(sseInitialized());
      startBackupPolling(dispatch, getState);
      startSseListening(dispatch, getState);
    }
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
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateFlashcardInFolderSuccess(flashcard) {
  return {type: types.UPDATE_FLASHCARD_IN_FOLDER_SUCCESS, flashcard: flashcard};
}

export function modifyFlashcardInFolder(flashcard, flashcardFolderId) {
  return function (dispatch, getState) {
    dispatch(updateFlashcardInFolderSuccess(flashcard));
    return flashcardFoldersApi.updateFlashcardInFolder(getState().security.accessToken, flashcard, flashcardFolderId).then(res => {
      console.log("Flashcard " + flashcard.question + " update command has been accepted.");
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
    }).catch(error => {
      throw(error);
    });
  };
}
