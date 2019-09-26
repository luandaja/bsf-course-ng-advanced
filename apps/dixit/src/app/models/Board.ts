import { BoardCard } from './BoardCard';
import { Player } from './Player';

export interface Board {
	title: string;
	storyTeller: Player;
	storyCardIndex: number;
	cards: BoardCard[];
}
