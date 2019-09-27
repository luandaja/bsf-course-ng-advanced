import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StoryCard } from '../../../models/StoryCard';
import { Store, select } from '@ngrx/store';
import { GameState, getCurrentStory, setVotesVisibility, getUserPlayer } from '../../../store/game';
import { map, switchMap } from 'rxjs/operators';

@Component({
	selector: 'gt-story',
	templateUrl: './story.component.html',
	styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

	currentStory$: Observable<StoryCard>;
	isStoryTeller$: Observable<boolean>;

	constructor(private gameStore: Store<GameState>) { }

	ngOnInit() {
		this.currentStory$ = this.gameStore.pipe(select(getCurrentStory));
		this.isStoryTeller$ = this.gameStore.pipe(select(getUserPlayer), map(user => user.isStoryTeller));
	}

	showVotes(): void {
		this.gameStore.dispatch(setVotesVisibility({ areVotesVisible: true }));
	}
}
