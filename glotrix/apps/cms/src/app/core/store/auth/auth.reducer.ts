import { Action, createReducer, on } from '@ngrx/store';
import { signIn } from './auth.actions';
import { AuthState, initalState } from './auth.state';

const reducer = createReducer(
  initalState,
  on(signIn, (state, { isLogged }) => ({ ...state, isLogged }))
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}
