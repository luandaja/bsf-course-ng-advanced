import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GameState, startGame, getHasGameStarted } from '../../../store/game';
import { Observable } from 'rxjs';

@Component({
	selector: 'gt-start-game',
	templateUrl: './start-game.component.html',
	styleUrls: ['./start-game.component.scss']
})
export class StartGameComponent implements OnInit {

	//	hasGameStarted$: Observable<boolean>;

	constructor(private gameStore: Store<GameState>) { }

	ngOnInit() {
		//this.hasGameStarted$ = this.gameStore.pipe(select(getHasGameStarted));
	}

	startGame() {
		this.gameStore.dispatch(startGame());
	}

}
