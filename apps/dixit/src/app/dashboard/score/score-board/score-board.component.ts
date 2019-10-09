import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { GameState, getPlayers } from '../../../store/game';
import { map } from 'rxjs/operators';
import { Poster } from '@glotrix/ui/poster-card';

@Component({
	selector: 'gt-score-board',
	templateUrl: './score-board.component.html',
	styleUrls: ['./score-board.component.scss']
})
export class ScoreBoardComponent implements OnInit {

	players$: Observable<Poster[]>;

	constructor(private gameStore: Store<GameState>) { }

	ngOnInit() {
		this.players$ = this.gameStore.pipe(select(getPlayers), map(players => {
			return players.map(player => (
				{
					hint: player.score.toString(), title: player.username, imageUrl: player.photoUrl
				} as Poster))
				.sort((a, b) => parseInt(b.hint, 10) - parseInt(a.hint, 10))
		}));
	}

}
