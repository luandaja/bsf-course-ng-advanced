import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Avatar } from '@glotrix/ui/avatar';
import { Store, select } from '@ngrx/store';
import { GameState, playersLoaded, getPlayersState, getPlayers, boardCardSetted } from '../../../store/game';
import { PlayerService } from '../../../core/services/player.service';
import { map, switchMapTo, switchMap } from 'rxjs/operators';
import { Player } from '../../../models';

@Component({
	selector: 'gt-score-board',
	templateUrl: './score-board.component.html',
	styleUrls: ['./score-board.component.scss']
})
export class ScoreBoardComponent implements OnInit, OnDestroy {

	players$: Observable<Player[]>;
	playersChanges$: Subscription;

	constructor(private gameStore: Store<GameState>,
		private playerService: PlayerService) { }

	ngOnInit() {
		this.playersChanges$ = this.playerService.collection$()
			.subscribe((players) => this.gameStore.dispatch(playersLoaded({ players })));

		this.players$ = this.gameStore.pipe(select(getPlayers), map(players => {
			const newPlayers = Object.assign([], players) as Player[];
			newPlayers.sort((a, b) => b.score - a.score);
			return newPlayers;
		}));
	}

	ngOnDestroy() {
		this.playersChanges$.unsubscribe();
	}

}
