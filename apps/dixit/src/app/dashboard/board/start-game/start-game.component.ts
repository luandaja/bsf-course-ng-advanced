import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GameState, startGame, getHasGameStarted, getPlayers, updateHasGameStarted } from '../../../store/game';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { StateFirebaseService } from '../../../core/services/state.firebase.service';

@Component({
	selector: 'gt-start-game',
	templateUrl: './start-game.component.html',
	styleUrls: ['./start-game.component.scss']
})
export class StartGameComponent implements OnInit {
	private readonly welcomeInfo: { title: string, description: string } = {
		title: 'Welcome to Dixit!',
		description: 'Dixit is a charades-like game where each player attempts to guess another player’s. Let’s wait for other players. You need to be between 3 to 6 in order to start the game.'
	};

	unableStartGame$: Observable<boolean>;

	constructor(private gameStore: Store<GameState>) { }

	ngOnInit() {
		this.unableStartGame$ = this.gameStore.pipe(select(getPlayers), map(players => players.length < 3 || players.length > 6));
	}

	startGame() {
		this.gameStore.dispatch(startGame());
	}

}
