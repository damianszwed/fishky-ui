import { combineReducers } from 'redux'
import flashcardFolders from '../../folders/reducers/flashcardFoldersReducer'
import loadingFlashcardFolders from '../../folders/reducers/flashcardFoldersLoadingReducer'
import libraryFlashcardFolders from '../../library/reducers/libraryFlashcardFoldersReducer'
import loadingLibraryFlashcardFolders from '../../library/reducers/libraryFlashcardFoldersLoadingReducer'
import sseInitialized from '../../folders/reducers/flashcardFoldersSseInitializationReducer'
import learning from '../../learning/reducers/learningReducer'
import security from '../../security/reducers/securityReducer'
import search from '../../search/reducers/searchReducer'
import searchLoading from '../../search/reducers/searchLoadingReducer'

export default combineReducers({
  flashcardFolders,
  loadingFlashcardFolders,
  libraryFlashcardFolders,
  loadingLibraryFlashcardFolders,
  sseInitialized,
  learning,
  security,
  search,
  searchLoading
})
