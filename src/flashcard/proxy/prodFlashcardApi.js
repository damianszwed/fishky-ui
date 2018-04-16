import restHelper from '../../app/proxy/restHelper';

class ProdFlashcardApi {
  static getFlashcards() {
    return restHelper.get('https://fishky-199520.appspot.com/flashcards');//TODO put base url to restHelper
  }

  static saveFlashcard(flashcard) {
    return restHelper.post('https://fishky-199520.appspot.com/flashcard', flashcard);
  }

  static deleteFlashcard(flashcardId) {
    return restHelper.delete('https://fishky-199520.appspot.com/flashcard/' + flashcardId);
  }
}

export default ProdFlashcardApi;
