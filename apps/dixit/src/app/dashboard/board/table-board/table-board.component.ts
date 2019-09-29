import { Component, OnInit } from '@angular/core';
import { GameState, getAvaiableCards, getTurn, getUserPlayer, setUserHand } from '../../../store/game';
import { Store, select } from '@ngrx/store';
import { map, switchMap, mergeMap } from 'rxjs/operators';
import { Observable, iif, of } from 'rxjs';
import { Player } from '../../../models';

@Component({
	selector: 'gt-table-board',
	templateUrl: './table-board.component.html',
	styleUrls: ['./table-board.component.scss']
})
export class TableBoardComponent implements OnInit {

	constructor(private gameStore: Store<GameState>) { }

	ngOnInit() {
		this.gameStore.pipe(select(getUserPlayer),
			switchMap((userPlayer: Player) => this.gameStore.pipe(select(getTurn),
				map(playerTurn => ({
					isUserTurn: (playerTurn === 0 && userPlayer.order === 1) || (playerTurn === userPlayer.order),
					cardsCount: playerTurn === 0 ? 5 : 1
				})))),
		).subscribe((turn) => {
			console.log("subscribed", turn);
			if (turn.isUserTurn)
				this.gameStore.dispatch(setUserHand({ cardsCount: turn.cardsCount }));
		});
	}

}
