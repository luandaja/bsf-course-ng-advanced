import { Action, createReducer, on } from '@ngrx/store';
import {
	setBoardCard, setCurrentStory,
	showVotes, nextRound, signIn, signInSuccess, boardCardsLoaded, boardCardSetted,
	setVote, currentStorySetted, userHandSetted,
	avaiableCardsLoaded, playersLoaded, playerScoreUpdated, voteSetted, playerStateRecovered, updateBoardStatus, updateLoading
} from './game.actions';
import { GameState, initalState } from './game.state';
import { add, concat, shuffle, update } from '../../models/Utils';
import { Player } from '../../models';

const reducer = createReducer(
	initalState,
	on(signIn, (state, { }) => ({ ...state, isLoading: true })),
	on(signInSuccess, (state, { userPlayer }) => ({ ...state, isLogged: true, isLoading: false, userPlayer })),
	on(updateLoading, (state, { isLoading }) => ({ ...state, isLoading })),

	// on(gameStarted, (state, { playerInTurn }) => ({ ...state  })),

	on(updateBoardStatus, (state, { boardStatus }) => ({ ...state, boardStatus })),

	on(playerStateRecovered, (state, { player, isRoundFirst, currentHand, isGuessingTime }) => ({ ...state, isLogged: player !== null, userPlayer: player, isRoundFirst, currentHand, isGuessingTime })),

	on(playersLoaded, (state, { players }) => ({ ...state, players: (Object.assign([], players) as Player[]).sort((a, b) => a.order - b.order), userPlayer: { ...players.find(player => player.id === state.userPlayer.id) } })),

	on(boardCardsLoaded, (state, { boardCards }) => ({ ...state, boardCards: Object.assign([], boardCards), isGuessingTime: state.players.length === boardCards.length })),

	on(avaiableCardsLoaded, (state, { cards }) => ({ ...state, avaiableCards: cards })),

	on(setBoardCard, (state, { }) => ({ ...state, isLoading: true })),
	on(boardCardSetted, (state, { boardCard }) => ({
		...state, isLoading: false, boardCards: addBoardCard(state.boardCards, boardCard), currentHand: state.currentHand.filter(card => card !== boardCard.cardIndex),
		userPlayer: { ...state.userPlayer, hasThrowCard: true }
	})),

	on(setVote, (state, { }) => ({ ...state, isLoading: true })),
	on(voteSetted, (state, { boardCard }) => ({ ...state, isLoading: false, boardCards: update(state.boardCards, boardCard), userPlayer: { ...state.userPlayer, hasVoted: true } })),

	on(setCurrentStory, (state, { }) => ({ ...state, isLoading: true })),
	on(currentStorySetted, (state, { currentStory }) => ({ ...state, currentStory, isLoading: false, userPlayer: { ...state.userPlayer, hasThrowCard: true }, currentHand: state.currentHand.filter(x => x !== currentStory.cardIndex) })),

	on(showVotes, (state, { }) => ({ ...state, isLoading: true })),
	on(playerScoreUpdated, (state, { userPlayer }) => ({ ...state, isLoading: false, userPlayer, players: update(state.players, userPlayer) })),

	on(nextRound, (state, { }) => ({ ...state, isLoading: true })),

	on(userHandSetted, (state, { cards }) => ({ ...state, isRoundFirst: false, currentHand: concat(state.currentHand, cards), avaiableCards: state.avaiableCards.filter(x => !cards.includes(x)) })),

);

function addBoardCard(list: any[], item: any) {
	const newList = add(list, item);
	return shuffle(newList);
}

export function gameReducer(state: GameState | undefined, action: Action) {
	return reducer(state, action);
}
