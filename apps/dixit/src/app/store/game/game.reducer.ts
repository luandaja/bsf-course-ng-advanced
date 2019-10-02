import { Action, createReducer, on } from '@ngrx/store';
import {
	fetchBoardCards, setBoardCard, setCurrentStory,
	showVotes, nextRound, signIn, signInSuccess, boardCardsLoaded, boardCardSetted,
	updateUserPlayer, setVote, currentStorySetted, votesShown, nextRoundSetted, userHandSetted, setVotesVisibility, updateCurrentTurn, avaiableCardsLoaded, playersLoaded, setNextTurn, updateHasGameStarted
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

	on(setCurrentStory, (state, { }) => ({ ...state, isLoading: true })),
	on(currentStorySetted, (state, { currentStory }) => ({ ...state, currentStory, isLoading: false })),

	on(showVotes, (state, { }) => ({ ...state, isLoading: true })),
	on(votesShown, (state, { }) => ({ ...state, isLoading: false, areVotesVisible: true })),

	on(nextRound, (state, { }) => ({ ...state, isLoading: true })),
	on(nextRoundSetted, (state, { nextTurn }) => ({ ...state, isLoading: false, currentTurn: nextTurn, currentStory: null, boardCards: [] })),

	on(userHandSetted, (state, { cards }) => ({ ...state, isLoading: false, currentHand: concat(state.currentHand, cards) })),

	on(setVotesVisibility, (state, { areVotesVisible }) => ({ ...state, areVotesVisible })),
	//on(setNextTurn, (state, { }) => ({ ...state, currentTurn: state.userPlayer.id + 1 })),
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
