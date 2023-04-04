import restHelper from '../../app/proxy/restHelper';
import url from '../../app/proxy/url';

class SearchApi {

  static doSearch(accessToken, q) {
    return restHelper.get(accessToken, url + '/flashcardFolders/search?q=' + q);
  }
}

export default SearchApi;
