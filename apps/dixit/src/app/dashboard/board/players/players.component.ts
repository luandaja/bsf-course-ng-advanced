import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GameState, playersLoaded, getPlayersState } from '../../../store/game';
import { Player } from '../../../models';
import { Observable, Subscription } from 'rxjs';
import { map, switchMapTo } from 'rxjs/operators';
import { shuffle } from '../../../models/Utils';
import { PlayerService } from '../../../core/services/player.service';
import { Avatar } from '@glotrix/ui/avatar';
@Component({
	selector: 'gt-players',
	templateUrl: './players.component.html',
	styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit, OnDestroy {

	players$: Observable<Avatar[]>;
	playersChanges$: Subscription;
	title: string;

	constructor(private gameStore: Store<GameState>,
		private playerService: PlayerService) { }

	ngOnInit() {
		this.playersChanges$ = this.playerService.collection$()
			.subscribe((players) => this.gameStore.dispatch(playersLoaded({ players })));

		this.players$ = this.gameStore.pipe(select(getPlayersState), map(result => {
			const { hasGameStarted, isGuessingTime, players } = result;
			return this.getPlayers(hasGameStarted, isGuessingTime, players);
		}), map(players => this.mapToAvatars(players)));
	}

	ngOnDestroy() {
		this.playersChanges$.unsubscribe();
	}

	private mapToAvatars(players: Player[]) {
		return players.map(player => ({ imageUrl: player.photoUrl } as Avatar))
	}

	private getPlayers(hasGameStarted: boolean, isGuessingTime: boolean, players: Player[]) {
		this.title = !hasGameStarted ? 'Players' : (isGuessingTime ? 'Votes setted by' : 'Cards thrown by');
		return (!hasGameStarted) ? players : shuffle(players.filter(player => isGuessingTime ? player.hasVoted : player.hasThrowCard));
	}
}
