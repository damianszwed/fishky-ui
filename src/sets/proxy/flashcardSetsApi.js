import restHelper from '../../app/proxy/restHelper';
import url from '../../app/proxy/url';

class FlashcardSetsApi {
  static getFlashcardSets() {
    return restHelper.get(url+ '/flashcardGroups');
  }

  static saveFlashcardSet(flashcardSet) {
    return restHelper.post(url + '/flashcardGroups', flashcardSet);
  }

  static deleteFlashcardSet(flashcardSetId) {
    return restHelper.delete(url + '/flashcardGroups/' + flashcardSetId);
  }

  static saveFlashcardInSet(flashcard, flashcardSetId) {
    return restHelper.post(url + '/flashcardGroups/' + flashcardSetId + '/flashcards', flashcard);
  }

  static deleteFlashcardFromSet(flashcardId, flashcardSetId) {
    return restHelper.delete(url + '/flashcardGroups/' + flashcardSetId + '/flashcards/'+ flashcardId);
  }
}

export default FlashcardSetsApi;
