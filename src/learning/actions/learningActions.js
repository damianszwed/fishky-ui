import * as types from './actionTypes';
import {A_TO_B, B_TO_A, SHUFFLED} from "../reducers/modes";

export function startLearningShuffled(flashcards) {
  return {type: types.START_LEARNING_SHUFFLED, flashcards};
}

export function startLearningAToB(flashcards) {
  return {type: types.START_LEARNING_A_TO_B, flashcards};
}

export function startLearningBToA(flashcards) {
  return {type: types.START_LEARNING_B_TO_A, flashcards};
}

export function learn(flashcards, mode) {
  return function (dispatch, getState) {
    switch (mode) {
      case A_TO_B:
        dispatch(startLearningAToB(flashcards));
        break;
      case B_TO_A:
        dispatch(startLearningBToA(flashcards));
        break;
      case SHUFFLED:
        dispatch(startLearningShuffled(flashcards));
        break;
      default:
        console.log("Chosen wrong mode.")
    }
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

export function restartLearningState() {
  return function (dispatch, getState) {
    dispatch({type: types.RESTART_STATE});
  }
}
