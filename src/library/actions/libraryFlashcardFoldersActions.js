import * as types from './actionTypes';
import libraryFlashcardFoldersApi from '../proxy/libraryFlashcardFoldersApi'
import {
  beginLibraryFlashcardFoldersLoadingAjaxCall,
  endLibraryFlashcardFoldersLoadingAjaxCall,
  libraryFlashcardFoldersLoadingAjaxCallError
} from './libraryFlashcardFoldersLoadingStatusActions';

export const loadLibraryFlashcardFoldersSuccess = libraryFlashcardFolders => ({
  type: types.LOAD_LIBRARY_FLASHCARD_FOLDERS,
  libraryFlashcardFolders: libraryFlashcardFolders
});

export const loadLibraryFlashcardFolders = () => (dispatch, getState) => {
  console.log("Invoked a loadLibraryFlashcardFolders() method that should be invoked once at the start of the application.");
  dispatch(beginLibraryFlashcardFoldersLoadingAjaxCall());
  return libraryFlashcardFoldersApi.getLibraryFlashcardFolders().then(libraryFlashcardFolders => {
    dispatch(endLibraryFlashcardFoldersLoadingAjaxCall());
    dispatch(loadLibraryFlashcardFoldersSuccess(libraryFlashcardFolders));
    return "Loaded library flashcard folders.";
  }).catch(error => {
    dispatch(libraryFlashcardFoldersLoadingAjaxCallError(error));
    throw(error);
  });
};

export const copyLibraryFolder = (flashcardFolder) => (dispatch, getState) => {
  return libraryFlashcardFoldersApi.copyLibraryFolder(getState().security.accessToken, flashcardFolder).then(() => {
    return "Copied library folder.";
  }).catch(error => {
    throw(error);
  });
};
