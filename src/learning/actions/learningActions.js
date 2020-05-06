import * as types from './actionTypes';

export function startLearning(flashcards) {
  return {type: types.START_LEARNING, flashcards};
}

export function learn(flashcards, mode) {
  return function (dispatch, getState) {
    console.log(mode);//TODO(Damian.Szwed) handle modes.
    dispatch(startLearning(flashcards));
  }
}

export function submitAnswer(someObject) {
  return {type: types.SUBMIT_ANSWER, someObject};
}

export function submitLearningAnswer(someObject) {
  return function (dispatch, getState) {
    dispatch(submitAnswer(someObject));
  }
}
