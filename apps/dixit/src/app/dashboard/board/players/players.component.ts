import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GameState, getIsGuessingTime, getPlayers } from '../../../store/game';
import { Player } from '../../../models';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
	selector: 'gt-players',
	templateUrl: './players.component.html',
	styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

	players$: Observable<Player[]>;

	constructor(private gameStore: Store<GameState>) { }

	ngOnInit() {
		this.players$ = this.gameStore.pipe(
			select(getIsGuessingTime),
			switchMap(isGuessingTime => this.gameStore.pipe(select(getPlayers),
				map(players => players.filter(player => isGuessingTime ? player.hasVoted : player.hasThrowCard)), map(players => this.shuffle(players))
			)));
	}

	private shuffle(array) {
		const newArray = Object.assign([], array);
		for (let i = newArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
		}
		return newArray;
	}
}
