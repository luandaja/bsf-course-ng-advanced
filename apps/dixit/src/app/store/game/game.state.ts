import { Player } from '../../models';
import { BoardCard } from '../../models/BoardCard';
import { StoryCard } from '../../models/StoryCard';

export const gameFeatureName = 'game';
export interface GameState {
	players: Player[];
	currentTurn: number;
	isGuessingTime: boolean;
	currentStory: StoryCard;
	boardCards: BoardCard[];
	currentHand: number[];
	avaiableCards: number[];
	areVotesVisible: boolean;
	isLoading: boolean;
}

const pao = { playerId: 1, userName: 'Pao', photoUrl: 'https://bit.ly/2mLcpgt', score: 0, order: 1 };
const walter = { playerId: 2, userName: 'Walter', photoUrl: 'https://bit.ly/2lQfYBH', score: 0, order: 2 };
const myriam = { playerId: 3, userName: 'Myriam', photoUrl: 'https://bit.ly/2lOjrAQ', score: 0, order: 3 };
const brenda = { playerId: 4, userName: 'Brenda', photoUrl: 'https://bit.ly/2leFz7h', score: 0, order: 4 };
const vico = { playerId: 5, userName: 'Vico', photoUrl: 'https://bit.ly/2nmE0ov', score: 0, order: 5 };
const ale = { playerId: 6, userName: 'Ale', photoUrl: 'https://bit.ly/2ngbfJT', score: 0, order: 6 };

export const initalState: GameState = {
	players: [pao, walter, myriam, brenda, vico, ale],
	currentTurn: 6,
	currentStory: { storyCardIndex: 78, title: 'test story', storyTeller: ale },
	isGuessingTime: false,
	areVotesVisible: false,
	boardCards: [
		{ cardIndex: 2, owner: pao, votes: [walter, brenda] },
		{ cardIndex: 6, owner: walter, votes: [] },
		{ cardIndex: 12, owner: myriam, votes: [vico] },
		{ cardIndex: 34, owner: brenda, votes: [] },
		{ cardIndex: 27, owner: vico, votes: [] },
		{ cardIndex: 78, owner: ale, votes: [pao] }
	],
	currentHand: [4, 67, 23, 12],//4, 67, 23, 12
	avaiableCards: generateCardIndexes(),
	isLoading: true
};


function generateCardIndexes(): number[] {
	const cardIndexes: number[] = [];
	for (let index = 0; index < 100; index++) {
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
