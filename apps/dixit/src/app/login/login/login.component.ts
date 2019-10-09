import { Banner } from '@glotrix/ui/login';
import { Component, OnInit } from '@angular/core';
import { loginEntries } from './form-fields';
import { Store } from '@ngrx/store';
import { GameState, signIn, getIsLoading } from '../../store/game';
import { Observable } from 'rxjs';

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
	isLoading$: Observable<boolean>;

	constructor(private gameStore: Store<GameState>) { }

	ngOnInit() {
		this.isLoading$ = this.gameStore.select(getIsLoading);
	}

	onSubmitted(formData: any) {
		this.gameStore.dispatch(signIn({ username: formData.username, photoUrl: formData.avatar }));
	}

}
