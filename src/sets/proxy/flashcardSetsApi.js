import restHelper from '../../app/proxy/restHelper';
import url from '../../app/proxy/url';

class FlashcardSetsApi {
  static getFlashcardSets() {
    return restHelper.get(url+ '/flashcardSets');
  }

  static saveFlashcardSet(flashcardSet) {
    return restHelper.post(url + '/flashcardSets', flashcardSet);
  }

  static deleteFlashcardSet(flashcardSetId) {
    return restHelper.delete(url + '/flashcardSets/' + flashcardSetId);
  }

  static saveFlashcardInSet(flashcard, flashcardSetId) {
    return restHelper.post(url + '/flashcardSets/' + flashcardSetId + '/flashcards', flashcard);
  }

  static deleteFlashcardFromSet(flashcardId, flashcardSetId) {
    return restHelper.delete(url + '/flashcardSets/' + flashcardSetId + '/flashcards/'+ flashcardId);
  }
}

export default FlashcardSetsApi;
