import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { GameState, getIsLogged, updateBoardStatus, usersLoaded } from './store/game';
import { StatusBoardFirebaseService, StatusBoard } from './core/services/state-firebase.service';
import { PlayerService } from './core/services/player.service';
import { Router } from '@angular/router';

@Component({
	selector: 'gt-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
	isLoggedIn$: Subscription;
	statusBoardChanges$: Subscription;
	playersChanges$: Subscription;

	constructor(private gameStore: Store<GameState>,
		private stateService: StatusBoardFirebaseService,
		private playerService: PlayerService,
		private router: Router) { }

	ngOnInit(): void {
		this.isLoggedIn$ = this.gameStore.pipe(select(getIsLogged))
			.subscribe((isLogged) => this.redirect(isLogged ? '/dashboard/board/start' : '/login'));

		this.statusBoardChanges$ = this.stateService.doc$(StatusBoard.status)
			.subscribe(board => {
				this.gameStore.dispatch(updateBoardStatus({ board }));
			});

		this.playersChanges$ = this.playerService.collection$()
			.subscribe((users) => this.gameStore.dispatch(usersLoaded({ users })));
	}

	ngOnDestroy(): void {
		this.isLoggedIn$.unsubscribe();
		this.statusBoardChanges$.unsubscribe();
		this.playersChanges$.unsubscribe();
	}

	private redirect(url: string) {
		this.router.navigate([url]);
	}
}
