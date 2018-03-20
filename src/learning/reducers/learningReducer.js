import * as types from '../actions/actionTypes';

const initialState = {
  learningProcessEnabled: false,
  actualQuestion: "",
  actualFlashcardId: "",
  expectedAnswer: "",
  otherFlashcardsToLearn: []
};

export default function learningReducer(state = initialState, action) {
  switch (action.type) {
    case types.START_LEARNING:
      return {
        ...initialState,
        learningProcessEnabled: true,
        otherFlashcardsToLearn: Object.assign({}, action.flashcard)
      };

    default:
      return state;
  }
}
