import { combineReducers } from 'redux'
import flashcardFolders from '../../folders/reducers/flashcardFoldersReducer'
import loadingFlashcardFolders from '../../folders/reducers/flashcardFoldersLoadingReducer'
import sseInitialized from '../../folders/reducers/flashcardFoldersSseInitializationReducer'
import learning from '../../learning/reducers/learningReducer'
import security from '../../security/reducers/securityReducer'

export default combineReducers({
  flashcardFolders,
  loadingFlashcardFolders,
  sseInitialized,
  learning,
  security
})
