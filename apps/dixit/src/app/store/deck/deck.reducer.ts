import { Action, createReducer, on } from '@ngrx/store';
import { fetchCards, setCards, revealDeck } from './deck.actions';
import { DeckState, initalState } from './deck.state';
import { Card } from '../../models/Card';

const reducer = createReducer(
	initalState,
	on(fetchCards, (state, { }) => ({ ...state, isLoading: true })),
	on(setCards, (state, { cards: cards }) => ({ ...state, cards })),
	on(revealDeck, (state) => ({
		...state,
		activeCards: revealActiveCards(state.activeCards)
	}
	))
);

function revealActiveCards(cards: Card[]) {
	return cards.map((card: Card) => {
		const newCard = { ...card };
		newCard.isRevealed = true;
		return newCard;
	})
}

export function deckReducer(state: DeckState | undefined, action: Action) {
	return reducer(state, action);
}
