import { Action, createReducer, on } from '@ngrx/store';
import {
	fetchBoardCards, setGuessingTime, setBoardCard, setCurrentStory,
	setVotesVisibility, setVote, nextRound, setUserHand, signIn, signInSuccess
} from './game.actions';
import { GameState, initalState } from './game.state';
import { Player } from '../../models';
import { BoardCard } from '../../models/BoardCard';

const reducer = createReducer(
	initalState,
	on(signIn, (state, { }) => ({ ...state, isLoading: true })),
	on(signInSuccess, (state, { userPlayer }) => ({ ...state, isLogged: true, userPlayer, players: add(state.players, [userPlayer]) })),

	on(fetchBoardCards, (state, { }) => ({ ...state, isLoading: true })),
	on(setBoardCard, (state, { boardCard }) => ({
		...state, userPlayer: updateUserOnCardThrowed(state.userPlayer),
		players: updatePlayersOnCardThrow(state.players, boardCard.owner), boardCards: addBoardCard(state.boardCards, boardCard),
		isGuessingTime: state.players.length === state.boardCards.length + 1,
		currentHand: state.currentHand.filter(card => card !== boardCard.cardIndex)
	})),
	on(setVote, (state, { cardIndex, player }) => ({
		...state, userPlayer: updateUserOnPlayerVoted(state.userPlayer),
		players: updatePlayersVotes(state.players, player), boardCards: updateCardsOnVoted(state.boardCards, cardIndex, player)
	})),
	on(setGuessingTime, (state, { isGuessingTime }) => ({ ...state, isGuessingTime })),
	on(setVotesVisibility, (state, { areVotesVisible }) => ({ ...state, areVotesVisible, players: updatedPlayesScore(state) })),
	on(setCurrentStory, (state, { currentStory }) => ({
		...state, currentStory,
		boardCards: addBoardCard(state.boardCards, { cardIndex: currentStory.cardIndex, owner: currentStory.storyTeller, votes: [] }),
		currentHand: state.currentHand.filter(card => card !== currentStory.cardIndex)
	})),
	on(nextRound, (state, { }) => ({
		...state, currentTurn: state.userPlayer.id + 1, currentStory: null, boardCards: [],
		userPlayer: state.players.find(player => player.id === state.userPlayer.id)
	})),
	on(setUserHand, (state, { cardsCount }) => ({
		...state, currentTurn: state.userPlayer.id + 1,
		userPlayer: state.players.find(player => player.id === state.userPlayer.id), currentHand: add(state.currentHand,
			state.avaiableCards.slice(0, cardsCount)), avaiableCards: state.avaiableCards.filter(card => !state.avaiableCards.slice(0, cardsCount).includes(card))
	})),
);

function getUser(userName, photoUrl, state: GameState): Player {
	const id = state.players.length + 1;
	const user = new Player(userName, photoUrl, id);
	user.isStoryTeller = id === 1;
	return { ...user };
}

function updateCardsOnVoted(boardCards: BoardCard[], cardIndex: number, player: Player) {
	const cards = boardCards.map(card => {
		const newCard = Object.assign({}, card);
		newCard.votes = Object.assign([], card.votes);
		return newCard;
	});
	cards.forEach(card => {
		if (card.cardIndex === cardIndex) {
			card.votes.push(player);
		}
	});
	return cards;
}

function updateUserOnCardThrowed(player: Player): Player {
	const newPlayer = Object.assign({}, player)
	newPlayer.hasThrowCard = true;
	return newPlayer;
}

function updateUserOnPlayerVoted(player: Player): Player {
	const newPlayer = Object.assign({}, player)
	newPlayer.hasVoted = true;
	return newPlayer;
}

function updatePlayersVotes(players: Player[], userPlayer: Player) {
	const newPlayers = players.map(player => Object.assign({}, player));
	newPlayers.forEach(player => {
		if (player.id === userPlayer.id)
			player.hasVoted = true;
	});
	return newPlayers;
}

function updatePlayersOnCardThrow(players: Player[], userPlayer: Player) {
	const newPlayers = players.map(player => Object.assign({}, player));
	newPlayers.forEach(player => {
		if (player.id === userPlayer.id)
			player.hasThrowCard = true;
	});
	return newPlayers;
}

function updatedPlayesScore(state: GameState): Player[] {
	const correctCard = state.boardCards.find(boardCard => boardCard.cardIndex === state.currentStory.cardIndex);
	const correctCardVotesCount = correctCard.votes.length;
	const newPlayers = state.players.map(player => Object.assign({}, player));
	const newStoryTeller = newPlayers.find(player => player.isStoryTeller).id + 1;
	if (correctCardVotesCount === newPlayers.length - 1 || correctCardVotesCount === 0) {
		newPlayers.forEach((player, index) => {
			if (!player.isStoryTeller)
				newPlayers[index].score += 2;
		});
	} else {
		const playersWhoGuessed = correctCard.votes.map(x => x.id);
		newPlayers.forEach(player => {
			if (player.isStoryTeller || playersWhoGuessed.includes(player.id)) {
				player.score += 3;
			}
		});
	}

	newPlayers
		.forEach(player => {
			if (!player.isStoryTeller) {
				const playerCard = state.boardCards.find(boardCard => boardCard.owner.id === player.id);
				player.score += playerCard.votes.length;
			}
			player.hasThrowCard = false;
			player.hasVoted = false;
			player.isStoryTeller = newStoryTeller === player.id;
		});

	return newPlayers;
}

function add(list: any[], item: any[]) {
	const newList = Object.assign([], list);
	return newList.concat(item);
}

function addBoardCard(list: any[], item: any) {
	const newList = add(list, item);
	shuffle(newList);
	return newList;
}

function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

export function gameReducer(state: GameState | undefined, action: Action) {
	return reducer(state, action);
}
