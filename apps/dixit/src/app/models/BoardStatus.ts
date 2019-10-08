import { StoryCard } from '.';

export interface BoardStatus {
	hasGameStarted?: boolean,
	areVotesVisible?: boolean,
	shouldRefreshPlayer?: boolean,
	shouldDragCards?: boolean,
	playerInTurn?: string,
	currentStory?: StoryCard
}
