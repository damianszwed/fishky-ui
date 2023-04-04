import * as types from './actionTypes'
import searchApi from "../proxy/searchApi"

export function setSearchQuery(searchQ) {
  return {type: types.SET_SEARCH_Q, searchQ}
}

export function beginSearchLoadingAjaxCall() {
  return {type: types.BEGIN_SEARCH_AJAX_CALL};
}

export function endSearchLoadingAjaxCall() {
  return {type: types.END_SEARCH_AJAX_CALL};
}

export function searchLoadingAjaxCallError() {
  return {type: types.SEARCH_AJAX_CALL_ERROR};
}

export const loadSearchResultsSuccess = searchResults => ({
  type: types.LOAD_SEARCH_RESULTS_SUCCESS,
  searchResults: searchResults
})

export function setSearchQ(searchQ) {
  return function (dispatch, getState) {
    dispatch(setSearchQuery(searchQ));
    if (getState().security.authenticated) {
      dispatch(doSearch())
    }
  }
}

export const doSearch = () => (dispatch, getState) => {
  if (!getState().security.authenticated) {
    console.log("Won't perform a search, cause the user is not signed in.");
    return;
  }

  console.log("Invoked a doSearch() method.");
  dispatch(beginSearchLoadingAjaxCall());
  return searchApi.doSearch(getState().security.accessToken, getState().search.searchQ).then(results => {
    dispatch(endSearchLoadingAjaxCall());
    dispatch(loadSearchResultsSuccess(results));
    return "Loaded search results.";
  }).catch(error => {
    dispatch(searchLoadingAjaxCallError(error));
    throw(error);
  });
};

