import * as types from '../actions/actionTypes';

export default function flashcardSetsReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_FLASHCARD_SETS:
      return action.flashcardSets;

    case types.CREATE_FLASHCARD_SET_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.flashcardSet)
      ];

    case types.UPDATE_FLASHCARD_SET_SUCCESS:
      return [
        ...state.filter(flashcardSet => flashcardSet.id !== action.flashcardSet.id),
        Object.assign({}, action.flashcardSet)
      ];

    case types.DELETE_FLASHCARD_SET_SUCCESS:
      return [
        ...state.filter(flashcardSet => flashcardSet.id !== action.flashcardSet.id)
      ];

    default:
      return state;
  }
};
