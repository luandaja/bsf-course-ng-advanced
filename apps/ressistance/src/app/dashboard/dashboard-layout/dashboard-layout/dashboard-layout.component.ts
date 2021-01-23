import { Component, OnInit } from '@angular/core';
import { LinkOption, NavigationUser } from '@glotrix/ui/navigation';
import { appModulesAsLinkOption } from '../module.routes';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { GameState, signOut, getUserPlayer } from '../../../store/game';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
	selector: 'gt-dashboard-layout',
	templateUrl: './dashboard-layout.component.html',
	styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent {
	options: LinkOption[] = appModulesAsLinkOption;

	isSidebarActive: Boolean = true;

	user$: Observable<NavigationUser>;

	constructor(private store: Store<GameState>, private router: Router) {
		this.user$ = this.store.pipe(
			select(getUserPlayer),
			map(user => {
				return user === null ? null : {
					fullName: user.username,
					photoUrl: user.photoUrl
				} as NavigationUser
			}
			)
		);
	}

	onLogOut() {
		this.store.dispatch(signOut());
	}

}
