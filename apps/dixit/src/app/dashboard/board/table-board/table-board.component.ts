import { setGuessingTime, setHand, setPlayerTurn, setVotesVisibility } from '../../../store/game/game.actions';
import { Component, OnInit } from '@angular/core';
import { GameState, getBoardCards, getAvaiableCards, getIsGuessingTime, getTurn, getCurrentStory, getVotesVisibility } from '../../../store/game';
import { Store, select } from '@ngrx/store';
import { tap, map, switchMap, mergeMap } from 'rxjs/operators';
import { Observable, pipe, iif, of } from 'rxjs';
import { BoardCard } from '../../../models/BoardCard';
import { AuthState, getUser } from '../../../store/auth';
import { Player } from '../../../models';
import { StoryCard } from '../../../models/StoryCard';

@Component({
	selector: 'gt-table-board',
	templateUrl: './table-board.component.html',
	styleUrls: ['./table-board.component.scss']
})
export class TableBoardComponent implements OnInit {




	constructor(private gameStore: Store<GameState>,
		private authStore: Store<AuthState>) { }

	ngOnInit() {


		const isUsersTurn: Observable<boolean> = this.authStore.pipe(
			select(getUser),
			switchMap((user: Player) => this.gameStore.pipe(select(getTurn), map(playerTurn => playerTurn === user.order)))
		);

		const getUserHand = this.gameStore.pipe(select(getAvaiableCards), map(cards => {
			console.log('getting hand', cards);
			this.gameStore.dispatch(setHand({ cards: cards.slice(0, 4), nextPlayerturn: 2 }))
		}
		));

		isUsersTurn.pipe(
			mergeMap(isTurn => iif(() => isTurn, getUserHand, of(isTurn)))
		).subscribe((ad) => console.log("subscribed"));

		// this.authStore.pipe(
		// 	select(getUser),
		// 	switchMap((user: Player) => this.gameStore.pipe(select(getTurn), map(playerTurn => {
		// 		if (playerTurn === user.order) {
		// 			this.gameStore.pipe(select(getAvaiableCards), map(cards => {
		// 				console.log('getting hand', cards);
		// 				this.gameStore.dispatch(setHand({ cards: cards.slice(0, 4), nextPlayerturn: user.order + 1 }))
		// 			}));
		// 		}
		// 	}
		// 	)))
		// ).subscribe((ad) => console.log("subscribed"));

	}

	showVotes(): void {
		this.gameStore.dispatch(setVotesVisibility({ areVotesVisible: true }));
	}

}
