import { createAction, props } from '@ngrx/store';
import { User, Player, Mission } from '../../models';
import { BoardStatus } from '../../models/BoardStatus';

export const signIn = createAction(
	'[Auth] Sign in',
	props<{ username: string; photoUrl: string }>()
);
export const signInSuccess = createAction(
	'[Auth] Sign in success',
	props<{ userPlayer: Player }>()
);

export const signOutSuccess = createAction('[Auth] Sign out success');
export const signOut = createAction('[Auth] Sign out');

export const startGame = createAction('[Game] start game');
export const gameStarted = createAction('[Game] game started');

export const pickUpCard = createAction('[Game] pick up card');
export const pickUpCardSuccess = createAction('[Game] pick up card success',
	props<{ card: boolean }>()
);
export const updateBoardStatus = createAction('[Update Status]',
	props<{ board: BoardStatus }>()
);
export const usersLoaded = createAction('[Board Cards] Loaded users',
	props<{ users: Player[] }>()
);

export const setMission = createAction('[Missions] Set mission',
	props<{ users: Player[] }>()
);
export const setMissionSuccess = createAction('[Missions] Select team members success');

export const revealSpies = createAction('[Game] reveal spies');
export const revealSpiesSuccess = createAction('[Game] reveal spies success');

export const missionsLoaded = createAction('[Missions] missions loaded',
	props<{ missions: Mission[] }>()
);
