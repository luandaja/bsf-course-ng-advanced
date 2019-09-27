import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterStoreModule } from './store/router';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { GameStoreModule } from './store/game';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		CoreModule,
		RouterStoreModule,
		GameStoreModule,
		CoreModule
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
