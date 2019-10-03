import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GameState } from './game.state';

const gameFeature = createFeatureSelector<GameState>('game');

export const getBoardCards = createSelector(
	gameFeature,
	(state: GameState) => state.boardCards
);

export const getAvaiableCards = createSelector(
	gameFeature,
	(state: GameState) => state.avaiableCards
);

export const getCurrentStory = createSelector(
	gameFeature,
	(state: GameState) => state.currentStory
);

export const getPlayers = createSelector(
	gameFeature,
	(state: GameState) => state.players
);

export const getIsGuessingTime = createSelector(
	gameFeature,
	(state: GameState) => state.isGuessingTime
);

export const getVotesVisibility = createSelector(
	gameFeature,
	(state: GameState) => state.areVotesVisible
);

export const getCurrentHand = createSelector(
	gameFeature,
	(state: GameState) => state.currentHand
);

export const getTurn = createSelector(
	gameFeature,
	(state: GameState) => state.currentTurn
);

export const getIsLogged = createSelector(
	gameFeature,
	state => state.isLogged
);

export const getUserPlayer = createSelector(
	gameFeature,
	state => state.userPlayer
);

export const getHasGameStarted = createSelector(
	gameFeature,
	state => state.hasGameStarted
);

export const getIsLoading = createSelector(
	gameFeature,
	state => state.isLoading
);

export const getTurnInfo = createSelector(
	gameFeature,
	state => {
		const { currentTurn, userPlayer } = state;
		const isUserTurn = (currentTurn === 0 && userPlayer.id === 1) || (currentTurn === userPlayer.id);
		const cardsCount = currentTurn === 0 ? 5 : 1;
		return { isUserTurn, cardsCount }
	}
);

export const getAlgo = createSelector(
	gameFeature,
	state => {
		const { hasGameStarted, isGuessingTime, players } = state;
		return { hasGameStarted: hasGameStarted, isGuessingTime, players }
	}
);

export const getScoreInput = createSelector(
	gameFeature,
	state => {
		const { userPlayer, boardCards, currentStory, players } = state;
		return { userPlayer, boardCards, currentStory, players }
	}
);