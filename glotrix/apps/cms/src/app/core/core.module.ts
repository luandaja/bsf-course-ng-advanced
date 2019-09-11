import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(appReducers, {
      runtimeChecks: {
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictStateImmutability: true,
        strictStateSerializability: true
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot()
  ]
})
export class CoreModule {}
