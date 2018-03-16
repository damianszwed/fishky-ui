/**
 * Mocking client-server processing
 */
import _flashcards from './flashcards.json'
import delay from './delay';

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (flashcard) => {
  return "user1@example.com-" + replaceAll(flashcard.question, ' ', '-');
};

const flashcards = _flashcards;

class FlashcardApi {
  static getFlashcards() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], flashcards));
      }, delay);
    });
  }

  static saveFlashcard(flashcard) {
    flashcard = Object.assign({}, flashcard); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minLength = 1;
        if (flashcard.question.length < minLength) {
          reject(`Question must be at least ${minLength} characters.`);
        }

        if (flashcard.answer.length < minLength) {
          reject(`Answer must be at least ${minLength} characters.`);
        }

        if (flashcard.id) {
          const existingFlashcardIndex = flashcards.findIndex(a => a.id === flashcard.id);
          flashcards.splice(existingFlashcardIndex, 1, flashcard);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          flashcard.id = generateId(flashcard);
          flashcards.push(flashcard);
        }

        resolve(flashcard);
      }, delay);
    });
  }

  static deleteFlashcard(flashcardId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfFlashcardToDelete = flashcards.findIndex(flashcard => {
          return flashcard.id === flashcardId;
        });
        flashcards.splice(indexOfFlashcardToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default FlashcardApi;
