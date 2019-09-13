import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AuthState, getIsLogged } from './core/store/auth';

@Component({
  selector: 'gt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'cms';
  isLoggedIn$: Subscription;

  constructor(private store: Store<AuthState>, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store
      .pipe(select(getIsLogged))
      .subscribe((isLogged: boolean) => this.redirect(isLogged));
  }

  private redirect(isLogged: boolean) {
    if (isLogged) {
      console.log('loggeado');
      this.router.navigate(['/dashboard']);
    } else {
      console.log('no loggeado');
    }
  }

  ngOnDestroy(): void {
    this.isLoggedIn$.unsubscribe();
  }
}
