import { combineReducers } from 'redux'
import flashcards from '../../flashcard/reducers/flashcardReducer'
import loadingFlashcards from '../../flashcard/reducers/flashcardLoadingReducer'
import flashcardFolders from '../../folders/reducers/flashcardFoldersReducer'
import loadingFlashcardFolders from '../../folders/reducers/flashcardFoldersLoadingReducer'
import learning from '../../learning/reducers/learningReducer'
import security from '../../security/reducers/securityReducer'

export default combineReducers({
  flashcards,
  loadingFlashcards,
  flashcardFolders: flashcardFolders,
  loadingFlashcardFolders: loadingFlashcardFolders,
  learning,
  security
})
