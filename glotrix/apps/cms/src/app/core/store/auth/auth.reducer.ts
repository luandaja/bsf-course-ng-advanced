import { Action, createReducer, on } from '@ngrx/store';
import { signIn, updateUser } from './auth.actions';
import { AuthState, initalState } from './auth.state';

const reducer = createReducer(
  initalState,
  on(signIn, (state, { isLogged }) => ({ ...state, isLogged: true })),
  on(updateUser, (state, { user }) => ({ ...state, user: { ...user } }))
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}
