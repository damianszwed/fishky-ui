import * as types from './actionTypes';
import flashcards from "../api/flashcards";


export function createFlashcardSuccess(flashcard) {
  return {type: types.CREATE_FLASHCARD_SUCCESS, flashcard};
}

export function saveFlashcard(flashcard) {
  return function (dispatch, getState) {
    dispatch(createFlashcardSuccess((flashcard)));
  };
}

const loadFlashcardsSuccess = flashcards => ({
  type: types.LOAD_FLASHCARDS,
  flashcards
});

export const loadFlashcards = () => dispatch => {
  flashcards.getFlashcards(flashcards => {
    dispatch(loadFlashcardsSuccess(flashcards))
  })
};
