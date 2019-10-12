import { Injectable } from '@angular/core';
import { CanLoad, Router, CanActivate } from '@angular/router';
import { GameState, getHasGameStarted } from '../../store/game';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { SnackbarService } from '@glotrix/ui/snackbar';

@Injectable({
	providedIn: 'root'
})
export class GameGuard implements CanActivate, CanLoad {

	constructor(private router: Router,
		private store: Store<GameState>,
		private snackbarService: SnackbarService) { }

	public canLoad(): Observable<boolean> {
		return this.verifyGameStatus();
	}
	public canActivate(): Observable<boolean> {
		return this.verifyGameStatus();
	}

	private verifyGameStatus() {
		return this.store.pipe(select(getHasGameStarted),
			map(hasGameStarted => {
				if (!hasGameStarted) {
					this.snackbarService.showWarning('The game has to start before navigate around', 'Dixit');
					this.router.navigate(['/dashboard/board/start']);
					return false;
				}
				return true;
			}),
			take(1)
		);
	}
}
