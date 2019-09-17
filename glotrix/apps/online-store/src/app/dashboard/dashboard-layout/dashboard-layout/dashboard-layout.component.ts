import { Component, OnInit } from '@angular/core';
import { LinkOption, NavigationUser } from '@glotrix/ui/navigation';
import { Observable } from 'rxjs';
import { appModulesAsLinkOption } from '../modules.routes';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import { getUser, signOut } from '../../../store/auth';
import { map } from 'rxjs/operators';

@Component({
  selector: 'gt-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent {

  protected options: LinkOption[] = appModulesAsLinkOption;

  protected isSidebarActive: Boolean = true;

  protected user$: Observable<NavigationUser>;

  constructor(private store: Store<AppState>, private router: Router) {
    this.user$ = this.store.pipe(
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

  onLogOut() {
    this.store.dispatch(signOut());
    this.router.navigateByUrl('login');
  }

  goToCart() {
    this.router.navigateByUrl('dashboard/cart');
  }
}
