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
	(state: GameState) => state.currentState.currentStory
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
	(state: GameState) => state.currentState.areVotesVisible
);

export const getCurrentHand = createSelector(
	gameFeature,
	(state: GameState) => state.currentHand
);

export const getTurn = createSelector(
	gameFeature,
	(state: GameState) => state.currentState.currentTurn
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
	state => state.currentState.hasGameStarted
);

export const getIsLoading = createSelector(
	gameFeature,
	state => state.isLoading
);

export const getTurnInfo = createSelector(
	gameFeature,
	state => {
		const { currentState, userPlayer } = state;
		const isUserTurn = (currentState.currentTurn === 0 && userPlayer.id === 1) || (currentState.currentTurn === userPlayer.id);
		const cardsCount = currentState.currentTurn === 0 ? 5 : 1;
		return { isUserTurn, cardsCount }
	}
);

export const getAlgo = createSelector(
	gameFeature,
	state => {
		const { currentState, isGuessingTime, players } = state;
		return { hasGameStarted: currentState.hasGameStarted, isGuessingTime, players }
	}
	//({hasGameStaerted: state.hasGameStarted, isGuessingTime: state.hasGameStarted, players: state.players })
);

export const getScoreInput = createSelector(
	gameFeature,
	state => {
		const { userPlayer, boardCards, currentState, players } = state;
		return { userPlayer, boardCards, currentStory: currentState.currentStory, players }
	}
);