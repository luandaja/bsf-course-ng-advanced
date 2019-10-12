import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterStoreModule } from './store/router';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { GameStoreModule } from './store/game';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { GameEffects } from './store/game/game.effects';
import { AngularFirestore } from '@angular/fire/firestore';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiSnackbarModule } from '@glotrix/ui/snackbar';
import { DIXIT_STORAGE, LocalStorageService } from './core/services/local-storage.service';
import { SESSION_STORAGE } from 'ngx-webstorage-service';
@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		CoreModule,
		RouterStoreModule,
		GameStoreModule,
		CoreModule,
		UiSnackbarModule,
		BrowserAnimationsModule,
		AngularFireModule.initializeApp(environment.firebaseConfig),
		AngularFireDatabaseModule,
		EffectsModule.forRoot([GameEffects])
	],
	providers: [
		AngularFirestore,
		{ provide: DIXIT_STORAGE, useExisting: SESSION_STORAGE }, LocalStorageService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
