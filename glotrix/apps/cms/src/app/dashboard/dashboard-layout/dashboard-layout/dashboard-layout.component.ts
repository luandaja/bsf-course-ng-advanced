import { Component, OnInit, Input } from '@angular/core';
import { LinkOption, NavigationUser } from '@glotrix/ui/navigation';
import { appModulesAsLinkOption } from '../modules.routes';
import { Observable } from 'rxjs';
import { User } from '../../../models';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../core/store';
import { getUser, getUserWithFullName } from '../../../core/store/auth';
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

  constructor(private store: Store<AppState>) {
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
}
