import { createAction, props } from '@ngrx/store';
import { User } from '../../../models';

export const signIn = createAction('[Auth] Sign in', props<{ isLogged: boolean }>());

export const updateUser = createAction('[Auth] Update user', props<{ user: User }>());
