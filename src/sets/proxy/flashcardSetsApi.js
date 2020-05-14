import restHelper from '../../app/proxy/restHelper';
import url from '../../app/proxy/url';

class FlashcardSetsApi {
  static getFlashcardSets(accessToken) {
    return restHelper.get(accessToken, url+ '/flashcardSets');
  }

  static saveFlashcardSet(accessToken, flashcardSet) {
    return restHelper.post(accessToken, url + '/flashcardSets', flashcardSet);
  }

  static deleteFlashcardSet(accessToken, flashcardSetId) {
    return restHelper.delete(accessToken, url + '/flashcardSets/' + flashcardSetId);
  }

  static saveFlashcardInSet(accessToken, flashcard, flashcardSetId) {
    return restHelper.post(accessToken, url + '/flashcardSets/' + flashcardSetId + '/flashcards', flashcard);
  }

  static deleteFlashcardFromSet(accessToken, flashcardId, flashcardSetId) {
    return restHelper.delete(accessToken, url + '/flashcardSets/' + flashcardSetId + '/flashcards/'+ flashcardId);
  }
}

export default FlashcardSetsApi;
