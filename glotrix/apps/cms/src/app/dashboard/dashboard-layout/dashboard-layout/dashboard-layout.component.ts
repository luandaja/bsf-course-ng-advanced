import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LinkOption, NavigationUser } from '@glotrix/ui/navigation';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from '../../../core/store';
import { getUser, signOut } from '../../../core/store/auth';
import { appModulesAsLinkOption } from '../modules.routes';

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
}
