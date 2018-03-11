/**
 * Mocking client-server processing
 */
import _flashcards from './flashcards.json'

const TIMEOUT = 100

export default {
  getFlashcards: (cb, timeout) => setTimeout(() => cb(_flashcards), timeout || TIMEOUT)
}
