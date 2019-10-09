import { StoryCard } from '.';

export interface BoardStatus {
	hasGameStarted?: boolean,
	areVotesVisible?: boolean,
	shouldDragCards?: boolean,
	playerInTurn?: string,
	currentStory?: StoryCard
}
