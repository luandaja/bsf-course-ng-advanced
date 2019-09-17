import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthStoreModule } from './store/auth/auth-store.module';
import { RouterStoreModule } from './store/router';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AuthStoreModule,
    RouterStoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
