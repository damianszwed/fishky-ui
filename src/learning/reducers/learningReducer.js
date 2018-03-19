import * as types from '../actions/actionTypes';

const initialState = {
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
        otherFlashcardsToLearn: Object.assign({}, action.flashcard)
      };

    default:
      return state;
  }
}
