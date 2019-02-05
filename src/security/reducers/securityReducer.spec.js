import reducer from './securityReducer'
import * as actions from '../actions/securityActions'

describe('securityReducer', () => {
  it('should not be authenticated on start', () => {
    //when
    const state = reducer();
    //then
    expect(state.authenticated).toBeFalsy();
  });

  it('should update authenticated status', () => {
    //given
    const action = actions.updateAuthenticatedStatus(true);
    //when
    const state = reducer({}, action);
    //then
    expect(state.authenticated).toBeTruthy();
  });

  it('should update non authenticated status', () => {
    //given
    const initialState = { authenticated: true};
    const action = actions.updateAuthenticatedStatus(false);
    //when
    const state = reducer(initialState, action);
    //then
    expect(state.authenticated).toBeFalsy();
  });

  it('should ignore null authenticated status', () => {
    //given
    const initialState = { authenticated: true};
    const action = actions.updateAuthenticatedStatus(null);
    //when
    const state = reducer(initialState, action);
    //then
    expect(state.authenticated).toBeTruthy();
  })

  it('should ignore undefined authenticated status', () => {
    //given
    const initialState = { authenticated: true};
    const action = actions.updateAuthenticatedStatus(undefined);
    //when
    const state = reducer(initialState, action);
    //then
    expect(state.authenticated).toBeTruthy();
  })
});
