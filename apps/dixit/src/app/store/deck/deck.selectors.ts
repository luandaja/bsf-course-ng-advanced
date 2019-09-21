import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DeckState } from './deck.state';

const deckFeature = createFeatureSelector<DeckState>('deck');

export const getActiveCards = createSelector(
	deckFeature,
	(state: DeckState) => state.activeCards
);

export const getPlayedCards = createSelector(
	deckFeature,
	(state: DeckState) => state.playedCards
);
