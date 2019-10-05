import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BoardCard } from '../../../models/BoardCard';
import { select, Store } from '@ngrx/store';
import { getBoardCards, getIsGuessingTime, GameState, getCurrentStory, getUserPlayer, fetchBoardCards, boardCardsLoaded } from '../../../store/game';
import { StoryCard } from '../../../models/StoryCard';
import { map, switchMap } from 'rxjs/operators';
import { Player } from '../../../models';
import { BoardCardsFirestoreService } from '../../../core/services/board-cards.firestore.service';

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
	boardCardsChanges$: Subscription;
	selectedCard: BoardCard;

	constructor(private gameStore: Store<GameState>,
		private boardCardsService: BoardCardsFirestoreService) { }

	ngOnInit() {
		this.gameStore.dispatch(fetchBoardCards());

		this.boardCardsChanges$ = this.boardCardsService.collection$().subscribe(boardCards => this.gameStore.dispatch(boardCardsLoaded({ boardCards })));
		this.boardCards$ = this.gameStore.pipe(select(getBoardCards));
		this.isGuessingTime$ = this.gameStore.pipe(select(getIsGuessingTime));
		this.storyCard$ = this.gameStore.pipe(select(getCurrentStory));
		this.userPlayer$ = this.gameStore.pipe(select(getUserPlayer));

		this.playerCanVote$ = this.gameStore.pipe(select(getCurrentStory),
			switchMap(story => this.userPlayer$.pipe(map(user => !user.isStoryTeller && story !== null && !user.hasVoted)))
		);
	}

	selectCard(cardSelected: BoardCard) {
		this.selectedCard = cardSelected;
		this.boardCardsChanges$.unsubscribe();
	}

}
