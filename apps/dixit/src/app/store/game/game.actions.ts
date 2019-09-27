import { createAction, props } from '@ngrx/store';
import { BoardCard } from '../../models/BoardCard';
import { StoryCard } from '../../models/StoryCard';
import { Player } from '../../models';

export const fetchBoardCards = createAction('[Board Cards] Fetch board cards');

export const setBoardCard = createAction(
	'[Board Cards] Set single board card',
	props<{ boardCard: BoardCard }>()
);

export const setVote = createAction(
	'[Board Cards] Set vote',
	props<{ cardIndex: number, player: Player }>()
);

export const setGuessingTime = createAction(
	'[Board Cards] Set guessing time',
	props<{ isGuessingTime: boolean }>()
);

export const setVotesVisibility = createAction(
	'[Board Cards] Set votes visibility',
	props<{ areVotesVisible: boolean }>()
);

export const setAvaiableCards = createAction(
	'[Board Cards] Set avaiable cards',
	props<{ cards: number[] }>()
);

export const setPlayerTurn = createAction(
	'[Board Cards] Set current turn',
	props<{ playerTurn: number }>()
);

export const setCurrentStory = createAction(
	'[Board Cards] Set current story',
	props<{ currentStory: StoryCard }>()
);

export const setHandCard = createAction(
	'[Player Hand] Set single hand card',
	props<{ cardIndex: number }>()
);

export const setHand = createAction(
	'[Player Hand] Set player hand',
	props<{ cards: number[], nextPlayerturn: number }>()
);

export const updatePlayer = createAction(
	'[Score] Update player',
	props<{ player: Player }>()
);

export const signIn = createAction(
	'[Auth] Sign in',
	props<{ username: string; password: string }>()
);


export const signOut = createAction('[Auth] Sign out');

