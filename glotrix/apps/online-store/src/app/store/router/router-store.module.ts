import { NgModule } from '@angular/core';
import { StoreRouterConnectingModule, RouterState } from '@ngrx/router-store';
import { CustomSerializer } from './CustomSerializer';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    // StoreModule.forFeature(, fromScoreboard.reducer),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal,
      serializer: CustomSerializer
    })
  ]
})
export class RouterStoreModule { }
