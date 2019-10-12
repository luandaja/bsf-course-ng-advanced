import { Injectable } from '@angular/core';
import { FirestoreService } from './firestore.service';
import { StoryCard } from '../../models/StoryCard';
import { BoardStatus } from '../../models';

@Injectable({
	providedIn: 'root'
})

export class StatusBoardFirebaseService extends FirestoreService<BoardStatus> {

	protected basePath = 'status-board';

}

export enum StatusBoard {
	status = 'status'
	// GameState = "game-state",
	// VotesVisibility = "votes-visibility",
	// CurrentPlayerTurn = "current-turn-upd",
	// CurrentStory = "current-story",
	// shouldRefreshPlayer = "should-refresh-player",
	// shouldDragCards = "shouldDragCards"
}
