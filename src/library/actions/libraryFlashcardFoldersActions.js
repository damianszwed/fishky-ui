import * as types from './actionTypes';
import flashcardFoldersApi from '../proxy/libraryFlashcardFoldersApi'
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
/*
  if(getState().sseInitialized) {
    console.log("Application already initialized. Returning...");
    return new Promise(function(resolve, reject) {
        resolve("Application already initialized. Returned positive promise.");
    });
  }
*/
  console.log("Invoked a loadLibraryFlashcardFolders() method that should be invoked once at the start of the application.");
  dispatch(beginLibraryFlashcardFoldersLoadingAjaxCall());
  return flashcardFoldersApi.getLibraryFlashcardFolders().then(libraryFlashcardFolders => {
    dispatch(endLibraryFlashcardFoldersLoadingAjaxCall());
    dispatch(loadLibraryFlashcardFoldersSuccess(libraryFlashcardFolders));
    return "Loaded library flashcard folders.";
  }).catch(error => {
    dispatch(libraryFlashcardFoldersLoadingAjaxCallError(error));
    throw(error);
  });
};
