import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { GameState, getIsLogged, getHasGameStarted } from './store/game';

@Component({
	selector: 'gt-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
	isLoggedIn$: Subscription;
	hasGameStarted$: Subscription;

	constructor(private gameStore: Store<GameState>,
		private router: Router) { }

	ngOnInit(): void {
		this.isLoggedIn$ = this.gameStore.pipe(select(getIsLogged))
			.subscribe((isLogged) => this.redirect(isLogged ? '/dashboard/board/start' : '/login'));
	}

	ngOnDestroy(): void {
		this.isLoggedIn$.unsubscribe();
		// this.hasGameStarted$.unsubscribe();
	}

	private redirect(url: string) {
		this.router.navigate([url]);
	}

}
