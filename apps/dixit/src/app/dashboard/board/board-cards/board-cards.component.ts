import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BoardCard } from '../../../models/BoardCard';
import { select, Store } from '@ngrx/store';
import { getBoardCards, getIsGuessingTime, getVotesVisibility, GameState, getCurrentStory } from '../../../store/game';
import { StoryCard } from '../../../models/StoryCard';
import { map, tap } from 'rxjs/operators';

@Component({
	selector: 'gt-board-cards',
	templateUrl: './board-cards.component.html',
	styleUrls: ['./board-cards.component.scss']
})
export class BoardCardsComponent implements OnInit {
	boardCards$: Observable<BoardCard[]>;
	isGuessingTime$: Observable<boolean>;
	areVotesVisible$: Observable<boolean>;
	currentStory$: Observable<StoryCard>;
	storyCardIndex$: Observable<number>;


	constructor(private gameStore: Store<GameState>) { }

	ngOnInit() {
		this.boardCards$ = this.gameStore.pipe(select(getBoardCards));
		this.isGuessingTime$ = this.gameStore.pipe(select(getIsGuessingTime));
		this.areVotesVisible$ = this.gameStore.pipe(select(getVotesVisibility));
		this.storyCardIndex$ = this.gameStore.pipe(select(getCurrentStory), map(story => story.storyCardIndex));
	}

}
