import { Action, createReducer, on } from '@ngrx/store';
import { signIn, signInWithGoogle } from './auth.actions';
import { AuthState, initalState } from './auth.state';

const reducer = createReducer(
  initalState,
  on(signIn, (state, { username, password }) => ({ ...state, isLogged: true })),
  on(signInWithGoogle, state => ({ ...state, isLogged: true }))
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}
