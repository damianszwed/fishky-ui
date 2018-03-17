import restHelper from './restHelper';

class FlashcardApi {
  static getFlashcards() {
    return restHelper.get('http://localhost:8080/flashcards');
  }

  static saveFlashcard(flashcard) {
    return null;
  }

  static deleteFlashcard(flashcardId) {
    return restHelper.delete('http://localhost:8080/flashcard/' + flashcardId);
  }
}

export default FlashcardApi;
