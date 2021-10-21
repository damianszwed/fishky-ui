import restHelper from '../../app/proxy/restHelper';
import url from '../../app/proxy/url';

class LibraryFlashcardFoldersApi {
  static broughtInUserId = 'broughtin';

  static getLibraryFlashcardFolders() {
    return restHelper.get("", url + '/owners/' + this.broughtInUserId + '/flashcardFolders');
  }

  static copyLibraryFolder(accessToken, flashcardFolder) {
    return restHelper.post(accessToken, url + '/owners/' + this.broughtInUserId + '/flashcardFolders/' + flashcardFolder.id + '/copy', flashcardFolder);
  }
}

export default LibraryFlashcardFoldersApi;
