import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GameState, getPlayersState } from '../../../store/game';
import { Player } from '../../../models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { shuffle } from '../../../models/Utils';
import { PlayerService } from '../../../core/services/player.service';
import { Avatar } from '@glotrix/ui/avatar';
@Component({
	selector: 'gt-players',
	templateUrl: './players.component.html',
	styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

	players$: Observable<Avatar[]>;
	title: string;

	constructor(private gameStore: Store<GameState>) { }

	ngOnInit() {
		this.players$ = this.gameStore.pipe(select(getPlayersState), map(result => {
			const { hasGameStarted, isGuessingTime, players } = result;
			return this.getPlayers(hasGameStarted, isGuessingTime, players);
		}), map(players => this.mapToAvatars(players)));
	}

	private mapToAvatars(players: Player[]) {
		return players.map(player => ({ imageUrl: player.photoUrl } as Avatar))
	}

	private getPlayers(hasGameStarted: boolean, isGuessingTime: boolean, players: Player[]) {
		this.title = !hasGameStarted ? 'Players' : (isGuessingTime ? 'Votes setted by' : 'Cards thrown by');
		return (!hasGameStarted) ? players : shuffle(players.filter(player => isGuessingTime ? player.hasVoted : player.hasThrowCard));
	}
}
