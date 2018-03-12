import reducer, * as flashcards from './flashcards'

describe('reducers', () => {
  describe('flashcards', () => {
    let state;

    describe('when flashcards are received', () => {

      beforeEach(() => {
        state = reducer({}, {
          type: 'RECEIVE_FLASHCARDS',
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

      it('lists all of the products as visible', () => {
        expect(flashcards.getFlashcards(state)).toEqual(
          {
            "flashcards":
              [
                {
                  question: 'questionA',
                  answer: 'answerA'
                },
                {
                  question: 'questionB',
                  answer: 'answerB'
                }]
          })
      });
    })
  })
});
