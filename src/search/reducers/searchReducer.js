import * as types from '../actions/actionTypes';

const initialState = {
  searchQ: "",
  searchResults: []
}

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_SEARCH_Q:
      return {
        ...state,
        searchQ: action.searchQ
      };

    case types.LOAD_SEARCH_RESULTS_SUCCESS:
      return {
        ...state,
        searchResults: action.searchResults
      }

    default:
      return state;
  }
};
