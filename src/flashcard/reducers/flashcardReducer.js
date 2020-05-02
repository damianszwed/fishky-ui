import * as types from '../actions/actionTypes';

export default function flashcardReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_FLASHCARDS:
      return action.flashcards;

    case types.CREATE_FLASHCARD_SUCCESS:
      action.flashcard.id = "tmp-placeholder";//TODO(Damian.Szwed) id generation
      return [
        ...state,
        Object.assign({}, action.flashcard)
      ];

    case types.UPDATE_FLASHCARD_SUCCESS:
      return [
        ...state.filter(flashcard => flashcard.id !== action.flashcard.id),
        Object.assign({}, action.flashcard)
      ];

    case types.DELETE_FLASHCARD_SUCCESS:
      return [
        ...state.filter(flashcard => flashcard.id !== action.flashcard.id)
      ];

    default:
      return state;
  }
};
