import { Injectable } from '@angular/core';
import { CanActivate, Router, CanLoad } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { GameState, getIsLogged } from '../../store/game';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
	constructor(private router: Router, private store: Store<GameState>) { }

	public canLoad(): Observable<boolean> {
		return this.verifyUser();
	}

	public canActivate(): Observable<boolean> {
		return this.verifyUser();
	}

	private verifyUser() {
		return this.store.pipe(select(getIsLogged)).pipe(
			map(isLoggedIn => {
				if (!isLoggedIn) {
					//this.store$.dispatch(new AuthActions.NavigateToLogin());
					this.router.navigate(['/login']);
					return false;
				}
				//	console.log(`( Yes. Navigate the user to the requested route. )`);
				return true;
			}),
			take(1)
		);
	}
}
