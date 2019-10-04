import { Action, createReducer, on } from '@ngrx/store';
import {
	fetchBoardCards, setBoardCard, setCurrentStory,
	showVotes, nextRound, signIn, signInSuccess, boardCardsLoaded, boardCardSetted,
	updateUserPlayer, setVote, currentStorySetted, nextRoundSetted, userHandSetted, updateCurrentTurn, avaiableCardsLoaded, playersLoaded, updateHasGameStarted, votesVisibilitySetted, setVotesVisibility, playerScoreUpdated
} from './game.actions';
import { GameState, initalState } from './game.state';
import { add, concat, shuffle, update } from '../../models/Utils';

const reducer = createReducer(
	initalState,
	on(signIn, (state, { }) => ({ ...state, isLoading: true })),
	on(signInSuccess, (state, { userPlayer }) => ({ ...state, isLoading: false, isLogged: true, userPlayer })),

	on(playersLoaded, (state, { players }) => ({ ...state, players })),

	on(fetchBoardCards, (state, { }) => ({ ...state, isLoading: true })),
	on(boardCardsLoaded, (state, { boardCards }) => ({ ...state, isLoading: false, boardCards })),

	on(avaiableCardsLoaded, (state, { cards }) => ({ ...state, avaiableCards: cards })),

	on(setBoardCard, (state, { }) => ({ ...state, isLoading: true })),
	on(boardCardSetted, (state, { boardCard }) => ({
		...state, boardCards: addBoardCard(state.boardCards, boardCard), isLoading: false, currentHand: state.currentHand.filter(card => card !== boardCard.cardIndex),
		isGuessingTime: state.players.length === state.boardCards.length + 1
	})),

	on(updateUserPlayer, (state, { userPlayer }) => ({ ...state, userPlayer, players: update(state.players, state.userPlayer) })),

	on(setVote, (state, { }) => ({ ...state, isLoading: true })),

	on(updateHasGameStarted, (state, { hasGameStarted }) => ({ ...state, hasGameStarted })),

	on(setVotesVisibility, (state, { areVotesVisible }) => ({ ...state, areVotesVisible })),

	on(setCurrentStory, (state, { }) => ({ ...state, isLoading: true })),
	on(currentStorySetted, (state, { currentStory }) => ({ ...state, currentStory, isLoading: false, currentHand: state.currentHand.filter(x => x !== currentStory.cardIndex) })),

	on(showVotes, (state, { }) => ({ ...state, isLoading: true })),
	on(votesVisibilitySetted, (state, { userPlayer }) => {
		console.log("votesVisibilitySetted", userPlayer);
		return ({ ...state, isLoading: false, areVotesVisible: true })
	}),
	on(playerScoreUpdated, (state, { userPlayer }) => {
		console.log("playerScoreUpdated", userPlayer);
		return ({ ...state, isLoading: false, userPlayer, players: update(state.players, userPlayer) })
	}),

	on(nextRound, (state, { }) => ({ ...state, isLoading: true })),
	on(nextRoundSetted, (state, { }) => ({ ...state, isLoading: false, boardCards: [], currentTurn: state.userPlayer.id + 1, currentStory: null })),

	on(userHandSetted, (state, { cards }) => ({ ...state, isLoading: false, isFirstRound: false, currentHand: concat(state.currentHand, cards), avaiableCards: state.avaiableCards.filter(x => !cards.includes(x)) })),

	on(updateCurrentTurn, (state, { currentTurn }) => ({ ...state, currentTurn })),
);

function getUserPlayer(state: GameState) {
	return (state.userPlayer === null) ? state.userPlayer : state.players.find(player => player.id === state.userPlayer.id)
}

function addBoardCard(list: any[], item: any) {
	const newList = add(list, item);
	return shuffle(newList);
}

export function gameReducer(state: GameState | undefined, action: Action) {
	return reducer(state, action);
}
