import * as types from '../actions/actionTypes';

export default function flashcardFoldersReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_FLASHCARD_FOLDER:
      const index = state.findIndex((el) => el.id === action.flashcardFolder.id);
      if (index === -1) {
        return [
          ...state,
          Object.assign({}, action.flashcardFolder)
        ];
      } else {
        let newState = [...state];
        newState[index] = action.flashcardFolder;
        return newState;
      }

    case types.LOAD_FLASHCARD_FOLDERS:
      return action.flashcardFolders;

    case types.CREATE_FLASHCARD_FOLDER_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.flashcardFolder)
      ];

    case types.UPDATE_FLASHCARD_FOLDER_SUCCESS:
      return [
        ...state.filter(flashcardFolder => flashcardFolder.id !== action.flashcardFolder.id),
        Object.assign({}, action.flashcardFolder)
      ];

    case types.DELETE_FLASHCARD_FOLDER_SUCCESS:
      return [
        ...state.filter(flashcardFolder => flashcardFolder.id !== action.flashcardFolder.id)
      ];

    default:
      return state;
  }
};
