import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GameState, playersLoaded, getPlayersState } from '../../../store/game';
import { Player } from '../../../models';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { shuffle } from '../../../models/Utils';
import { PlayerService } from '../../../core/services/player.service';

@Component({
	selector: 'gt-players',
	templateUrl: './players.component.html',
	styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit, OnDestroy {

	players$: Observable<Player[]>;
	playersChanges$: Subscription;

	constructor(private gameStore: Store<GameState>,
		private playerService: PlayerService) { }

	ngOnInit() {
		this.playersChanges$ = this.playerService.collection$()
			.subscribe((players) => this.gameStore.dispatch(playersLoaded({ players })));

		this.players$ = this.gameStore.pipe(select(getPlayersState), map(result => {
			const { hasGameStarted, isGuessingTime, players } = result;
			if (!hasGameStarted)
				return players;
			else
				return shuffle(players.filter(player => isGuessingTime ? player.hasVoted : player.hasThrowCard));
		}));
	}

	ngOnDestroy() {
		this.playersChanges$.unsubscribe();
	}
}
