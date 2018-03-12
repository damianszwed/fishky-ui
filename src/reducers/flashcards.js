import {combineReducers} from 'redux'

const flashcards = (state = [], action) => {
  // switch (action.type) {
  //   default:
  //     return state
  // }
  // return state.concat(action.flashcards)
  if (action.flashcards == null) {
    return state;
  }
  return [
    ...state,
    ...action.flashcards
  ]
};

export default combineReducers({
  flashcards
})

export const getFlashcards = state => state;
