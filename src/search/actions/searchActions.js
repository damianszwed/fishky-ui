import * as types from './actionTypes'

export function setSearchQuery(searchQ) {
  return {type: types.SET_SEARCH_Q, searchQ}
}

export function setSearchQ(searchQ) {
  return function(dispatch, getState) {
    dispatch(setSearchQuery(searchQ));
  }
}
