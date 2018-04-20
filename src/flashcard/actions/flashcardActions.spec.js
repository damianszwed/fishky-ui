import expect from 'expect';
import * as flashcardActions from './flashcardActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

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

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create BEGIN_FLASHCARD_LOADING_AJAX_CALL, END_FLASHCARD_LOADING_AJAX_CALL and LOAD_FLASHCARDS when loading flashcards', (done) => {
    // Here's an example call to nock.
    // nock('http://example.com/')
    //   .get('/courses')
    //   .reply(200, { body: { course: [{ id: 1, firstName: 'Cory', lastName: 'House'}] }});

    const store = mockStore({flashcards: []}, ``, done);
    store.dispatch(flashcardActions.loadFlashcards()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_FLASHCARD_LOADING_AJAX_CALL);
      expect(actions[1].type).toEqual(types.END_FLASHCARD_LOADING_AJAX_CALL);
      expect(actions[2].type).toEqual(types.LOAD_FLASHCARDS);
      done();
    });
  });
});
