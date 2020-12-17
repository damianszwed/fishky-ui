import * as types from '../actions/actionTypes';

function matches(onClientSideFlashcardFolder, flashcardFolder) {
  return (onClientSideFlashcardFolder.id && flashcardFolder.id && onClientSideFlashcardFolder.id === flashcardFolder.id) ||
    (onClientSideFlashcardFolder.name && flashcardFolder.name && onClientSideFlashcardFolder.name === flashcardFolder.name);
}

function updateExistingIndexOrAddNew(state, action) {
  const index = state.findIndex((el) => matches(el, action.flashcardFolder));
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
}

export default function flashcardFoldersReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_FLASHCARD_FOLDER:
      return updateExistingIndexOrAddNew(state, action);

    case types.LOAD_FLASHCARD_FOLDERS:
      return action.flashcardFolders;

    case types.CREATE_FLASHCARD_FOLDER_SUCCESS:
      return updateExistingIndexOrAddNew(state, action);

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
