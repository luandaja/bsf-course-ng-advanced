import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StoryCard } from '../../../models/StoryCard';
import { Store, select } from '@ngrx/store';
import { GameState, getCurrentStory, setVotesVisibility } from '../../../store/game';
import { AuthState, getUser } from '../../../store/auth';
import { map, switchMap } from 'rxjs/operators';

@Component({
	selector: 'gt-story',
	templateUrl: './story.component.html',
	styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

	currentStory$: Observable<StoryCard>;
	isStoryTeller$: Observable<boolean>;

	constructor(private gameStore: Store<GameState>,
		private authStore: Store<AuthState>) { }

	ngOnInit() {
		this.currentStory$ = this.gameStore.pipe(select(getCurrentStory));
		this.isStoryTeller$ = this.authStore.pipe(
			select(getUser),
			switchMap(user => this.currentStory$.pipe(map(story => story.storyTeller.playerId === user.playerId)))
		);
	}

	showVotes(): void {
		this.gameStore.dispatch(setVotesVisibility({ areVotesVisible: true }));
	}
}
