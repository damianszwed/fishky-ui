import restHelper from '../../app/proxy/restHelper';
import url from '../../app/proxy/url';

class LibraryFlashcardFoldersApi {
  static getLibraryFlashcardFolders() {
    return restHelper.get("", url + '/owners/broughtin/flashcardFolders');
  }

  static copyLibraryFolder(accessToken, flashcardFolder) {
    return restHelper.post(accessToken, url + '/owners/broughtin/flashcardFolders/' + flashcardFolder.id + '/copy', flashcardFolder);
  }
}

export default LibraryFlashcardFoldersApi;
