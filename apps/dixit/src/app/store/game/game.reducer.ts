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
	on(setBoardCard, (state, { boardCard }) => ({ ...state, boardCards: addBoardCard(state.boardCards, boardCard), isGuessingTime: state.players.length === state.boardCards.length, currentHand: state.currentHand.filter(card => card !== boardCard.cardIndex) })),
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
	const newList = Object.assign([], list);
	newList.push(item);
	return newList;
}

function addBoardCard(list: any[], item: any) {
	const newList = add(list, item);
	shuffle(newList);
	return newList;
}

function update(players: any[], player: any): any[] {
	const index = players.indexOf(player);
	players.splice(index, 0, player);
	return players;
}

function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

export function gameReducer(state: GameState | undefined, action: Action) {
	return reducer(state, action);
}
