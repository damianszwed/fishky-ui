import * as types from './actionTypes';

export function startLearning(flashcards) {
  return {type: types.START_LEARNING, flashcards};
}

export function learn() {
  return function (dispatch, getState) {
    dispatch(startLearning(getState().flashcards));
  }
}
