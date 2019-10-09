import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GameState, getCurrentHand, getUserPlayer, getTurnInfo, setUserHand, avaiableCardsLoaded, getCurrentStory, getIsLoading } from '../../../store/game';
import { Observable, Subscription } from 'rxjs';
import { Player, StoryCard } from '../../../models';
import { BoardCard } from '../../../models/BoardCard';
import { distinctUntilChanged, tap } from 'rxjs/operators';
import { AvaiableCardsService } from '../../../core/services/avaiable-cards.firebase.service';

@Component({
	selector: 'gt-hand',
	templateUrl: './hand.component.html',
	styleUrls: ['./hand.component.scss']
})
export class HandComponent implements OnInit, OnDestroy {
	handCards$: Observable<number[]>;
	isLoading$: Observable<boolean>;
	userPlayer$: Observable<Player>;
	currentStory$: Observable<StoryCard>;
	private playerTurnChanges$: Subscription;

	private avaiableCardsChanges$: Subscription;
	boardCard: BoardCard;
	selectedCardIndex: number;

	constructor(private gameStore: Store<GameState>,
		private cardsService: AvaiableCardsService) { }

	ngOnInit() {
		this.currentStory$ = this.gameStore.pipe(select(getCurrentStory));
		this.handCards$ = this.gameStore.pipe(select(getCurrentHand));
		this.userPlayer$ = this.gameStore.pipe(select(getUserPlayer));
		this.isLoading$ = this.gameStore.select(getIsLoading);

		this.avaiableCardsChanges$ = this.cardsService.collection$(ref => ref.orderBy('order'))
			.subscribe((results: any[]) => this.gameStore.dispatch(avaiableCardsLoaded({ cards: results.map(result => result.cardIndex) })));

		this.playerTurnChanges$ = this.gameStore.pipe(select(getTurnInfo), distinctUntilChanged((x, y) => x.isUserTurn === y.isUserTurn)).subscribe((turnInfo) => {
			if (turnInfo.isUserTurn)
				this.gameStore.dispatch(setUserHand({ cardsCount: turnInfo.cardsCount }));
		});
	}

	ngOnDestroy() {
		this.playerTurnChanges$.unsubscribe();
		this.avaiableCardsChanges$.unsubscribe();
	}

	getCardImage(cardIndex: number): string {
		const card_index = cardIndex >= 10 ? cardIndex : `0${cardIndex}`;
		return `assets/cards/card_000${card_index}.jpg`;
	}

	selectCard(cardIndex: number) {
		this.selectedCardIndex = cardIndex;
	}

}
