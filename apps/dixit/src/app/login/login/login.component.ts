import { Banner } from '@glotrix/ui/login';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { loginEntries } from './form-fields';
import { Store } from '@ngrx/store';
import { GameState, signIn, getIsLoading, playersLoaded } from '../../store/game';
import { Observable, Subscription } from 'rxjs';
import { PlayerService } from '../../core/services/player.service';

export const banner: Banner = {
	upperText: 'ONLINE BOARD GAMES',
	title: 'Bienvenido a los sábados de juegos online',
	imageUrl: 'l',
	contentText: 'Te esperábamos, sigamos jugando!.'
};

@Component({
	selector: 'gt-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

	entries = loginEntries;
	banner = banner;
	isLoading$: Observable<boolean>;
	playersChanges$: Subscription;

	constructor(private gameStore: Store<GameState>, private playerService: PlayerService) { }

	ngOnInit() {
		this.isLoading$ = this.gameStore.select(getIsLoading);
		this.playersChanges$ = this.playerService.collection$()
			.subscribe((players) => this.gameStore.dispatch(playersLoaded({ players })));
	}

	ngOnDestroy() {
		this.playersChanges$.unsubscribe();
	}

	onSubmitted(formData: any) {
		this.gameStore.dispatch(signIn({ username: formData.username, photoUrl: formData.avatar }));
	}

}
