import { combineReducers } from 'redux'
import flashcards from '../../flashcard/reducers/flashcardReducer'
import loadingFlashcards from '../../flashcard/reducers/flashcardLoadingReducer'
import learning from '../../learning/reducers/learningReducer'

export default combineReducers({
  flashcards,
  loadingFlashcards,
  learning
})
