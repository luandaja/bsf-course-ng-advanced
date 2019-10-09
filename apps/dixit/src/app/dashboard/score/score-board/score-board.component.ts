import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { GameState, getPlayers } from '../../../store/game';
import { map } from 'rxjs/operators';
import { Player } from '../../../models';

@Component({
	selector: 'gt-score-board',
	templateUrl: './score-board.component.html',
	styleUrls: ['./score-board.component.scss']
})
export class ScoreBoardComponent implements OnInit {

	players$: Observable<Player[]>;

	constructor(private gameStore: Store<GameState>) { }

	ngOnInit() {
		this.players$ = this.gameStore.pipe(select(getPlayers), map(players => {
			const newPlayers = Object.assign([], players) as Player[];
			newPlayers.sort((a, b) => b.score - a.score);
			return newPlayers;
		}));
	}

}
