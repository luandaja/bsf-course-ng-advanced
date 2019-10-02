import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GameState, getIsGuessingTime, getPlayers, getHasGameStarted, fetchPlayers, getAlgo } from '../../../store/game';
import { Player } from '../../../models';
import { Observable, forkJoin } from 'rxjs';
import { map, switchMap, tap, exhaustMap } from 'rxjs/operators';
import { shuffle } from '../../../models/Utils';

@Component({
	selector: 'gt-players',
	templateUrl: './players.component.html',
	styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

	players$: Observable<Player[]>;

	constructor(private gameStore: Store<GameState>) { }

	ngOnInit() {
		this.gameStore.dispatch(fetchPlayers());

		this.players$ = this.gameStore.pipe(select(getAlgo), map(result => {
			const { hasGameStarted, isGuessingTime, players } = result;
			console.log(result);
			if (!hasGameStarted)
				return players;
			else
				return shuffle(players.filter(player => isGuessingTime ? player.hasVoted : player.hasThrowCard));

		}));

		// this.players$ = this.gameStore.pipe(
		// 	select(getIsGuessingTime),
		// 	switchMap(isGuessingTime => this.gameStore.pipe(select(getPlayers),
		// 		map(players => players.filter(player => isGuessingTime ? player.hasVoted : player.hasThrowCard)), map(players => this.shuffle(players))
		// 	)));
	}

	// private mapPlayers(pair: { boolean, boolean, Player[] }) {
	// 	console.log("players");
	// 	const [hasGameStarted, isGuessingTime, players] = pair;
	// 	if (!hasGameStarted)
	// 		return players;
	// 	else
	// 		return shuffle(players.filter(player => isGuessingTime ? player.hasVoted : player.hasThrowCard));
	// }

	// private shuffle(array) {
	// 	const newArray = Object.assign([], array);
	// 	for (let i = newArray.length - 1; i > 0; i--) {
	// 		const j = Math.floor(Math.random() * (i + 1));
	// 		[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
	// 	}
	// 	return newArray;
	// }
}
