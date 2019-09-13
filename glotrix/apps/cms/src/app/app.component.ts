import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthState, selectIsLogged } from './core/store/auth';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'gt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'cms';
  isLoggedIn$: Subscription;

  constructor(private store: Store<AuthState>) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(selectIsLogged))
      .subscribe((isLogged: boolean) => this.redirect(isLogged));
  }

  private redirect(isLogged: boolean) {
    if (isLogged) {
      console.log('loggeado');
    }
    else {
      console.log('no loggeado');
    }
  }

  ngOnDestroy(): void {
    this.isLoggedIn$.unsubscribe();
  }

}
