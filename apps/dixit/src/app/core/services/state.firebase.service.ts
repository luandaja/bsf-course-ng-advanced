import { Injectable } from '@angular/core';
import { FirestoreService } from './firestore.service';
import { StoryCard } from '../../models/StoryCard';

@Injectable({
	providedIn: 'root'
})

export class StatusBoardFirebaseService extends FirestoreService<
{
	hasGameStarted?: boolean,
	areVotesVisible?: boolean,
	shouldRefreshPlayer?: boolean,
	shouldDragCards?: boolean,
	currentPlayerTurn?: string,
	currentStory?: StoryCard
}> {

	protected basePath = 'status-board';

}

export enum StatusBoard {
	GameState = "game-state",
	VotesVisibility = "votes-visibility",
	CurrentPlayerTurn = "current-turn-upd",
	CurrentStory = "current-story",
	shouldRefreshPlayer = "should-refresh-player",
	shouldDragCards = "shouldDragCards"
}
