import reducer, * as flashcards from './flashcardReducer'
import * as types from '../actions/actionTypes';

describe('flashcardReducer', () => {
  describe('flashcards', () => {
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
  })
});
