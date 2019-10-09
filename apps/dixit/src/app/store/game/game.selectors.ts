import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GameState } from './game.state';
import { Player } from '../../models';

const gameFeature = createFeatureSelector<GameState>('game');

export const getBoardCards = createSelector(
	gameFeature,
	(state: GameState) => state.boardCards
);

export const getCurrentStory = createSelector(
	gameFeature,
	(state: GameState) => state.boardStatus.currentStory
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
	(state: GameState) => state.boardStatus.areVotesVisible
);

export const getCurrentHand = createSelector(
	gameFeature,
	(state: GameState) => state.currentHand
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
	state => state.boardStatus.hasGameStarted
);

export const getIsLoading = createSelector(
	gameFeature,
	state => state.isLoading
);

export const getTurnInfo = createSelector(
	gameFeature,
	state => {
		const { userPlayer, isRoundFirst, boardStatus } = state;
		const isUserTurn = boardStatus.playerInTurn === userPlayer.id && boardStatus.hasGameStarted &&
			boardStatus.shouldDragCards && state.avaiableCards.length > 0;
		const cardsCount = isRoundFirst ? 5 : 1;
		return { isUserTurn, cardsCount }
	}
);

export const getPlayersState = createSelector(
	gameFeature,
	state => {
		const { isGuessingTime, players, boardStatus } = state;
		return { hasGameStarted: boardStatus.hasGameStarted, isGuessingTime, players }
	}
);
export const getFirstPlayerId = createSelector(
	gameFeature,
	state => {
		const firstPlayer = state.players.find(player => player.order === 1);
		return firstPlayer;
	}
);
export const getScoreInput = createSelector(
	gameFeature,
	state => {
		const { userPlayer, boardCards, boardStatus, players } = state;
		return { userPlayer, boardCards, currentStory: boardStatus.currentStory, players }
	}
);

export const getHandInfo = createSelector(
	gameFeature,
	(state: GameState) => {
		const { avaiableCards, userPlayer } = state;
		const nextPlayerId = getNextPlayerInTurn(state.userPlayer, state.players).id;
		const lastIndex = state.players.length - 1;
		const isPickUpCompleted = userPlayer.id === state.players[lastIndex].id;
		return { nextPlayerTurn: nextPlayerId, avaiableCards, isPickUpCompleted }
	}
);

export const getNextPlayer = createSelector(
	gameFeature,
	(state: GameState) => {
		const { userPlayer, players } = state;
		return getNextPlayerInTurn(userPlayer, players);
	}
);

export const getNextTurnInfo = createSelector(
	gameFeature,
	(state: GameState) => {
		const { userPlayer, players } = state;
		const nextStoryTeller = getNextPlayerInTurn(userPlayer, players);
		return { userPlayerId: userPlayer.id, nextStoryTellerId: nextStoryTeller.id, firstPlayer: players.find(player => player.order === 1) };
	}
);

function getNextPlayerInTurn(userPlayer: Player, players: Player[]) {
	const isLastPlayer = userPlayer.order === players.length;
	const nextOrder = (isLastPlayer ? 1 : userPlayer.order + 1);
	return players.find(player => player.order === nextOrder);
}

export const getIsPlayersTurn = createSelector(
	gameFeature,
	(state: GameState) => (state.userPlayer !== null && !state.userPlayer.isStoryTeller) && state.boardStatus.currentStory !== null && !state.userPlayer.hasThrowCard &&
		!state.isLoading && !state.isGuessingTime && !state.boardStatus.areVotesVisible && state.currentHand.length > 0
);

export const getIsStoryTellerTurn = createSelector(
	gameFeature,
	(state: GameState) => (state.userPlayer !== null && state.userPlayer.isStoryTeller) && state.boardStatus.currentStory === null
);

export const getUserPlayerState = createSelector(
	gameFeature,
	(state: GameState) => {
		const { userPlayer, isRoundFirst, currentHand, isLogged, isGuessingTime } = state;
		return { userPlayer, isRoundFirst, currentHand, isLogged, isGuessingTime }
	}
);

export const getPlayerVoteInfo = createSelector(
	gameFeature,
	(state: GameState) => {
		const playerCanVote = !state.userPlayer.isStoryTeller && state.boardStatus.currentStory !== null &&
			!state.userPlayer.hasVoted && !state.isLoading && state.isGuessingTime && !state.boardStatus.areVotesVisible;
		return { playerCanVote, userPlayerId: state.userPlayer.id }
	}
);

