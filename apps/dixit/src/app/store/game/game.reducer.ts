import { Action, createReducer, on } from '@ngrx/store';
import { fetchBoardCards, setGuessingTime, setBoardCard, setCurrentStory, updatePlayer, setHandCard, setAvaiableCards, setHand, setPlayerTurn } from './game.actions';
import { GameState, initalState } from './game.state';
import { Player } from '../../models';


const reducer = createReducer(
	initalState,
	on(fetchBoardCards, (state, { }) => ({ ...state, isLoading: true })),
	on(setBoardCard, (state, { boardCard }) => ({ ...state, boardCards: add(state.boardCards, boardCard) })),
	on(setGuessingTime, (state, { isGuessingTime }) => ({ ...state, isGuessingTime })),
	on(setAvaiableCards, (state, { cards }) => ({ ...state, avaiableCards: cards })),
	on(setHandCard, (state, { cardIndex }) => ({ ...state, currentHand: add(state.currentHand, cardIndex), avaiableCards: state.avaiableCards.filter(index => index !== cardIndex) })),
	on(setPlayerTurn, (state, { playerTurn }) => ({ ...state, playerTurn })),
	on(setHand, (state, { cards, nextPlayerturn }) => ({ ...state, currentHand: cards, avaiableCards: state.avaiableCards.filter(cardIndex => !cards.includes(cardIndex)), playerTurn: nextPlayerturn })),
	on(setCurrentStory, (state, { currentStory }) => ({ ...state, currentStory })),
	on(updatePlayer, (state, { player }) => ({ ...state, players: update(state.players, player) }))
);

function add(list: any[], item: any) {
	list.push(item);
	return list;
}

function update(players: Player[], player: Player): Player[] {
	const index = players.indexOf(player);
	players.splice(index, 0, player);
	return players;
}

export function gameReducer(state: GameState | undefined, action: Action) {
	return reducer(state, action);
}
