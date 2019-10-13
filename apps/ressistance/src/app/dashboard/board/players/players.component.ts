import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { GameState, getUsers } from '../../../store/game';
import { map } from 'rxjs/operators';

@Component({
	selector: 'gt-players',
	templateUrl: './players.component.html',
	styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
	players$: Observable<string[]>;
	title: string;

	constructor(private gameStore: Store<GameState>) { }

	ngOnInit() {
		this.title = 'Players';
		this.players$ = this.gameStore.pipe(select(getUsers), map(players => players.map(player => player.photoUrl)));
	}

}
