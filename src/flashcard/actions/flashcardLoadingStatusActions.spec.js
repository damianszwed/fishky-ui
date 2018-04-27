import expect from 'expect';
import * as flashcardLoadingStatusActions from './flashcardLoadingStatusActions';
import * as types from './actionTypes';

describe('Flashcard Loading Status Actions', () => {
  describe('beginFlashcardLoadingAjaxCall', () => {
    it('should create a BEGIN_FLASHCARD_LOADING_AJAX_CALL action', () => {
      const expectedAction = {
        type: types.BEGIN_FLASHCARD_LOADING_AJAX_CALL
      };

      const action = flashcardLoadingStatusActions.beginFlashcardLoadingAjaxCall();

      expect(action).toEqual(expectedAction);
    });
  });

  describe('endFlashcardLoadingAjaxCall', () => {
    it('should create a END_FLASHCARD_LOADING_AJAX_CALL action', () => {
      const expectedAction = {
        type: types.END_FLASHCARD_LOADING_AJAX_CALL
      };

      const action = flashcardLoadingStatusActions.endFlashcardLoadingAjaxCall();

      expect(action).toEqual(expectedAction);
    });
  });

  describe('flashcardLoadingAjaxCallError', () => {
    it('should create a FLASHCARD_LOADING_AJAX_CALL_ERROR action', () => {
      const expectedAction = {
        type: types.FLASHCARD_LOADING_AJAX_CALL_ERROR
      };

      const action = flashcardLoadingStatusActions.flashcardLoadingAjaxCallError();

      expect(action).toEqual(expectedAction);
    });
  });
});
