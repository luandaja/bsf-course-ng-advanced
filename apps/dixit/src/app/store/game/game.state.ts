import { Player, BoardStatus, BoardCard } from '../../models';

export const gameFeatureName = 'game';
export interface GameState {
	players: Player[];
	userPlayer: Player;
	isLogged: boolean;
	boardCards: BoardCard[];
	currentHand: number[];
	avaiableCards: number[];
	isLoading: boolean;
	isGuessingTime?: boolean;
	boardStatus?: BoardStatus;
	isRoundFirst?: boolean;
	avatars?: string[];
	isRestarting?: boolean;
}

const ale = { id: '1', order: 1, username: 'Ale', photoUrl: 'https://bit.ly/2ngbfJT', score: 0, isStoryTeller: true, hasVoted: false, hasThrowCard: false };
const pao = { id: '2', order: 2, username: 'Pao', photoUrl: 'https://bit.ly/2mLcpgt', score: 0, isStoryTeller: true, hasVoted: false, hasThrowCard: false };
const walter = { id: '3', order: 3, username: 'Walter', photoUrl: 'https://bit.ly/2lQfYBH', score: 0, isStoryTeller: false, hasVoted: true, hasThrowCard: true };
const myriam = { id: '4', order: 4, username: 'Myriam', photoUrl: 'https://bit.ly/2lOjrAQ', score: 0, isStoryTeller: false, hasVoted: false, hasThrowCard: true };
const brenda = { id: '5', order: 5, username: 'Brenda', photoUrl: 'https://bit.ly/2leFz7h', score: 0, isStoryTeller: false, hasVoted: true, hasThrowCard: true };
const vico = { id: '6', order: 6, username: 'Vico', photoUrl: 'https://bit.ly/2nmE0ov', score: 0, isStoryTeller: false, hasVoted: true, hasThrowCard: true };

export const initalState: GameState = {
	players: [],
	userPlayer: null,
	isLogged: false,
	isGuessingTime: false,
	isRoundFirst: false,
	boardStatus: {
		playerInTurn: null,
		currentStory: null,
		shouldDragCards: false,
		areVotesVisible: false,
		hasGameStarted: false
	},
	avatars: ['assets/ale.jpg', 'assets/vico.jpg', 'assets/myriam.jpg', 'assets/brenda.jpg', 'assets/pao.jpg', 'assets/walter.jpg', 'assets/user1.jpg', 'assets/user2.jpg', 'assets/user3.jpg', 'assets/user4.jpg'],
	currentHand: [],
	avaiableCards: [],
	isLoading: false,
	isRestarting: false,
	boardCards: []
};
