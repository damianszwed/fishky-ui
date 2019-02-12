import * as types from '../actions/actionTypes';

export default function securityReducer(state = {authenticated: false, accessToken: ''}, action) {
  if (!action) {
    return state;
  }

  if (action.type === types.UPDATE_AUTHENTICATED_STATUS) {
    if (action.authenticated == null) {
      return state;
    }
    return {
      ...state,
      authenticated: action.authenticated
    };
  }

  if (action.type === types.UPDATE_ACCESS_TOKEN) {
    if (!action.accessToken) {
      return state;
    }
    return {
      ...state,
      accessToken: action.accessToken
    };
  }

  return state;
}
