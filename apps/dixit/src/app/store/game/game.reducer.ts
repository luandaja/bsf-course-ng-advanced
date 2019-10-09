import { Action, createReducer, on } from '@ngrx/store';

import * as action from './game.actions';
import { GameState, initalState } from './game.state';
import { concat, update } from '../../models/Utils';
import { Player, BoardStatus } from '../../models';

const reducer = createReducer(
	initalState,
	on(action.signOut, (state, { }) => ({ ...state, isLoading: true })),
	on(action.signOutSuccess, (state, { }) => ({ ...state, isLoading: false, userPlayer: null, players: [], isLogged: false, isGuessingTime: false, isRoundFirst: true, currentHand: [], avaiableCards: [], boardCards: [], boardStatus: defaultStatus() })),
	on(action.signIn, (state, { }) => ({ ...state, isLoading: true })),
	on(action.signInSuccess, (state, { userPlayer }) => ({ ...state, isLogged: true, isLoading: false, userPlayer })),

	on(action.updateLoading, (state, { isLoading }) => ({ ...state, isLoading })),
	on(action.updateBoardStatus, (state, { boardStatus }) => ({ ...state, boardStatus })),

	on(action.playerStateRecovered, (state, { player, isRoundFirst, currentHand, isGuessingTime }) => ({ ...state, isLogged: player !== null, userPlayer: player, isRoundFirst, currentHand, isGuessingTime })),

	on(action.playersLoaded, (state, { players }) => ({ ...state, players: (Object.assign([], players) as Player[]).sort((a, b) => a.order - b.order), userPlayer: getUserPlayer(players, state.userPlayer) })),

	on(action.boardCardsLoaded, (state, { boardCards }) => ({ ...state, boardCards: Object.assign([], boardCards), isGuessingTime: state.players.length === boardCards.length })),

	on(action.avaiableCardsLoaded, (state, { cards }) => ({ ...state, avaiableCards: cards })),

	on(action.setBoardCard, (state, { }) => ({ ...state, isLoading: true })),
	on(action.boardCardSetted, (state, { boardCard }) => ({ ...state, isLoading: false, currentHand: state.currentHand.filter(card => card !== boardCard.cardIndex) })),

	on(action.setVote, (state, { }) => ({ ...state, isLoading: true })),
	on(action.voteSetted, (state, { boardCard }) => ({ ...state, isLoading: false, boardCards: update(state.boardCards, boardCard), userPlayer: { ...state.userPlayer, hasVoted: true } })),

	on(action.setCurrentStory, (state, { }) => ({ ...state, isLoading: true })),
	on(action.currentStorySetted, (state, { currentStory }) => ({ ...state, currentStory, isLoading: false, currentHand: state.currentHand.filter(x => x !== currentStory.cardIndex) })),

	on(action.playerScoreUpdated, (state, { userPlayer }) => ({ ...state, userPlayer, players: update(state.players, userPlayer) })),

	on(action.userHandSetted, (state, { cards }) => ({ ...state, isRoundFirst: false, currentHand: concat(state.currentHand, cards), avaiableCards: state.avaiableCards.filter(x => !cards.includes(x)) })),

);

function defaultStatus() {
	return {
		areVotesVisible: false,
		currentStory: null,
		hasGameStarted: false,
		playerInTurn: null,
		shouldDragCards: true
	} as BoardStatus;
}

function getUserPlayer(players: Player[], userPlayer: Player) {
	return userPlayer === null ? null : { ...players.find(player => player.id === userPlayer.id) };
}

export function gameReducer(state: GameState | undefined, actionTriggered: Action) {
	return reducer(state, actionTriggered);
}
