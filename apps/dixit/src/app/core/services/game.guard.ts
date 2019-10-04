import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { GameState, getHasGameStarted } from '../../store/game';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class GameGuard implements CanLoad {

	constructor(private router: Router, private store: Store<GameState>) { }

	public canLoad(): Observable<boolean> {
		return this.store.pipe(select(getHasGameStarted),
			map(hasGameStarted => {
				if (!hasGameStarted) {
					this.router.navigate(['/dashboard/board/start']);
					return false;
				}
				return true;
			}),
			take(1)
		);
	}
}
