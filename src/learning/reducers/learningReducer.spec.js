import reducer from './learningReducer'
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

  it('should give next question on SUBMIT_ANSWER action', () => {
    //given
    const flashcards = [{
      id: "someId",
      answer: "someAnswer",
      question: "someQuestion"
    }];
    const startLearningAction = actions.startLearning(flashcards);
    const givenState = reducer({}, startLearningAction);
    const submitAnswerAction = actions.submitAnswer();
    //when
    const newState = reducer(givenState, submitAnswerAction);
    //then
    console.log(newState);
    expect(newState.learningProcessEnabled).toBeTruthy();
    expect(newState.learningProcessFinished).toBeFalsy();
    expect(newState.actualQuestion).toBe("someAnswer");
    expect(newState.actualQuestionId).toBe("someId-inverted");
    expect(newState.expectedAnswer).toBe("someQuestion");
    expect(newState.flashcardsToLearn).toEqual([]);
  });

  it('should end learning process on SUBMIT_ANSWER action given last question', () => {
    //given
    const flashcards = [{
      id: "someId",
      answer: "someAnswer",
      question: "someQuestion"
    }];
    const submitAnswerAction = actions.submitAnswer();
    const givenState = reducer(reducer({}, actions.startLearning(flashcards)), submitAnswerAction);
    //when
    const newState = reducer(givenState, submitAnswerAction);
    //then
    expect(newState.learningProcessEnabled).toBeTruthy();
    expect(newState.learningProcessFinished).toBeTruthy();
    expect(newState.flashcardsToLearn).toEqual([]);
  })

});
