import expect from 'expect';

import * as types from "./actionTypes";
import * as flashcardFoldersActions from './flashcardFoldersActions';

describe('Flashcard Folders Actions', () => {
  describe('createFlashcardFolderSuccess', () => {
    it('should create a CREATE_FLASHCARD_FOLDER_SUCCESS action', function () {
      //GIVEN
      const flashcardFolder = {};
      const expectedAction = {
        type: types.CREATE_FLASHCARD_FOLDER_SUCCESS,
        flashcardFolder: flashcardFolder
      };

      //WHEN
      const action = flashcardFoldersActions.createFlashcardFolderSuccess(flashcardFolder);

      //THEN
      expect(action).toEqual(expectedAction);
    });
  });

  describe('loadFlashcardFoldersSuccess', function () {
    it('should create a LOAD_FLASHCARD_FOLDERS action', () => {
      //GIVEN
      const flashcardFolders = [{}];
      const expectedAction = {
        type: types.LOAD_FLASHCARD_FOLDERS,
        flashcardFolders: flashcardFolders
      };

      //WHEN
      const action = flashcardFoldersActions.loadFlashcardFoldersSuccess(flashcardFolders);

      //THEN
      expect(action).toEqual(expectedAction);
    });
  });
});
