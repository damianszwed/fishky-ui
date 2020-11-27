import expect from 'expect';
import * as flashcardFoldersLoadingStatusActions from './flashcardFoldersLoadingStatusActions';
import * as types from './actionTypes';

describe('Flashcard Folders Loading Status Actions', () => {
  describe('beginFlashcardFoldersLoadingAjaxCall', () => {
    it('should create a BEGIN_FLASHCARD_FOLDERS_LOADING_AJAX_CALL action', () => {
      const expectedAction = {
        type: types.BEGIN_FLASHCARD_FOLDERS_LOADING_AJAX_CALL
      };

      const action = flashcardFoldersLoadingStatusActions.beginFlashcardFoldersLoadingAjaxCall();

      expect(action).toEqual(expectedAction);
    });
  });

  describe('endFlashcardFoldersLoadingAjaxCall', () => {
    it('should create a END_FLASHCARD_FOLDERS_LOADING_AJAX_CALL action', () => {
      const expectedAction = {
        type: types.END_FLASHCARD_FOLDERS_LOADING_AJAX_CALL
      };

      const action = flashcardFoldersLoadingStatusActions.endFlashcardFoldersLoadingAjaxCall();

      expect(action).toEqual(expectedAction);
    });
  });

  describe('flashcardFoldersLoadingAjaxCallError', () => {
    it('should create a FLASHCARD_FOLDERS_LOADING_AJAX_CALL_ERROR action', () => {
      const expectedAction = {
        type: types.FLASHCARD_FOLDERS_LOADING_AJAX_CALL_ERROR
      };

      const action = flashcardFoldersLoadingStatusActions.flashcardFoldersLoadingAjaxCallError();

      expect(action).toEqual(expectedAction);
    });
  });
});
