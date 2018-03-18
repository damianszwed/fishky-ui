import restHelper from '../../proxy/restHelper';

class FlashcardApi {
  static getFlashcards() {
    return restHelper.get('http://localhost:8080/flashcards');
  }

  static saveFlashcard(flashcard) {
    return restHelper.post('http://localhost:8080/flashcard', flashcard);
  }

  static deleteFlashcard(flashcardId) {
    return restHelper.delete('http://localhost:8080/flashcard/' + flashcardId);
  }
}

export default FlashcardApi;
