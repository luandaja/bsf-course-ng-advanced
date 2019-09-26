import { setGuessingTime, setHandCard, setHand } from '../../../store/game/game.actions';
import { Component, OnInit } from '@angular/core';
import { GameState, getBoardCards, getAvaiableCards, getPlayerTurn, getIsGuessingTime } from '../../../store/game';
import { Store, select } from '@ngrx/store';
import { tap, map, filter, switchMap, mergeMap } from 'rxjs/operators';
import { Observable, from, pipe } from 'rxjs';
import { BoardCard } from '../../../models/BoardCard';
import { AuthState, getUser } from '../../../store/auth';
import { Player } from '../../../models';

@Component({
	selector: 'gt-table-board',
	templateUrl: './table-board.component.html',
	styleUrls: ['./table-board.component.scss']
})
export class TableBoardComponent implements OnInit {

	protected startDeckIndex = 1;
	protected cardsCount = 100;
	boardCards$: Observable<BoardCard[]>;
	isGuessingTime$: Observable<boolean>;


	constructor(private gameStore: Store<GameState>,
		private store: Store<AuthState>) { }

	ngOnInit() {
		this.boardCards$ = this.gameStore.pipe(select(getBoardCards));
		this.isGuessingTime$ = this.gameStore.pipe(select(getIsGuessingTime));
		this.store.pipe(
			select(getUser),
			mergeMap(user =>
				this.gameStore.pipe(select(getPlayerTurn),
					map(playerTurn => {
						if (user.order === playerTurn) {
							this.getHand(user)
						}
					})))
		);
	}

	showCards(): void {
		this.gameStore.dispatch(setGuessingTime({ isGuessingTime: true }));
	}

	private getHand(user: Player) {
		this.gameStore.pipe(
			select(getAvaiableCards),
			map(cards => {
				this.gameStore.dispatch(setHand({ cards: cards.slice(0, 4), nextPlayerturn: user.order++ }))
			})
		)
	}

}
