import * as types from '../actions/actionTypes';

export default function securityReducer(state = { authenticated: false} , action) {
  if(!action) {
    return state;
  }

  if (action.type === types.UPDATE_AUTHENTICATED_STATUS) {
    if(action.authenticated == null) {
      return state;
    }
    return {
      ...state,
      authenticated: action.authenticated
    };
  }

  return state;
}
