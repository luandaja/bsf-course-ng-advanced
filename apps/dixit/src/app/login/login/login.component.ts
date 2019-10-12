import { Banner } from '@glotrix/ui/login';
import { Component, OnInit } from '@angular/core';
import { loginEntries } from './form-fields';
import { Store, select } from '@ngrx/store';
import { GameState, signIn, getIsLoading, getAvatars, getHasGameStarted, restart, getIsRestarting, getAbleToLogin, getAbleToRestart } from '../../store/game';
import { Observable } from 'rxjs';
import { SnackbarService } from '@glotrix/ui/snackbar';
import { map } from 'rxjs/operators';

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
	entries = loginEntries;
	banner = banner;

	isLoginVisible$: Observable<boolean>;
	isRestartVisible$: Observable<boolean>;

	isLoading$: Observable<boolean>;
	isRestarting$: Observable<boolean>;
	avatars$: Observable<string[]>;

	selectedAvatar: string = null;

	constructor(private gameStore: Store<GameState>, private snackbarService: SnackbarService) { }

	ngOnInit() {
		this.isLoading$ = this.gameStore.select(getIsLoading);
		this.isRestarting$ = this.gameStore.select(getIsRestarting);

		this.isLoginVisible$ = this.gameStore.pipe(select(getAbleToLogin), map(g => {
			return g;
		}));
		this.isRestartVisible$ = this.gameStore.select(getAbleToRestart);
		this.avatars$ = this.gameStore.select(getAvatars);
	}

	onSubmitted(formData: any) {
		if (this.selectedAvatar === null) {
			this.snackbarService.showWarning('Please select an avatar', 'Dixit');
			return;
		}
		this.gameStore.dispatch(signIn({ username: formData.username, photoUrl: this.selectedAvatar }));
	}

	onAvatarSelected(avatar: string) {
		this.selectedAvatar = avatar;
	}

	restartGame() {
		this.gameStore.dispatch(restart());
	}

}
