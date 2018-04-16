import * as flashcardActions from './flashcardActions';
import * as types from './actionTypes';

// Test a sync action
describe('Flashcard Actions', () => {
  describe('createFlashcardSuccess', () => {
    it('should create a CREATE_FLASHCARD_SUCCESS action', () => {
      //GIVEN
      const flashcard = {question: 'theQuestion', answer: 'theAnswer'};
      const expectedAction = {
        type: types.CREATE_FLASHCARD_SUCCESS,
        flashcard: flashcard
      };

      //WHEN
      const action = flashcardActions.createFlashcardSuccess(flashcard);

      //THEN
      expect(action).toEqual(expectedAction);
    });
  });

  describe('loadFlashcardsSuccess', () => {
    it('should create a LOAD_FLASHCARDS action', () => {
      //GIVEN
      const flashcards = [{question: 'theQuestion', answer: 'theAnswer'}];
      const expectedAction = {
        type: types.LOAD_FLASHCARDS,
        flashcards: flashcards
      };

      //WHEN
      const action = flashcardActions.loadFlashcardsSuccess(flashcards);

      //THEN
      expect(action).toEqual(expectedAction);
    });
  });
});
