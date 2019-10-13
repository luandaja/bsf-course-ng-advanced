import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { GameState, getHasGameStarted, getUsers, startGame } from '../../../store/game';
import { Store, select } from '@ngrx/store';
import { SnackbarService } from '@glotrix/ui/snackbar';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { WelcomeMessage } from '@glotrix/ui/login';

export const welcomeMessage: WelcomeMessage = {
	title: 'Welcome to The Ressistance!',
	image: 'assets/resistance.png',
	description: 'The Resistance is a social deduction game with secret identities. Players are either members of the resistance attempting to overthrow a malignant government, or spies trying to thwart the Resistance.'
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
				this.snackbarService.showInfo(hasGameStarted ? "Let's start the match!" : "Welcome, let's wait for the other players", 'The Ressistance');
				this.redirect(hasGameStarted ? '/dashboard/hand' : '/dashboard/board/start');
			});
		this.unableStartGame$ = this.gameStore.pipe(select(getUsers), map(players => players.length < 2 || players.length > 10));
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
