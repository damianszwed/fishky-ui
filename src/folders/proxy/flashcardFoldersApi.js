import restHelper from '../../app/proxy/restHelper';
import sseHelper from '../../app/proxy/sseHelper';
import url from '../../app/proxy/url';

class FlashcardFoldersApi {
  static flashcardFoldersEventStream(onMessage, accessToken) {
    sseHelper.getEventStream(onMessage, accessToken, url + '/flashcardFoldersEventStream' );
  }

  static getFlashcardFolders(accessToken) {
    return restHelper.get(accessToken, url + '/flashcardFolders');
  }

  static saveFlashcardFolder(accessToken, flashcardFolder) {
    return restHelper.post(accessToken, url + '/flashcardFolders', flashcardFolder);
  }

  static deleteFlashcardFolder(accessToken, flashcardFolderId) {
    return restHelper.delete(accessToken, url + '/flashcardFolders/' + flashcardFolderId);
  }

  static saveFlashcardInFolder(accessToken, flashcard, flashcardFolderId) {
    return restHelper.post(accessToken, url + '/flashcardFolders/' + flashcardFolderId + '/flashcards', flashcard);
  }

  static updateFlashcardInFolder(accessToken, flashcard, flashcardFolderId) {
    return restHelper.put(accessToken, url + '/flashcardFolders/' + flashcardFolderId + '/flashcards', flashcard);
  }

  static deleteFlashcardFromFolder(accessToken, flashcardId, flashcardFolderId) {
    return restHelper.delete(accessToken, url + '/flashcardFolders/' + flashcardFolderId + '/flashcards/' + flashcardId);
  }
}

export default FlashcardFoldersApi;
