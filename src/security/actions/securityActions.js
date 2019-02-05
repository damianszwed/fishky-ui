import * as types from "./actionTypes";

export function updateAuthenticatedStatus(authenticated) {
  return {type: types.UPDATE_AUTHENTICATED_STATUS, authenticated};
}

export function setAuthenticated(authenticated) {
  return function (dispatch, getState) {
    dispatch(updateAuthenticatedStatus(authenticated));
  }
}
