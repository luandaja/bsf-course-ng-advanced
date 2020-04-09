import { Banner } from '@glotrix/ui/login';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GameState, signIn, getIsLoading, getAvatars, restart, getIsRestarting, getAbleToLogin, getAbleToRestart } from '../../store/game';
import { Observable } from 'rxjs';
import { SnackbarService } from '@glotrix/ui/snackbar';

export const banner: Banner = {
	upperText: 'ONLINE BOARD GAMES',
	title: 'Bienvenido a los sábados de juegos online',
	contentText: 'Te esperábamos, sigamos jugando!.'
};

@Component({
	selector: 'gt-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	banner = banner;

	isLoginVisible$: Observable<boolean>;
	isRestartVisible$: Observable<boolean>;
	isLoading$: Observable<boolean>;
	isRestarting$: Observable<boolean>;
	avatars$: Observable<string[]>;


	constructor(private gameStore: Store<GameState>, private snackbarService: SnackbarService) { }

	ngOnInit() {
		this.isLoading$ = this.gameStore.select(getIsLoading);
		this.isRestarting$ = this.gameStore.select(getIsRestarting);
		this.isLoginVisible$ = this.gameStore.select(getAbleToLogin);
		this.isRestartVisible$ = this.gameStore.select(getAbleToRestart);
		this.avatars$ = this.gameStore.select(getAvatars);
	}

	onPlayerChange(player: { avatarUrl: string, username: string }) {
		if (player.avatarUrl === null) {
			this.snackbarService.showWarning('Please select an avatar', 'Dixit');
			return;
		}
		this.gameStore.dispatch(signIn({ username: player.username, photoUrl: player.avatarUrl }));
	}

	restartGame() {
		this.gameStore.dispatch(restart());
	}

}
