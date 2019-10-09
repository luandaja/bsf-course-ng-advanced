import { Player, BoardStatus } from '../../models';
import { BoardCard } from '../../models/BoardCard';
import { StoryCard } from '../../models/StoryCard';

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
}
const ale = { id: '1', order: 1, username: 'Ale', photoUrl: 'https://bit.ly/2ngbfJT', score: 0, isStoryTeller: true, hasVoted: false, hasThrowCard: false };
const pao = { id: '2', order: 2, username: 'Pao', photoUrl: 'https://bit.ly/2mLcpgt', score: 0, isStoryTeller: true, hasVoted: false, hasThrowCard: false };
const walter = { id: '3', order: 3, username: 'Walter', photoUrl: 'https://bit.ly/2lQfYBH', score: 0, isStoryTeller: false, hasVoted: true, hasThrowCard: true };
const myriam = { id: '4', order: 4, username: 'Myriam', photoUrl: 'https://bit.ly/2lOjrAQ', score: 0, isStoryTeller: false, hasVoted: false, hasThrowCard: true };
const brenda = { id: '5', order: 5, username: 'Brenda', photoUrl: 'https://bit.ly/2leFz7h', score: 0, isStoryTeller: false, hasVoted: true, hasThrowCard: true };
const vico = { id: '6', order: 6, username: 'Vico', photoUrl: 'https://bit.ly/2nmE0ov', score: 0, isStoryTeller: false, hasVoted: true, hasThrowCard: true };

export const initalState: GameState = {
	players: [],// [pao, walter, myriam, brenda, vico, ale],
	userPlayer: null,//{ ...pao },
	isLogged: false,
	isGuessingTime: false,
	isRoundFirst: false,
	boardStatus: {
		playerInTurn: null,
		currentStory: null,//{ cardIndex: 78, title: 'test story', storyTeller: pao },
		shouldRefreshPlayer: false,
		shouldDragCards: false,
		areVotesVisible: false,
		hasGameStarted: false
	},
	currentHand: [],//[4, 67, 23, 12, 34],
	avaiableCards: [],//
	isLoading: false,
	boardCards: [
		// { cardIndex: 2, owner: pao, votes: [walter, brenda] },
		// { cardIndex: 6, owner: walter, votes: [] },
		// { cardIndex: 12, owner: myriam, votes: [vico] },
		// { cardIndex: 34, owner: brenda, votes: [] },
		// { cardIndex: 27, owner: vico, votes: [] },
		// { cardIndex: 78, owner: ale, votes: [] }
	]
};
