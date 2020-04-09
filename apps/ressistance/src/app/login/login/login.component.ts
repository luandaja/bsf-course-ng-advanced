import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameState, signIn, getAvatars, getAbleToRestart, getAbleToLogin, getIsRestarting, getIsLoading } from '../../store/game';
import { Store } from '@ngrx/store';
import { Banner } from '@glotrix/ui/login';
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
	isLoading$: Observable<boolean>;
	avatars$: Observable<string[]>;

	constructor(private gameStore: Store<GameState>, private snackbarService: SnackbarService) { }

	ngOnInit() {
		this.isLoading$ = this.gameStore.select(getIsLoading);
		this.isLoginVisible$ = this.gameStore.select(getAbleToLogin);
		this.avatars$ = this.gameStore.select(getAvatars);
	}

	onPlayerChange(player: { avatarUrl: string, username: string }) {
		if (player.avatarUrl === null) {
			this.snackbarService.showWarning('Please select an avatar', 'The Ressistance');
			return;
		}
		this.gameStore.dispatch(signIn({ username: player.username, photoUrl: player.avatarUrl }));
	}

	restartGame() {
		//	this.gameStore.dispatch(restart());
	}

}
