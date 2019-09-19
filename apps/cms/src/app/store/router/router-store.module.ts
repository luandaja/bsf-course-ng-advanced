import { NgModule } from '@angular/core';
import {
	StoreRouterConnectingModule,
	RouterState,
	routerReducer
} from '@ngrx/router-store';
import { CustomSerializer } from './CustomSerializer';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';

@NgModule({
	imports: [
		CommonModule,
		StoreModule.forFeature('router', routerReducer),
		StoreRouterConnectingModule.forRoot({
			routerState: RouterState.Minimal,
			serializer: CustomSerializer
		})
	],
	exports: []
})
export class RouterStoreModule {}
