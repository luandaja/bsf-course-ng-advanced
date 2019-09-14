import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { AuthState, getIsLogged } from '../store/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private store: Store<AuthState>) {}

  public canActivate(): Observable<boolean> {
    return this.getLoggedState().pipe(
      map(authed => {
        if (!authed) {
          //this.store$.dispatch(new AuthActions.NavigateToLogin());
          console.log(`canActivate( No. Redirect the user back to login. )`);
          this.router.navigate(['/login']);
          return false;
        }
        console.log(`canActivate( Yes. Navigate the user to the requested route. )`);
        return true;
      }),
      first()
    );
  }

  private getLoggedState(): Observable<boolean> {
    return this.store.pipe(select(getIsLogged)).pipe(first());
  }
}
