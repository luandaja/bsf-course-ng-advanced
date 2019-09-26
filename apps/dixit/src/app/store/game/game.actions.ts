import { createAction, props } from '@ngrx/store';
import { BoardCard } from '../../models/BoardCard';
import { StoryCard } from '../../models/StoryCard';
import { Player } from '../../models';

export const fetchBoardCards = createAction('[Board Cards] Fetch board cards');

export const setBoardCard = createAction(
	'[Board Cards] Set board card',
	props<{ boardCard: BoardCard }>()
);

export const setGuessingTime = createAction(
	'[Board Cards] Set guessing time',
	props<{ isGuessingTime: boolean }>()
);

export const setAvaiableCards = createAction(
	'[Board Cards] Set avaiable cards index',
	props<{ cards: number[] }>()
);

// export const setExcludedCard = createAction(
// 	'[Board Cards] Set excluded card index',
// 	props<{ cardIndex: number }>()
// );
export const setPlayerTurn = createAction(
	'[Board Cards] Set player turn',
	props<{ playerTurn: number }>()
);

export const setHandCard = createAction(
	'[Board Cards] Set hand card index',
	props<{ cardIndex: number }>()
);

export const setHand = createAction(
	'[Board Cards] Set hand index',
	props<{ cards: number[], nextPlayerturn: number }>()
);

export const setCurrentStory = createAction(
	'[Board Cards] Set current story',
	props<{ currentStory: StoryCard }>()
);

export const updatePlayer = createAction(
	'[Board Cards] Update player',
	props<{ player: Player }>()
);


