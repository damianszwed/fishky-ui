import * as types from '../actions/actionTypes';

const initialState = {
  searchQ: ""
}

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_SEARCH_Q:
      return {
        ...state,
        searchQ: action.searchQ
      };

    default:
      return state;
  }
};
