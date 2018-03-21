import * as types from '../actions/actionTypes';

const initialState = {
  learningProcessEnabled: false,
  actualQuestion: "here-will-be-question",
  actualQuestionId: "here-will-be-actual-question-id",
  expectedAnswer: "here-will-be-expected-answer",
  flashcardsToLearn: [],
  learningProcessFinished: false
};

export default function learningReducer(state = initialState, action) {
  switch (action.type) {
    case types.START_LEARNING:
      //TODO multiply flashcards to learn twice but remember about randomize
      return {
        ...initialState,
        learningProcessEnabled: true,
        flashcardsToLearn: Object.assign({}, action.flashcard)
      };

    default:
      return state;
  }
}
