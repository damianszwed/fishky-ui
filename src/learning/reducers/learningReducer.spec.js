import reducer from './learningReducer'
import * as types from '../actions/actionTypes';
import * as actions from '../actions/learningActions'

describe('flashcardReducer', () => {
  it('should start learning process on START_LEARNING action', () => {
    //given
    const flashcards = [{
      id: "someId",
      answer: "someAnswer",
      question: "someQuestion"
    }];
    const action = actions.startLearning(flashcards);
    //when
    const newState = reducer({}, action);
    //then
    expect(newState.learningProcessEnabled).toBeTruthy();
    expect(newState.learningProcessFinished).toBeFalsy();
    expect(newState.actualQuestion).toBe("someQuestion");
    expect(newState.actualQuestionId).toBe("someId");
    expect(newState.expectedAnswer).toBe("someAnswer");
    expect(newState.flashcardsToLearn).toMatchObject([{
      id: 'someId-inverted',
      question: 'someAnswer',
      answer: 'someQuestion'
    }])
  });
});
