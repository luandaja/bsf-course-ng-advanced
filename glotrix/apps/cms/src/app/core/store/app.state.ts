import { ActionReducerMap } from '@ngrx/store';
import { AuthState, authReducer } from './auth';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from './router';

export interface AppState {
  auth: AuthState;
  router: RouterReducerState<RouterStateUrl>;
}

export const appReducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  auth: authReducer
};
