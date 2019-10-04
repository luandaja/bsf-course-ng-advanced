import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GameState, startGame, getHasGameStarted, getPlayers, updateHasGameStarted, fetchPlayers, playersLoaded } from '../../../store/game';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { StatusBoardFirebaseService, StatusBoard } from '../../../core/services/state.firebase.service';
import { Router } from '@angular/router';
import { PlayerService } from '../../../core/services/player.service';

@Component({
	selector: 'gt-start-game',
	templateUrl: './start-game.component.html',
	styleUrls: ['./start-game.component.scss']
})
export class StartGameComponent implements OnInit, OnDestroy {
	private readonly welcomeInfo: { title: string, description: string } = {
		title: 'Welcome to Dixit!',
		description: 'Dixit is a charades-like game where each player attempts to guess another player’s. Let’s wait for other players. You need to be between 3 to 6 in order to start the game.'
	};

	unableStartGame$: Observable<boolean>;
	gameRedirection$: Subscription;
	hasGameStarted$: Subscription;
	players$: Subscription;

	constructor(private gameStore: Store<GameState>,
		private playerService: PlayerService,
		private stateService: StatusBoardFirebaseService,
		private router: Router) { }

	ngOnInit() {

		this.gameRedirection$ = this.gameStore.pipe(select(getHasGameStarted))
			.subscribe((hasGameStarted) => {
				console.log('hasGameStarted', hasGameStarted);
				this.redirect(hasGameStarted ? '/dashboard/board' : '/dashboard/board/start');
			});

		this.players$ = this.playerService.collection$().subscribe(players => {
			console.log("listen players", players);
			this.gameStore.dispatch(playersLoaded({ players: Object.assign([], players) }));
		});
		this.hasGameStarted$ = this.stateService.doc$(StatusBoard.GameState).subscribe(state => {
			console.log("has-game-started", state);
			this.gameStore.dispatch(updateHasGameStarted({ hasGameStarted: state.hasGameStarted }));
		});
		this.unableStartGame$ = this.gameStore.pipe(select(getPlayers), map(players => players.length < 3 || players.length > 6));
	}

	ngOnDestroy() {
		this.players$.unsubscribe();
		this.gameRedirection$.unsubscribe();
	}

	startGame() {
		this.gameStore.dispatch(startGame());
	}

	private redirect(url: string) {
		this.router.navigate([url]);
	}

}
