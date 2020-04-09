import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BoardCard } from '../../../models/BoardCard';
import { select, Store } from '@ngrx/store';
import { getBoardCards, getIsGuessingTime, GameState, getCurrentStory, boardCardsLoaded, getVotesVisibility } from '../../../store/game';
import { map } from 'rxjs/operators';
import { BoardCardsFirestoreService } from '../../../core/services/board-cards.firestore.service';

@Component({
	selector: 'gt-board-cards',
	templateUrl: './board-cards.component.html',
	styleUrls: ['./board-cards.component.scss']
})
export class BoardCardsComponent implements OnInit, OnDestroy {
	boardCards$: Observable<BoardCard[]>;
	areVotesVisible$: Observable<boolean>;
	isGuessingTime$: Observable<boolean>;
	storyCardIndex$: Observable<number>;
	selectedCard: BoardCard = null;
	boardCardsChanges$: Subscription;

	constructor(private gameStore: Store<GameState>,
		private boardCardsService: BoardCardsFirestoreService) { }

	ngOnInit() {
		this.boardCardsChanges$ = this.boardCardsService.collection$().subscribe(boardCards => this.gameStore.dispatch(boardCardsLoaded({ boardCards })));
		this.boardCards$ = this.gameStore.pipe(select(getBoardCards));
		this.isGuessingTime$ = this.gameStore.pipe(select(getIsGuessingTime));
		this.areVotesVisible$ = this.gameStore.pipe(select(getVotesVisibility));
		this.storyCardIndex$ = this.gameStore.pipe(select(getCurrentStory), map(story => story.cardIndex));
	}

	isJumping(boardCardIndex: number) {
		return this.storyCardIndex$.pipe(map(storyIndex => boardCardIndex === storyIndex));
	}

	selectCard(cardSelected: BoardCard) {
		this.selectedCard = cardSelected;
	}

	ngOnDestroy() {
		this.boardCardsChanges$.unsubscribe();
	}
}
