import { createAction, props } from '@ngrx/store';
import { Card } from '../../models/Card';

export const fetchCards = createAction('[Cards] Fetch board-deck');

export const setCards = createAction(
	'[Cards] Set board-deck',
	props<{ cards: Card[] }>()
);

export const revealDeck = createAction(
	'[Cards] Reveal active cards'
);
