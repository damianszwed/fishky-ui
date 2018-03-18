import reducer from './flashcardReducer'
import * as types from '../../app/actions/actionTypes';
import * as actions from '../actions/flashcardActions'

describe('flashcardReducer', () => {
  it('should add flashcard when passed CREATE_FLASHCARD_SUCCESS', () => {
    // arrange
    const initialState = [
      {whatever: 'whateverA'},
      {whatever: 'whateverB'}
    ];

    const newFlashcard = {whatever: 'whateverC'};

    const action = actions.createFlashcardSuccess(newFlashcard);

    //act
    const newState = reducer(initialState, action);

    //assert
    expect(newState.length).toEqual(3);
    expect(newState[0].whatever).toEqual('whateverA');
    expect(newState[1].whatever).toEqual('whateverB');
    expect(newState[2].whatever).toEqual('whateverC');
  });

  describe('when flashcards are loaded', () => {
    let state;
    beforeEach(() => {
      state = reducer({}, {
        type: types.LOAD_FLASHCARDS,
        flashcards: [
          {
            question: 'questionA',
            answer: 'answerA'
          },
          {
            question: 'questionB',
            answer: 'answerB'
          }
        ]
      })
    });

    it('lists all of the flashcards as visible', () => {
      expect(state).toEqual(
        [
          {
            question: 'questionA',
            answer: 'answerA'
          },
          {
            question: 'questionB',
            answer: 'answerB'
          }]
      )
    });
  })
});
