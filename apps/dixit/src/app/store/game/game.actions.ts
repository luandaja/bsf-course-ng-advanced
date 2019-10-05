import { createAction, props } from '@ngrx/store';
import { BoardCard } from '../../models/BoardCard';
import { StoryCard } from '../../models/StoryCard';
import { Player } from '../../models';

export const boardCardsLoaded = createAction('[Board Cards] Loaded board cards',
	props<{ boardCards: BoardCard[] }>()
);

export const fetchAvaiableCards = createAction('[Board Cards] Fetch avaiable cards');
export const avaiableCardsLoaded = createAction('[Board Cards] Loaded avaiable cards',
	props<{ cards: number[] }>()
);

export const fetchPlayers = createAction('[Board Card] Fetch players');
export const playersLoaded = createAction('[Board Cards] Loaded players',
	props<{ players: Player[] }>()
);

export const nextRound = createAction('[Board Cards] Set next round',
	props<{ nextTurn: number }>()
);
export const nextRoundSetted = createAction('[Board Cards] next riund setted');

export const setBoardCard = createAction(
	'[Board Cards] Set single board card',
	props<{ boardCard: BoardCard }>()
);

export const boardCardSetted = createAction(
	'[Board Cards] Single board card setted',
	props<{ boardCard: BoardCard }>()
);

export const setVote = createAction(
	'[Board Cards] Set vote',
	props<{ boardCard: BoardCard, userPlayer: Player }>()
);

export const voteSetted = createAction(
	'[Board Cards] vote setted',
	props<{ boardCard: BoardCard }>()
);

export const setGuessingTime = createAction(
	'[Board Cards] Set guessing time',
	props<{ isGuessingTime: boolean }>()
);

export const updateCurrentTurn = createAction(
	'[Player Hand] Update current turn',
	props<{ currentTurn: number }>()
);
export const setNextTurn = createAction('[Board Cards] Set next turn');

export const showVotes = createAction('[Board Cards] Show votes');

export const setCurrentStory = createAction(
	'[Board Cards] Set current story',
	props<{ currentStory: StoryCard }>()
);
export const currentStorySetted = createAction(
	'[Board Cards] Current story setted',
	props<{ currentStory: StoryCard }>()
);

export const setUserHand = createAction(
	'[Player Hand] Set hands card',
	props<{ cardsCount: number }>()
);

export const setVotesVisibility = createAction(
	'[Player Hand] Set votes visibility',
	props<{ areVotesVisible: boolean }>()
);

export const updatePlayerScore = createAction(
	'[Player Hand] Update player score'
);

export const playerScoreUpdated = createAction(
	'[Player Hand] Player score updated',
	props<{ userPlayer: Player }>()
);

export const userHandSetted = createAction(
	'[Player Hand] User hands card setted',
	props<{ cards: number[] }>()
);

export const signIn = createAction(
	'[Auth] Sign in',
	props<{ username: string; photoUrl: string }>()
);

export const signInSuccess = createAction(
	'[Auth] Sign in success',
	props<{ userPlayer: Player }>());

export const updateUserPlayer = createAction(
	'[Auth] Update user player',
	props<{ userPlayer: Player }>()
);

export const updateHasGameStarted = createAction(
	'[Game] Update has game started',
	props<{ hasGameStarted: boolean }>()
);

export const startGame = createAction('[Game] start game');
export const gameStarted = createAction('[Game] game started');
export const signOut = createAction('[Auth] Sign out');
export const nothing = createAction('Nothing');




