import { Component, OnInit, Input } from '@angular/core';
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
		this.players$ = this.gameStore.pipe(select(getAlgo), map(result => {
			const { hasGameStarted, isGuessingTime, players } = result;
			if (!hasGameStarted)
				return players;
			else
				return shuffle(players.filter(player => isGuessingTime ? player.hasVoted : player.hasThrowCard));
		}));
	}


}
