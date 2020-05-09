import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LinkOption, NavigationUser } from '@glotrix/ui/navigation';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { appModulesAsLinkOption } from '../modules.routes';
import { AuthState, getUser, signOut } from '../../../store/auth';
import { CartState, getCartItems } from '../../../store/cart';

@Component({
	selector: 'gt-dashboard-layout',
	templateUrl: './dashboard-layout.component.html',
	styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent {
	protected options: LinkOption[] = appModulesAsLinkOption;
	protected isSidebarActive: Boolean = true;
	protected user$: Observable<NavigationUser>;
	cartItemsCount$: Observable<number>;

	constructor(private authStore: Store<AuthState>,
		private carStore: Store<CartState>,
		private router: Router) {
		this.cartItemsCount$ = this.carStore.pipe(
			select(getCartItems),
			map(items => items.length));
		this.user$ = this.authStore.pipe(
			select(getUser),
			map(
				user =>
					({
						fullName: `${user.firstName} ${user.lastName}`,
						photoUrl: user.photoUrl
					} as NavigationUser)
			)
		);
	}

	goToCart() {
		this.router.navigateByUrl('dashboard/cart');
	}

	onLogOut() {
		this.authStore.dispatch(signOut());
		this.router.navigateByUrl('login');
	}
}
