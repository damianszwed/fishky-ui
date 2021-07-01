import reducer from './learningReducer'
import * as actions from '../actions/learningActions'
import {startLearningAToB, startLearningBToA} from "../actions/learningActions";

describe('flashcardReducer', () => {
  it('should start learning process on START_LEARNING action', () => {
    //given
    const flashcards = [{
      id: "someId",
      answers: ["someAnswer"],
      question: "someQuestion"
    }];
    const action = actions.startLearningShuffled(flashcards);
    //when
    const newState = reducer({}, action);
    //then
    expect(newState.learningProcessEnabled).toBeTruthy();
    expect(newState.learningProcessFinished).toBeFalsy();
  });

  it('should return shuffled questions with answers on START_LEARNING_SHUFFLED action', () => {
    //given
    const flashcards = [{
      id: "someId",
      answers: ["someAnswer"],
      question: "someQuestion"
    }];
    const action = actions.startLearningShuffled(flashcards);
    //when
    const newState = reducer({}, action);
    //then
    expect(newState.actualQuestion).toBe("someQuestion");
    expect(newState.actualQuestionId).toBe("someId");
    expect(newState.expectedAnswer).toBe("someAnswer");
    expect(newState.expectedAnswers).toEqual(["someAnswer"]);
    expect(newState.flashcardsToLearn).toMatchObject([{
      id: 'someId-inverted',
      question: 'someAnswer',
      answer: 'someQuestion',
      answers: ['someQuestion']
    }])
  })

  it('should return shuffled flashcards on START_LEARNING_A_TO_B action', () => {
    //given
    const flashcards = [{
      id: "someId",
      answers: ["someAnswerA", "someAnswerB"],
      question: "someQuestion"
    }];
    const action = actions.startLearningAToB(flashcards);
    //when
    const newState = reducer({}, action);
    //then
    expect(newState.actualQuestion).toBe("someQuestion");
    expect(newState.actualQuestionId).toBe("someId");
    expect(newState.expectedAnswer).toBe("someAnswerA");
    expect(newState.expectedAnswers).toEqual(["someAnswerA", "someAnswerB"]);
    expect(newState.flashcardsToLearn).toEqual([])
  })

  it('should return shuffled reverted question with answers flashcards on START_LEARNING_B_TO_A action', () => {
    //given
    const flashcards = [{
      id: "someId",
      answers: ["someAnswerA", "someAnswerB"],
      question: "someQuestion"
    }];
    const action = actions.startLearningBToA(flashcards);
    //when
    const newState = reducer({}, action);
    //then
    expect(newState.actualQuestion).toBe("someAnswerA");
    expect(newState.actualQuestionId).toBe("someId-inverted");
    expect(newState.expectedAnswer).toBe("someQuestion");
    expect(newState.expectedAnswers).toEqual(["someQuestion"]);
    expect(newState.flashcardsToLearn).toEqual([])
  })

  it('should give next question on SUBMIT_ANSWER action', () => {
    //given
    const flashcards = [{
      id: "someId",
      answers: ["someAnswer"],
      question: "someQuestion"
    }];
    const startLearningAction = actions.startLearningShuffled(flashcards);
    const givenState = reducer({}, startLearningAction);
    const submitAnswerAction = actions.submitAnswer();
    //when
    const newState = reducer(givenState, submitAnswerAction);
    //then
    expect(newState.learningProcessEnabled).toBeTruthy();
    expect(newState.learningProcessFinished).toBeFalsy();
    expect(newState.actualQuestion).toBe("someAnswer");
    expect(newState.actualQuestionId).toBe("someId-inverted");
    expect(newState.expectedAnswer).toBe("someQuestion");
    expect(newState.expectedAnswers).toEqual(["someQuestion"]);
    expect(newState.flashcardsToLearn).toEqual([]);
  });

  it('should end learning process on SUBMIT_ANSWER action given last question', () => {
    //given
    const flashcards = [{
      id: "someId",
      answers: ["someAnswer"],
      question: "someQuestion"
    }];
    const submitAnswerAction = actions.submitAnswer();
    const givenState = reducer(reducer({}, actions.startLearningShuffled(flashcards)), submitAnswerAction);
    //when
    const newState = reducer(givenState, submitAnswerAction);
    //then
    expect(newState.learningProcessEnabled).toBeTruthy();
    expect(newState.learningProcessFinished).toBeTruthy();
    expect(newState.flashcardsToLearn).toEqual([]);
  })

});
