import restHelper from '../../app/proxy/restHelper';
import url from './url';

class ExternalFlashcardApi {
  static getFlashcards() {
    return restHelper.get(url+ '/flashcards');
  }

  static saveFlashcard(flashcard) {
    return restHelper.post(url + '/flashcards', flashcard);
  }

  static deleteFlashcard(flashcardId) {
    return restHelper.delete(url + '/flashcards/' + flashcardId);
  }
}

export default ExternalFlashcardApi;
