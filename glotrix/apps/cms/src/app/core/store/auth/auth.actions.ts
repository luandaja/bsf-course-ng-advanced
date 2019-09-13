import { createAction, props } from '@ngrx/store';

export const signIn = createAction(
  '[Auth] Sign in',
  props<{ isLogged: boolean }>()
);
