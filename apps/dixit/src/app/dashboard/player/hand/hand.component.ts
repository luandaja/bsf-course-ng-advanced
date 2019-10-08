import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GameState, getCurrentHand, getUserPlayer, getCurrentStory, updateCurrentTurn, getTurnInfo, setUserHand, avaiableCardsLoaded, getIsPlayersTurn, getIsStoryTellerTurn, getIsLoading } from '../../../store/game';
import { Observable, Subscription } from 'rxjs';
import { Player } from '../../../models';
import { BoardCard } from '../../../models/BoardCard';
import { map, switchMap, distinctUntilChanged, tap } from 'rxjs/operators';
import { StatusBoardFirebaseService, StatusBoard } from '../../../core/services/state.firebase.service';
import { AvaiableCardsService } from '../../../core/services/avaiable-cards.firebase.service';

@Component({
	selector: 'gt-hand',
	templateUrl: './hand.component.html',
	styleUrls: ['./hand.component.scss']
})
export class HandComponent implements OnInit, OnDestroy {
	handCards$: Observable<number[]>;
	isPlayersTurn$: Observable<boolean>;
	isStoryTellerTurn$: Observable<boolean>;
	userPlayer$: Observable<Player>;

	private avaiableCardsChanges$: Subscription;
	private playerTurnChanges$: Subscription;
	isLoading = true;
	boardCard: BoardCard;
	selectedCardIndex: number;

	constructor(private gameStore: Store<GameState>,
		private cardsService: AvaiableCardsService) { }

	ngOnInit() {
		this.handCards$ = this.gameStore.pipe(select(getCurrentHand), tap(x => this.isLoading = x.length === 0));
		this.userPlayer$ = this.gameStore.pipe(select(getUserPlayer));
		this.isStoryTellerTurn$ = this.gameStore.pipe(select(getIsStoryTellerTurn));
		this.isPlayersTurn$ = this.gameStore.pipe(select(getIsPlayersTurn));

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
