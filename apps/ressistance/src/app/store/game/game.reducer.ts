import { Action, createReducer, on } from '@ngrx/store';
import * as action from './game.actions';
import { GameState, initalState } from './game.state';
import { User } from '../../models';

const reducer = createReducer(
	initalState,
	on(action.signOut, (state, { }) => ({ ...state, isLoading: true })),
	on(action.signOutSuccess, (state, { }) => ({ ...state, isLoading: false, userPlayer: null, isLogged: false })),
	on(action.signIn, (state, { }) => ({ ...state, isLoading: true })),
	on(action.signInSuccess, (state, { userPlayer }) => ({ ...state, isLogged: true, isLoading: false, userPlayer })),
	on(action.revealSpiesSuccess, (state, { }) => ({ ...state, isLoading: true })),
	on(action.revealSpies, (state, { }) => ({ ...state, isLoading: false })),
	on(action.updateBoardStatus, (state, { board }) => ({ ...state, board })),
	on(action.usersLoaded, (state, { users }) => ({ ...state, users: (Object.assign([], users) as User[]).sort((a, b) => a.order - b.order), userPlayer: getUserPlayer(users, state.userPlayer) })),
	on(action.pickUpCardSuccess, (state, { card }) => ({ ...state, userPlayer: { ...state.userPlayer, isSpy: card } })),
	on(action.startGame, (state, { }) => ({ ...state, isLoading: true })),
	on(action.gameStarted, (state, { }) => ({ ...state, isLoading: false })),
);

function getUserPlayer(players: User[], userPlayer: User) {
	return userPlayer === null ? null : { ...players.find(player => player.id === userPlayer.id) };
}


export function gameReducer(state: GameState | undefined, actionTriggered: Action) {
	return reducer(state, actionTriggered);
}
