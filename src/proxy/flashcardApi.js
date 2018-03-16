import restHelper from './restHelper';

class FlashcardApi {
  static getFlashcards() {
    return restHelper.get('http://localhost:8080/flashcards');
  }

  static saveFlashcard(flashcard) {
    return null;
  }

  static deleteFlashcard(flashcardId) {
    return null;
  }
}

export default FlashcardApi;
