import { Action, createReducer, on } from '@ngrx/store';
import * as action from './game.actions';
import { GameState, initalState } from './game.state';
import { Player, Mission } from '../../models';

const reducer = createReducer(
	initalState,
	on(action.signOut, (state, { }) => ({ ...state, isLoading: true })),
	on(action.signOutSuccess, (state, { }) => ({ ...state, isLoading: false, userPlayer: null, isLogged: false })),
	on(action.signIn, (state, { }) => ({ ...state, isLoading: true })),
	on(action.signInSuccess, (state, { userPlayer }) => ({ ...state, isLogged: true, isLoading: false, userPlayer })),
	on(action.revealSpiesSuccess, (state, { }) => ({ ...state, isLoading: true })),
	on(action.revealSpies, (state, { }) => ({ ...state, isLoading: false })),
	on(action.updateBoardStatus, (state, { board }) => ({ ...state, board })),
	on(action.usersLoaded, (state, { users }) => ({ ...state, users: (Object.assign([], users) as Player[]).sort((a, b) => a.order - b.order), userPlayer: getUserPlayer(users, state.userPlayer) })),
	on(action.missionsLoaded, (state, { missions }) => ({ ...state, missions: (Object.assign([], missions) as Mission[]).sort((a, b) => parseInt(a.id, 2) - parseInt(b.id, 2)) })),
	on(action.pickUpCardSuccess, (state, { card }) => ({ ...state, userPlayer: { ...state.userPlayer, isSpy: card } })),
	on(action.startGame, (state, { }) => ({ ...state, isLoading: true })),
	on(action.gameStarted, (state, { }) => ({ ...state, isLoading: false })),
);

function getUserPlayer(players: Player[], userPlayer: Player) {
	return userPlayer === null ? null : { ...players.find(player => player.id === userPlayer.id) };
}


export function gameReducer(state: GameState | undefined, actionTriggered: Action) {
	return reducer(state, actionTriggered);
}
