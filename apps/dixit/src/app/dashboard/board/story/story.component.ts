import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StoryCard } from '../../../models/StoryCard';
import { Store, select } from '@ngrx/store';
import { GameState, getCurrentStory } from '../../../store/game';

@Component({
	selector: 'gt-story',
	templateUrl: './story.component.html',
	styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

	currentStory$: Observable<StoryCard>;

	constructor(private gameStore: Store<GameState>) { }

	ngOnInit() {
		this.currentStory$ = this.gameStore.pipe(select(getCurrentStory));
	}

}
