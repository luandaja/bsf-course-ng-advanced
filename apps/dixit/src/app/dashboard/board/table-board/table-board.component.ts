import { revealDeck } from './../../../store/deck/deck.actions';
import { Card } from './../../../models/Card';
import { Component, OnInit } from '@angular/core';
import { DeckState, getActiveCards } from '../../../store/deck';
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

	constructor(private deckStore: Store<DeckState>) {
		this.cards$ = this.deckStore.pipe(
			select(getActiveCards),
			tap(console.log)
		);
	}

	ngOnInit() {
	}

	showDeck(): void {
		this.deckStore.dispatch(revealDeck());
	}

	getDeckIndex(): number {
		return Math.floor(Math.random() * this.endDeckIndex) + this.startDeckIndex;
	}

}
