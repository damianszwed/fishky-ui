import * as types from '../actions/actionTypes';

export default function libraryFlashcardFoldersReducer(state = [], action) {
  switch (action.type) {

    case types.LOAD_LIBRARY_FLASHCARD_FOLDERS:
      return action.libraryFlashcardFolders;

    default:
      return state;
  }
};
