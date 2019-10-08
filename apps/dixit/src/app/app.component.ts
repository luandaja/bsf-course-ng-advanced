import { Component, OnDestroy, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { GameState, getIsLogged, saveUser, recoverPlayerState, updateBoardStatus } from './store/game';
import { StatusBoardFirebaseService, StatusBoard } from './core/services/state.firebase.service';

@Component({
	selector: 'gt-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
	isLoggedIn$: Subscription;
	hasGameStarted$: Subscription;
	statusBoardChanges$: Subscription;

	@HostListener('window:beforeunload')
	goToPage() {
		this.gameStore.dispatch(saveUser());
	}
	constructor(private gameStore: Store<GameState>,
		private stateService: StatusBoardFirebaseService,
		private router: Router) { }

	ngOnInit(): void {
		this.gameStore.dispatch(recoverPlayerState());
		this.isLoggedIn$ = this.gameStore.pipe(select(getIsLogged))
			.subscribe((isLogged) => this.redirect(isLogged ? '/dashboard/board/start' : '/login'));

		this.statusBoardChanges$ = this.stateService.doc$(StatusBoard.status)
			.subscribe(boardStatus => {
				console.log('boardStatus', boardStatus);
				this.gameStore.dispatch(updateBoardStatus({ boardStatus }));
			});
	}

	ngOnDestroy(): void {
		this.isLoggedIn$.unsubscribe();
		this.statusBoardChanges$.unsubscribe();
	}

	private redirect(url: string) {
		this.router.navigate([url]);
	}

}
