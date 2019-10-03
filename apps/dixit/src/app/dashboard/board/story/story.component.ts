import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StoryCard } from '../../../models/StoryCard';
import { Store, select } from '@ngrx/store';
import { GameState, getCurrentStory, showVotes, getUserPlayer, getVotesVisibility, nextRound } from '../../../store/game';
import { map, switchMap, tap } from 'rxjs/operators';

@Component({
	selector: 'gt-story',
	templateUrl: './story.component.html',
	styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

	currentStory$: Observable<StoryCard>;
	isStoryTeller$: Observable<boolean>;
	areVotesVisible$: Observable<boolean>;

	constructor(private gameStore: Store<GameState>) { }

	ngOnInit() {
		this.currentStory$ = this.gameStore.pipe(select(getCurrentStory), tap(console.log));
		this.isStoryTeller$ = this.gameStore.pipe(select(getUserPlayer), map(user => user.isStoryTeller));
		this.areVotesVisible$ = this.gameStore.pipe(select(getVotesVisibility));
	}

	showVotes(): void {
		this.gameStore.dispatch(showVotes());
	}

	nextRound(): void {
		this.gameStore.dispatch(nextRound());
	}
}
