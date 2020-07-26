import restHelper from '../../app/proxy/restHelper';
import url from '../../app/proxy/url';

class FlashcardFoldersApi {
  static getFlashcardFolders(accessToken) {
    return restHelper.get(accessToken, url+ '/flashcardFolders');
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

  static deleteFlashcardFromFolder(accessToken, flashcardId, flashcardFolderId) {
    return restHelper.delete(accessToken, url + '/flashcardFolders/' + flashcardFolderId + '/flashcards/'+ flashcardId);
  }
}

export default FlashcardFoldersApi;
