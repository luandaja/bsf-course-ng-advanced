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

export const getPlayerTurn = createSelector(
	gameFeature,
	(state: GameState) => state.playerTurn
);

export const getIsGuessingTime = createSelector(
	gameFeature,
	(state: GameState) => state.isGuessingTime
);
