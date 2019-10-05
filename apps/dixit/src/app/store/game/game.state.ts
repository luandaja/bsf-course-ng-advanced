import { Player } from '../../models';
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
	currentTurn?: number;
	areVotesVisible?: boolean;
	hasGameStarted?: boolean;
	currentStory?: StoryCard;
	isFirstRound?: boolean;
}
const ale = { id: 1, username: 'Ale', photoUrl: 'https://bit.ly/2ngbfJT', score: 3, isStoryTeller: true, hasVoted: false, hasThrowCard: false };
const pao = { id: 2, username: 'Pao', photoUrl: 'https://bit.ly/2mLcpgt', score: 0, isStoryTeller: false, hasVoted: false, hasThrowCard: false };
const walter = { id: 3, username: 'Walter', photoUrl: 'https://bit.ly/2lQfYBH', score: 0, isStoryTeller: false, hasVoted: true, hasThrowCard: true };
const myriam = { id: 4, username: 'Myriam', photoUrl: 'https://bit.ly/2lOjrAQ', score: 0, isStoryTeller: false, hasVoted: false, hasThrowCard: true };
const brenda = { id: 5, username: 'Brenda', photoUrl: 'https://bit.ly/2leFz7h', score: 0, isStoryTeller: false, hasVoted: true, hasThrowCard: true };
const vico = { id: 6, username: 'Vico', photoUrl: 'https://bit.ly/2nmE0ov', score: 0, isStoryTeller: false, hasVoted: true, hasThrowCard: true };

export const initalState: GameState = {
	players: [],// [pao, walter, myriam, brenda, vico, ale],
	userPlayer: { ...pao },
	currentTurn: 0,
	areVotesVisible: false,
	hasGameStarted: false,
	currentStory: null,
	isLogged: true,
	isGuessingTime: true,
	currentHand: [],//[4, 67, 23, 12, 34],//4, 67, 23, 12, 34
	avaiableCards: [],// generateCardIndexes(),
	isLoading: false,
	isFirstRound: true,
	boardCards: [
		// { cardIndex: 2, owner: pao, votes: [walter, brenda] },
		// { cardIndex: 6, owner: walter, votes: [] },
		// { cardIndex: 12, owner: myriam, votes: [vico] },
		// { cardIndex: 34, owner: brenda, votes: [] },
		// { cardIndex: 27, owner: vico, votes: [] },
		// { cardIndex: 78, owner: ale, votes: [] }
	]
};