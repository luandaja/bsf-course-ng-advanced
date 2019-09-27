import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { GameState, getIsLogged } from './store/game';

@Component({
	selector: 'gt-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
	isLoggedIn$: Subscription;

	constructor(private gameStore: Store<GameState>, private router: Router) { }

	ngOnInit(): void {
		this.isLoggedIn$ = this.gameStore
			.pipe(select(getIsLogged))
			.subscribe((isLogged: boolean) => this.redirect(isLogged));
	}

	private redirect(isLogged: boolean) {
		if (isLogged) {
			//		console.log('loggeado');
			this.router.navigate(['/dashboard']);
		} else {
			//		console.log('no loggeado');
			this.router.navigate(['/login']);
		}
	}

	ngOnDestroy(): void {
		this.isLoggedIn$.unsubscribe();
	}
}
