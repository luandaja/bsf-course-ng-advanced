import { Player } from '../../models';
import { BoardCard } from '../../models/BoardCard';
import { StoryCard } from '../../models/StoryCard';

export const gameFeatureName = 'game';
export interface GameState {
	players: Player[];
	currentTurn: number;
	userPlayer: Player;
	isLogged: boolean;
	isGuessingTime: boolean;
	currentStory: StoryCard;
	boardCards: BoardCard[];
	currentHand: number[];
	avaiableCards: number[];
	areVotesVisible: boolean;
	isLoading: boolean;
}
const ale = { playerId: 1, userName: 'Ale', photoUrl: 'https://bit.ly/2ngbfJT', score: 0, order: 6, isStoryTeller: false, hasVoted: false, hasThrowCard: false };
const pao = { playerId: 2, userName: 'Pao', photoUrl: 'https://bit.ly/2mLcpgt', score: 0, order: 1, isStoryTeller: true, hasVoted: false, hasThrowCard: true };
const walter = { playerId: 3, userName: 'Walter', photoUrl: 'https://bit.ly/2lQfYBH', score: 0, order: 2, isStoryTeller: false, hasVoted: true, hasThrowCard: true };
const myriam = { playerId: 4, userName: 'Myriam', photoUrl: 'https://bit.ly/2lOjrAQ', score: 0, order: 3, isStoryTeller: false, hasVoted: false, hasThrowCard: true };
const brenda = { playerId: 5, userName: 'Brenda', photoUrl: 'https://bit.ly/2leFz7h', score: 0, order: 4, isStoryTeller: false, hasVoted: true, hasThrowCard: true };
const vico = { playerId: 6, userName: 'Vico', photoUrl: 'https://bit.ly/2nmE0ov', score: 0, order: 5, isStoryTeller: false, hasVoted: true, hasThrowCard: true };

export const initalState: GameState = {
	players: [pao, walter, myriam, brenda, vico, ale],
	userPlayer: { ...ale },
	isLogged: true,
	currentTurn: 6,
	currentStory: { cardIndex: 78, title: 'test story', storyTeller: pao },
	isGuessingTime: false,
	areVotesVisible: false,
	boardCards: [
		{ cardIndex: 2, owner: pao, votes: [walter, brenda] },
		{ cardIndex: 6, owner: walter, votes: [] },
		{ cardIndex: 12, owner: myriam, votes: [vico] },
		{ cardIndex: 34, owner: brenda, votes: [] },
		{ cardIndex: 27, owner: vico, votes: [] },
		//	{ cardIndex: 78, owner: ale, votes: [] }
	],
	currentHand: [],//4, 67, 23, 12, 34
	avaiableCards: generateCardIndexes(),
	isLoading: true
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
