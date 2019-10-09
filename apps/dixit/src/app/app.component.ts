import { Component, OnDestroy, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { GameState, getIsLogged, saveUser, recoverPlayerState, updateBoardStatus, playersLoaded } from './store/game';
import { StatusBoardFirebaseService, StatusBoard } from './core/services/state.firebase.service';
import { PlayerService } from './core/services/player.service';

@Component({
	selector: 'gt-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
	isLoggedIn$: Subscription;
	statusBoardChanges$: Subscription;
	playersChanges$: Subscription;

	@HostListener('window:beforeunload')
	saveUserLocally() {
		this.gameStore.dispatch(saveUser());
	}
	constructor(private gameStore: Store<GameState>,
		private stateService: StatusBoardFirebaseService,
		private playerService: PlayerService,
		private router: Router) { }

	ngOnInit(): void {
		this.gameStore.dispatch(recoverPlayerState());
		this.isLoggedIn$ = this.gameStore.pipe(select(getIsLogged))
			.subscribe((isLogged) => this.redirect(isLogged ? '/dashboard/board/start' : '/login'));

		this.statusBoardChanges$ = this.stateService.doc$(StatusBoard.status)
			.subscribe(boardStatus => {
				this.gameStore.dispatch(updateBoardStatus({ boardStatus }));
			});

		this.playersChanges$ = this.playerService.collection$()
			.subscribe((players) => this.gameStore.dispatch(playersLoaded({ players })));
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
