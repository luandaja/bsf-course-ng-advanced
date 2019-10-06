import { Action, createReducer, on } from '@ngrx/store';
import {
	setBoardCard, setCurrentStory,
	showVotes, nextRound, signIn, signInSuccess, boardCardsLoaded, boardCardSetted,
	updateUserPlayer, setVote, currentStorySetted, nextRoundSetted, userHandSetted,
	updateCurrentTurn, avaiableCardsLoaded, playersLoaded, updateHasGameStarted, setVotesVisibility, playerScoreUpdated, voteSetted, recoverPlayerState, playerStateRecovered
} from './game.actions';
import { GameState, initalState } from './game.state';
import { add, concat, shuffle, update } from '../../models/Utils';

const reducer = createReducer(
	initalState,
	on(signIn, (state, { }) => ({ ...state, isLoading: true })),
	on(signInSuccess, (state, { userPlayer }) => ({ ...state, isLogged: true, userPlayer })),
	on(playerStateRecovered, (state, { player, isFirstRound, currentHand, isLogged, isGuessingTime }) => ({ ...state, isLogged: isLogged, userPlayer: player, isFirstRound, currentHand, isGuessingTime })),

	on(playersLoaded, (state, { players }) => ({ ...state, players })),

	on(boardCardsLoaded, (state, { boardCards }) => ({ ...state, boardCards })),

	on(avaiableCardsLoaded, (state, { cards }) => ({ ...state, avaiableCards: cards })),

	on(setBoardCard, (state, { }) => ({ ...state, isLoading: true })),
	on(boardCardSetted, (state, { boardCard }) => ({
		...state, isLoading: false, boardCards: addBoardCard(state.boardCards, boardCard), currentHand: state.currentHand.filter(card => card !== boardCard.cardIndex),
		userPlayer: { ...state.userPlayer, hasThrowCard: true },
		isGuessingTime: state.players.length === state.boardCards.length + 1
	})),

	on(setVote, (state, { }) => ({ ...state, isLoading: true })),
	on(voteSetted, (state, { boardCard }) => ({ ...state, isLoading: false, boardCards: update(state.boardCards, boardCard), userPlayer: { ...state.userPlayer, hasVoted: true } })),

	on(updateUserPlayer, (state, { userPlayer }) => ({ ...state, userPlayer, players: update(state.players, state.userPlayer) })),

	on(updateHasGameStarted, (state, { hasGameStarted }) => ({ ...state, hasGameStarted })),

	on(setVotesVisibility, (state, { areVotesVisible }) => ({ ...state, areVotesVisible })),

	on(setCurrentStory, (state, { }) => ({ ...state, isLoading: true })),
	on(currentStorySetted, (state, { currentStory }) => ({ ...state, currentStory, isLoading: false, currentHand: state.currentHand.filter(x => x !== currentStory.cardIndex) })),

	on(showVotes, (state, { }) => ({ ...state, isLoading: true })),
	on(playerScoreUpdated, (state, { userPlayer }) => ({ ...state, isLoading: false, userPlayer, players: update(state.players, userPlayer) })),

	on(nextRound, (state, { }) => ({ ...state, isLoading: true })),
	on(nextRoundSetted, (state, { }) => ({ ...state, isLoading: false, boardCards: [], currentTurn: state.userPlayer.id + 1, currentStory: null })),

	on(userHandSetted, (state, { cards }) => ({ ...state, isLoading: false, isFirstRound: false, currentHand: concat(state.currentHand, cards), avaiableCards: state.avaiableCards.filter(x => !cards.includes(x)) })),

	on(updateCurrentTurn, (state, { currentTurn }) => ({ ...state, currentTurn })),
);

function addBoardCard(list: any[], item: any) {
	const newList = add(list, item);
	return shuffle(newList);
}

export function gameReducer(state: GameState | undefined, action: Action) {
	return reducer(state, action);
}
