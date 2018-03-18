import * as flashcardACtions from './flashcardActions';
import * as types from '../../app/actions/actionTypes';

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
      const action = flashcardACtions.createFlashcardSuccess(flashcard);

      //THEN
      expect(action).toEqual(expectedAction);
    });
  });
});
