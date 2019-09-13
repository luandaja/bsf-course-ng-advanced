import { createAction, props } from '@ngrx/store';

export const signIn = createAction(
  '[Auth] Sign in',
  props<{ username: string; password: string }>()
);

export const signInWithGoogle = createAction('[Auth] Sign in with Google');
