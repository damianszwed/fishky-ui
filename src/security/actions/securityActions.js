import * as types from "./actionTypes";

export function updateAuthenticatedStatus(authenticated) {
  return {type: types.UPDATE_AUTHENTICATED_STATUS, authenticated};
}

export function setAuthenticated(authenticated) {
  return function (dispatch, getState) {
    dispatch(updateAuthenticatedStatus(authenticated));
  }
}

export function updateAccessToken(accessToken) {
  return {type: types.UPDATE_ACCESS_TOKEN, accessToken};
}

export function setAccessToken(accessToken) {
  return function (dispatch, getState) {
    dispatch(updateAccessToken(accessToken));
  }
}
