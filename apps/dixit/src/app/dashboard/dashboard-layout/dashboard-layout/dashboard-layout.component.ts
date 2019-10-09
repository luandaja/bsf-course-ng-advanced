import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LinkOption, NavigationUser } from '@glotrix/ui/navigation';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { appModulesAsLinkOption } from '../modules.routes';
import { GameState, getUserPlayer, signOut } from '../../../store/game';

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
			map(user =>
				({
					fullName: user.username || null,
					photoUrl: user.photoUrl || null
				} as NavigationUser)
			)
		);
	}

	onLogOut() {
		this.store.dispatch(signOut());
	}
}
