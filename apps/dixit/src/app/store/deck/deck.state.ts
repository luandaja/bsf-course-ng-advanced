import { Player } from '../../models';
import { Card } from '../../models/Card';

export const boardDeckFeatureName = 'deck';
export interface DeckState {
	activeCards: Card[];
	playedCards: number[];
	isLogged: boolean;
}

export const initalState: DeckState = {
	isLogged: true,
	playedCards: [],
	activeCards: [
		{ cardIndex: 2, playerId: 1 },
		{ cardIndex: 6, playerId: 2 },
		{ cardIndex: 12, playerId: 3 },
		{ cardIndex: 34, playerId: 4 },
		{ cardIndex: 27, playerId: 5 },
		{ cardIndex: 49, playerId: 6 }
	]
};
