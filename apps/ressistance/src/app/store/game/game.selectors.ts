import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GameState } from './game.state';
import { Player } from '../../models';

const gameFeature = createFeatureSelector<GameState>('game');

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
	state => state.board.hasGameStarted
);

export const getUsers = createSelector(
	gameFeature,
	state => state.users
);

export const getUserAvatars = createSelector(
	gameFeature,
	state => state.users.map(user => user.photoUrl)
);

export const getIsTeamSelectable = createSelector(
	gameFeature,
	state => {
		const currentMission = state.missions.find(mission => mission.id === state.board.missionNumber.toString());
		return currentMission === undefined || !currentMission.hasBeenProposed && !currentMission.isApproved;
	}
);

export const getMissionInfo = createSelector(
	gameFeature,
	state => {
		const { board, users, userPlayer } = state;
		return { playersCount: users.length, missionNumber: board.missionNumber, userPlayer };
	}
);

export const getIsLoading = createSelector(
	gameFeature,
	state => state.isLoading
);

export const getIsRestarting = createSelector(
	gameFeature,
	(state: GameState) => state.isRestarting
);

export const getAvatars = createSelector(
	gameFeature,
	(state: GameState) => state.avatars
);

export const getAbleToLogin = createSelector(
	gameFeature,
	state => !state.board.hasGameStarted && !state.isRestarting && !state.isLogged
);

export const getAbleToRestart = createSelector(
	gameFeature,
	state => state.board.hasGameStarted && !state.isRestarting
);

export const getCards = createSelector(
	gameFeature,
	state => state.board.cards
);

export const getCurrentMission = createSelector(
	gameFeature,
	state => state.missions.find(mission => mission.id === state.board.missionNumber.toString())
);

export const getSpiesInfo = createSelector(
	gameFeature,
	state => {
		const { userPlayer, board, users } = state;
		const spies = userPlayer.isSpy ? users.filter(user => user.isSpy).map(user => user.photoUrl) : [];
		return { wereSpiesRevealed: board.wereSpiesRevealed, spies };
	}
);

export const getFirstPlayerId = createSelector(
	gameFeature,
	state => {
		const firstPlayer = state.users.find(player => player.order === 1);
		return firstPlayer;
	}
);

export const getIsPickingUpCard = createSelector(
	gameFeature,
	state => state.board.shouldDragCards
);

export const getAbleToRevealSpies = createSelector(
	gameFeature,
	state => !state.board.wereSpiesRevealed && !state.board.shouldDragCards
);

export const getTurnInfo = createSelector(
	gameFeature,
	state => {
		const { userPlayer, board } = state;
		const isUserTurn = board.playerInTurn === userPlayer.id && board.hasGameStarted &&
			board.shouldDragCards && state.board.cards.length > 0;
		return { isUserTurn, cards: board.cards }
	}
);

export const getHandInfo = createSelector(
	gameFeature,
	(state: GameState) => {
		const { userPlayer, board } = state;
		const nextPlayerId = getNextPlayerInTurn(state.userPlayer, state.users).id;
		const lastIndex = state.users.length - 1;
		const isPickUpCompleted = userPlayer.id === state.users[lastIndex].id;
		return { nextPlayerTurn: nextPlayerId, cards: board.cards, isPickUpCompleted }
	}
);

function getNextPlayerInTurn(userPlayer: Player, users: Player[]) {
	const isLastPlayer = userPlayer.order === users.length;
	const nextOrder = (isLastPlayer ? 1 : userPlayer.order + 1);
	return users.find(player => player.order === nextOrder);
}
