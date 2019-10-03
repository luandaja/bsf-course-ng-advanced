import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BoardCard } from '../../../models/BoardCard';
import { select, Store } from '@ngrx/store';
import { getBoardCards, getIsGuessingTime, GameState, getCurrentStory, getUserPlayer, fetchBoardCards } from '../../../store/game';
import { StoryCard } from '../../../models/StoryCard';
import { map, tap, switchMap } from 'rxjs/operators';
import { Player } from '../../../models';

@Component({
	selector: 'gt-board-cards',
	templateUrl: './board-cards.component.html',
	styleUrls: ['./board-cards.component.scss']
})
export class BoardCardsComponent implements OnInit {
	boardCards$: Observable<BoardCard[]>;
	isGuessingTime$: Observable<boolean>;
	playerCanVote$: Observable<boolean>;
	storyCard$: Observable<StoryCard>;
	userPlayer$: Observable<Player>;

	selectedCard: BoardCard;

	constructor(private gameStore: Store<GameState>) { }

	ngOnInit() {
		this.gameStore.dispatch(fetchBoardCards());

		this.boardCards$ = this.gameStore.pipe(select(getBoardCards), tap(console.log));
		this.isGuessingTime$ = this.gameStore.pipe(select(getIsGuessingTime));
		this.storyCard$ = this.gameStore.pipe(select(getCurrentStory), tap(console.log));
		this.userPlayer$ = this.gameStore.pipe(select(getUserPlayer));

		this.playerCanVote$ = this.gameStore.pipe(select(getCurrentStory),
			switchMap(story => this.userPlayer$.pipe(map(user => !user.isStoryTeller && story !== null && !user.hasVoted)))
		);
	}

	selectCard(cardSelected: BoardCard) {
		this.selectedCard = cardSelected;
	}

}
