import { Action, createReducer, on } from '@ngrx/store';
import {
	fetchBoardCards, setGuessingTime, setBoardCard, setCurrentStory, updatePlayer,
	setHandCard, setAvaiableCards, setHand, setPlayerTurn, setVotesVisibility, setVote
} from './game.actions';
import { GameState, initalState } from './game.state';
import { Player } from '../../models';
import { BoardCard } from '../../models/BoardCard';


const reducer = createReducer(
	initalState,
	on(fetchBoardCards, (state, { }) => ({ ...state, isLoading: true })),
	on(setBoardCard, (state, { boardCard }) => ({ ...state, boardCards: add(state.boardCards, boardCard), isGuessingTime: state.players.length === state.boardCards.length })),
	on(setVote, (state, { cardIndex, player }) => ({ ...state, boardCards: vote(state.boardCards, cardIndex, player) })),
	on(setGuessingTime, (state, { isGuessingTime }) => ({ ...state, isGuessingTime })),
	on(setVotesVisibility, (state, { areVotesVisible }) => ({ ...state, areVotesVisible })),
	on(setAvaiableCards, (state, { cards }) => ({ ...state, avaiableCards: cards })),
	on(setHandCard, (state, { cardIndex }) => ({ ...state, currentHand: add(state.currentHand, cardIndex), avaiableCards: state.avaiableCards.filter(index => index !== cardIndex) })),
	on(setHand, (state, { cards, nextPlayerturn }) => ({ ...state, currentHand: cards, currentTurn: nextPlayerturn })),//avaiableCards: state.avaiableCards.filter(cardIndex => !cards.includes(cardIndex))
	on(setCurrentStory, (state, { currentStory }) => ({ ...state, currentStory })),
	on(updatePlayer, (state, { player }) => ({ ...state, players: update(state.players, player) })),
	on(setPlayerTurn, (state, { playerTurn }) => ({ ...state, currentTurn: playerTurn }))
);

function vote(boardCards: BoardCard[], cardIndex: number, player: Player) {
	const cards = Object.assign([], boardCards);
	const votedCardIndex = cards.findIndex(card => card.cardIndex === cardIndex);
	const votedCard = Object.assign({}, cards[votedCardIndex]);
	const votes = Object.assign([], votedCard.votes);
	votes.push(player);
	votedCard.votes = votes;
	cards.splice(votedCardIndex, 1, votedCard);
	return cards;
}

function add(list: any[], item: any) {
	list.push(item);
	return list;
}

function update(players: any[], player: any): any[] {
	const index = players.indexOf(player);
	players.splice(index, 0, player);
	return players;
}

export function gameReducer(state: GameState | undefined, action: Action) {
	return reducer(state, action);
}
