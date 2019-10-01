import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameState, getAvaiableCards, getTurn, getUserPlayer, setUserHand, getIsLoading } from '../../../store/game';
import { Store, select } from '@ngrx/store';
import { map, switchMap, mergeMap } from 'rxjs/operators';
import { Observable, iif, of, Subscription } from 'rxjs';
import { Player } from '../../../models';

const setupCardsCount = 5;
const incrementCount = 1;
const setupTurn = 0;
@Component({
	selector: 'gt-table-board',
	templateUrl: './table-board.component.html',
	styleUrls: ['./table-board.component.scss']
})

export class TableBoardComponent implements OnInit, OnDestroy {

	isLoading$: Observable<boolean>;
	private playerHand: Subscription;
	constructor(private gameStore: Store<GameState>) { }

	ngOnInit() {
		this.isLoading$ = this.gameStore.select(getIsLoading);
		this.playerHand = this.gameStore.pipe(select(getUserPlayer),
			switchMap((userPlayer: Player) => this.gameStore.pipe(select(getTurn),
				map(playerTurn => ({
					isUserTurn: (playerTurn === setupTurn && userPlayer.id === 1) || (playerTurn === userPlayer.id),
					cardsCount: playerTurn === setupTurn ? setupCardsCount : incrementCount
				})))),
		).subscribe((turn) => {
			if (turn.isUserTurn)
				this.gameStore.dispatch(setUserHand({ cardsCount: turn.cardsCount }));
		});
	}

	ngOnDestroy() {
		this.playerHand.unsubscribe();
	}
}
