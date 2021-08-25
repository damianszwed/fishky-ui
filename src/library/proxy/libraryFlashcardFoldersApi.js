import restHelper from '../../app/proxy/restHelper';
import url from '../../app/proxy/url';

class LibraryFlashcardFoldersApi {
  static getLibraryFlashcardFolders() {
    return restHelper.get("", url + '/owners/broughtin/flashcardFolders');
  }
}

export default LibraryFlashcardFoldersApi;
