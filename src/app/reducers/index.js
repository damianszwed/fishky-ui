import { combineReducers } from 'redux'
import flashcards from '../../flashcard/reducers/flashcardReducer'
import loadingFlashcards from '../../flashcard/reducers/flashcardLoadingReducer'
import flashcardSets from '../../sets/reducers/flashcardSetsReducer'
import loadingFlashcardSets from '../../sets/reducers/flashcardSetsLoadingReducer'
import learning from '../../learning/reducers/learningReducer'
import security from '../../security/reducers/securityReducer'

export default combineReducers({
  flashcards,
  loadingFlashcards,
  flashcardSets,
  loadingFlashcardSets,
  learning,
  security
})
