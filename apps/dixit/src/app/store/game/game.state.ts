import { Player } from '../../models';
import { BoardCard } from '../../models/BoardCard';
import { StoryCard } from '../../models/StoryCard';

export const gameFeatureName = 'game';
export interface GameState {
	players: Player[];
	currentTurn: number;
	isGuessingTime: boolean;
	userPlayer: Player;
	isLogged: boolean;
	currentStory: StoryCard;
	boardCards: BoardCard[];
	currentHand: number[];
	avaiableCards: number[];
	areVotesVisible: boolean;
	isLoading: boolean;
	hasGameStarted: boolean
}
const ale = { id: 1, username: 'Ale', photoUrl: 'https://bit.ly/2ngbfJT', score: 0, isStoryTeller: true, hasVoted: false, hasThrowCard: false };
const pao = { id: 2, username: 'Pao', photoUrl: 'https://bit.ly/2mLcpgt', score: 0, isStoryTeller: false, hasVoted: false, hasThrowCard: true };
const walter = { id: 3, username: 'Walter', photoUrl: 'https://bit.ly/2lQfYBH', score: 0, isStoryTeller: false, hasVoted: true, hasThrowCard: true };
const myriam = { id: 4, username: 'Myriam', photoUrl: 'https://bit.ly/2lOjrAQ', score: 0, isStoryTeller: false, hasVoted: false, hasThrowCard: true };
const brenda = { id: 5, username: 'Brenda', photoUrl: 'https://bit.ly/2leFz7h', score: 0, isStoryTeller: false, hasVoted: true, hasThrowCard: true };
const vico = { id: 6, username: 'Vico', photoUrl: 'https://bit.ly/2nmE0ov', score: 0, isStoryTeller: false, hasVoted: true, hasThrowCard: true };

export const initalState: GameState = {
	players: [],// [pao, walter, myriam, brenda, vico, ale],
	userPlayer: null,//{ ...ale },
	hasGameStarted: false,
	isLogged: false,
	currentTurn: 0,
	currentStory: null,//{ cardIndex: 78, title: 'test story', storyTeller: ale },
	isGuessingTime: false,
	areVotesVisible: false,
	boardCards: [
		// { cardIndex: 2, owner: pao, votes: [walter, brenda] },
		// { cardIndex: 6, owner: walter, votes: [] },
		// { cardIndex: 12, owner: myriam, votes: [vico] },
		// { cardIndex: 34, owner: brenda, votes: [] },
		// { cardIndex: 27, owner: vico, votes: [] },
		// { cardIndex: 78, owner: ale, votes: [] }
	],
	currentHand: [],//4, 67, 23, 12, 34
	avaiableCards: [],// generateCardIndexes(),
	isLoading: false
};


function generateCardIndexes(): number[] {
	const cardIndexes: number[] = [];
	for (let index = 1; index < 100; index++) {
		cardIndexes.push(index);
	}
	shuffle(cardIndexes);
	return cardIndexes;
}

function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}
