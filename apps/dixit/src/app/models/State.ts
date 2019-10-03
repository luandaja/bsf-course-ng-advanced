import { StoryCard } from './StoryCard';

export interface CurrentState {
	currentTurn?: number;
	areVotesVisible?: boolean;
	hasGameStarted?: boolean;
	currentStory?: StoryCard;
}