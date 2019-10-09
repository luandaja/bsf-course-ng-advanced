import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GameState, startGame, getHasGameStarted, getPlayers } from '../../../store/game';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SnackbarService } from '@glotrix/ui/snackbar';
import { WelcomeMessage } from '@glotrix/ui/login';

export const welcomeMessage: WelcomeMessage = {
	title: 'Welcome to Dixit!',
	largeImage: 'assets/dixit_cards.png',
	shortImage: 'assets/dixit_card_mini.jpg',
	shortDescription: 'We need between 3 to 6 player to start the game. Let’s wait for them.',
	description: 'Dixit is a charades-like game where each player attempts to guess another player’s. Let’s wait for other players. You need to be between 3 to 6 in order to start the game.'
};

@Component({
	selector: 'gt-start-game',
	templateUrl: './start-game.component.html',
	styleUrls: ['./start-game.component.scss']
})
export class StartGameComponent implements OnInit, OnDestroy {

	message = welcomeMessage;
	unableStartGame$: Observable<boolean>;
	gameRedirection$: Subscription;

	constructor(private gameStore: Store<GameState>,
		private snackbarService: SnackbarService,
		private router: Router) { }

	ngOnInit() {
		this.gameRedirection$ = this.gameStore.pipe(select(getHasGameStarted))
			.subscribe((hasGameStarted) => {
				this.snackbarService.showInfo(hasGameStarted ? "Let's start the match!" : "Welcome, let's wait for the other players", 'Dixit');
				this.redirect(hasGameStarted ? '/dashboard/hand' : '/dashboard/board/start');
			});
		this.unableStartGame$ = this.gameStore.pipe(select(getPlayers), map(players => players.length < 2 || players.length > 6));
	}

	ngOnDestroy() {
		this.gameRedirection$.unsubscribe();
	}

	startGame() {
		this.gameStore.dispatch(startGame());
	}

	private redirect(url: string) {
		this.router.navigate([url]);
	}

}
