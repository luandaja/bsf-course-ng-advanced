import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		StoreModule.forRoot(
			{},
			{
				runtimeChecks: {
					strictActionImmutability: true,
					strictActionSerializability: true,
					strictStateImmutability: true,
					strictStateSerializability: true
				}
			}
		),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
	]
})
export class CoreModule { }
