import { revealDeck } from './../../../store/deck/deck.actions';
import { Card } from './../../../models/Card';
import { Component, OnInit } from '@angular/core';
import { DeckState, getActiveCards, getPlayedCards } from '../../../store/deck';
import { Store, select } from '@ngrx/store';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
	selector: 'gt-table-board',
	templateUrl: './table-board.component.html',
	styleUrls: ['./table-board.component.scss']
})
export class TableBoardComponent implements OnInit {

	protected startDeckIndex = 1;
	protected endDeckIndex = 100;
	cards$: Observable<Card[]>;
	usedCards$: Observable<Card[]>;

	constructor(private deckStore: Store<DeckState>) {
		this.cards$ = this.deckStore.pipe(select(getActiveCards));
	}

	ngOnInit() {
	}

	revealDeck(): void {
		this.deckStore.dispatch(revealDeck());
	}

	newRound(): void {
		this.deckStore.pipe(
			select(getPlayedCards),
			map(this.getCard)
		)
	}

	private getCard(playedCards: Card[]) {
		let cardIndex = 0;
		do {
			cardIndex = this.getDeckIndex();
		} while (playedCards.includes(cardIndex));
	}

	private getDeckIndex(): number {
		return Math.floor(Math.random() * this.endDeckIndex) + this.startDeckIndex;
	}

}
