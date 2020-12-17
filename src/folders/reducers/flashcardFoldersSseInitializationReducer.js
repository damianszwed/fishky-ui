import * as types from '../actions/actionTypes';

export default function flashcardFoldersLoadingReducer(state = false, action) {
  if (action.type === types.SSE_INITIALIZED) {
    return true;
  }

  return state;
}
